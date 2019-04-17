/**
 * Copyright (c) 2019, Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package com.digitalasset.refapps.healthcareclaims;

import com.daml.ledger.rxjava.DamlLedgerClient;
import com.daml.ledger.rxjava.components.Bot;
import com.digitalasset.refapps.healthcareclaims.bot.AcceptClaimBot;
import com.digitalasset.refapps.healthcareclaims.bot.AcceptPatientPaymentRequestBot;
import com.digitalasset.refapps.healthcareclaims.bot.AcknowledgeAndDiscloseBot;
import com.digitalasset.refapps.healthcareclaims.bot.AcknowledgeAppointmentBot;
import com.digitalasset.refapps.healthcareclaims.bot.EvaluateReferralBot;
import com.digitalasset.refapps.healthcareclaims.bot.UpdateReferralDetailsBot;
import com.digitalasset.refapps.healthcareclaims.util.CliOptions;
import com.digitalasset.refapps.healthcareclaims.util.CommandsAndPendingSetBuilder;
import com.digitalasset.refapps.healthcareclaims.util.TimeManager;
import java.time.Duration;
import java.util.Arrays;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main {
  private static final Logger logger = LoggerFactory.getLogger(Main.class);

  private static final String applicationId = "healthcare-claims-processing";
  private static final String PrimaryCareProvider = "PrimaryCareProvider";
  private static final String Radiologist = "Radiologist";
  private static final String InsuranceCompany = "InsuranceCompany";
  private static final String PatientNameBase = "Patient";

  public static void main(String[] args) {
    CliOptions options = CliOptions.parseArgs(args);
    DamlLedgerClient client =
        DamlLedgerClient.forHostWithLedgerIdDiscovery(
            options.getSandboxHost(), options.getSandboxPort(), Optional.empty());
    waitForSandbox(options, client);

    StringBuilder sb = new StringBuilder("Listing packages:");
    client.getPackageClient().listPackages().forEach(id -> sb.append(id).append("\n"));
    logger.info(sb.toString());

    try {
      CommandsAndPendingSetBuilder.Factory factory =
          new CommandsAndPendingSetBuilder.Factory(
              applicationId, new TimeManager(client.getTimeClient()), Duration.ofMillis(5000));
      AcceptClaimBot acceptClaimBot = new AcceptClaimBot(factory, InsuranceCompany);

      Bot.wire(
          applicationId,
          client,
          acceptClaimBot.transactionFilter,
          acceptClaimBot::calculateCommands,
          acceptClaimBot::getContractInfo);

      EvaluateReferralBot evaluateReferralBot = new EvaluateReferralBot(factory, Radiologist);

      Bot.wire(
          applicationId,
          client,
          evaluateReferralBot.transactionFilter,
          evaluateReferralBot::calculateCommands,
          evaluateReferralBot::getContractInfo);

      AcknowledgeAppointmentBot acknowledgeAppointmentBot =
          new AcknowledgeAppointmentBot(factory, InsuranceCompany);

      Bot.wire(
          applicationId,
          client,
          acknowledgeAppointmentBot.transactionFilter,
          acknowledgeAppointmentBot::calculateCommands,
          acknowledgeAppointmentBot::getContractInfo);

      UpdateReferralDetailsBot updateReferralDetailsBot =
          new UpdateReferralDetailsBot(factory, Radiologist);

      Bot.wire(
          applicationId,
          client,
          updateReferralDetailsBot.transactionFilter,
          updateReferralDetailsBot::calculateCommands,
          updateReferralDetailsBot::getContractInfo);

      // acknowledgeBot for 10 patients
      for (int i = 0; i < 10; ++i) {
        String patient = PatientNameBase + (i + 1);
        addAcknowledgeAndDiscloseBot(client, factory, patient);
        addAcceptPatientPaymentRequestBot(client, factory, patient);
      }

      logger.info("Welcome to Healthcare Claims Processing application!");
      logger.info("Press Ctrl+C to shut down the program.");

      Thread.currentThread().join();
      client.close();
      logger.info("Program terminated.");
    } catch (Exception e) {
      logger.warn("Is Sandbox running? ", e);
    }
  }

  private static void addAcknowledgeAndDiscloseBot(
      DamlLedgerClient client, CommandsAndPendingSetBuilder.Factory factory, String patient) {
    AcknowledgeAndDiscloseBot acknowledgeAndDiscloseBot =
        new AcknowledgeAndDiscloseBot(
            factory, patient, Arrays.asList(PrimaryCareProvider, Radiologist));
    Bot.wire(
        applicationId,
        client,
        acknowledgeAndDiscloseBot.transactionFilter,
        acknowledgeAndDiscloseBot::calculateCommands,
        acknowledgeAndDiscloseBot::getContractInfo);
  }

  private static void addAcceptPatientPaymentRequestBot(
      DamlLedgerClient client, CommandsAndPendingSetBuilder.Factory factory, String patient) {
    AcceptPatientPaymentRequestBot acceptPatientPaymentRequestBot =
        new AcceptPatientPaymentRequestBot(factory, patient);
    Bot.wire(
        applicationId,
        client,
        acceptPatientPaymentRequestBot.transactionFilter,
        acceptPatientPaymentRequestBot::calculateCommands,
        acceptPatientPaymentRequestBot::getContractInfo);
  }

  private static void waitForSandbox(CliOptions options, DamlLedgerClient client) {
    boolean connected = false;
    while (!connected) {
      try {
        client.connect();
        connected = true;
      } catch (Exception ignored) {
        System.out.println(
            String.format(
                "Connecting to sandbox at %s:%s",
                options.getSandboxHost(), options.getSandboxPort()));
        try {
          Thread.sleep(1000);
        } catch (InterruptedException ignored2) {
        }
      }
    }
    System.out.println(
        String.format(
            "Connected to sandbox at %s:%s", options.getSandboxHost(), options.getSandboxPort()));
  }
}
