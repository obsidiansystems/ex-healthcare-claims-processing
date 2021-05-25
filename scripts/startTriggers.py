#!/usr/bin/env python3
#
# Copyright (c) 2019, Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
# SPDX-License-Identifier: Apache-2.0
#

import argparse
import logging
import time

from damlassistant import get_package_id, start_trigger_service_in_background, kill_process, \
    add_trigger_to_service, wait_for_port, catch_signals, DEFAULT_TRIGGER_SERVICE_PORT


dar = 'target/healthcare-claims-processing-triggers.dar'

triggers_with_parties = [
    ("InsuranceCompany", "Triggers.AcceptClaimTrigger:acceptClaimTrigger"),
    ("Radiologist", "Triggers.EvaluateReferralTrigger:evaluateReferralTrigger"),
    ("InsuranceCompany", "Triggers.AcknowledgeAppointmentTrigger:acknowledgeAppointmentTrigger"),
    ("Radiologist", "Triggers.UpdateReferralDetailsTrigger:updateReferralDetailsTrigger"),
    ("Patient1", "Triggers.AcknowledgeAndDiscloseTrigger:acknowledgeAndDiscloseTrigger"),
    ("Patient1", "Triggers.AcceptPatientPaymentRequestTrigger:acceptPatientPaymentRequestTrigger"),
]

parser = argparse.ArgumentParser()
parser.add_argument('ledger_port')
args = parser.parse_args()

logging.basicConfig(level=logging.DEBUG)

wait_for_port(port=args.ledger_port, timeout=30)

service = start_trigger_service_in_background(dar=dar, ledger_port=args.ledger_port)
try:
    catch_signals()
    package_id = get_package_id(dar)
    wait_for_port(port=DEFAULT_TRIGGER_SERVICE_PORT, timeout=30)
    for party, triggerName in triggers_with_parties:
        add_trigger_to_service(party=party, package_id=package_id, trigger=triggerName)

    def print_message_after_triggers_started(m: str):
        time.sleep(3)
        print(m)

    print_message_after_triggers_started('\nPress Ctrl+C to stop...')
    service.wait()
    logging.error(f"Trigger service died unexpectedly:\n{service.stderr}")
finally:
    kill_process(service)
