import React, { useState, useMemo } from 'react'
import { Link, NavLink, Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Main } from '@daml.js/healthcare-claims-processing';
import { CreateEvent } from '@daml/ledger';
import { useStreamQuery, useLedger } from '@daml/react';
import { CalendarBlank, CaretRight } from "phosphor-react";
import { mapIter, leftJoin, intercalate, Field, FieldsRow, TabLink, useAsync } from "./Common";
import { Formik, Form, Field as FField, useField } from 'formik';
import Select from 'react-select';
import { LField, EField, ChoiceModal, Nothing } from "./ChoiceModal";
import { TabularScreenRoutes, TabularView, SingleItemView } from "./TabularScreen";

const ClaimRoutes : React.FC = () =>
  <TabularScreenRoutes metavar=":claimId" table={Claims} detail={Claim}/>

const useClaims = (query: any) => {
  const ledger = useLedger();
  const claim = useAsync(async () => query.claimId ? await ledger.fetch(Main.Claim.Claim, query.claimId) : null, [query]);
  const claimsStream = useStreamQuery(Main.Claim.Claim, () => query).contracts;
  const claims : readonly CreateEvent<Main.Claim.Claim>[] = query.claimId && claim ? [claim] : claimsStream;
  const receipts = useStreamQuery(Main.Claim.PaymentReceipt, () => ({ })).contracts;

  const keyedClaims = new Map(claims.map(claim => [claim.payload.claimId, claim]));
  const keyedReceipts = new Map(receipts.map(receipt => [receipt.payload.paymentId, receipt]));

  const disclosed = useStreamQuery(Main.Policy.DisclosedPolicy).contracts;

  const keyedDisclosed = new Map(disclosed.map(p => [p.payload.patient, p]));

  return Array.from(mapIter(
    ([claim, receipt]) => ({
      claim,
      receipt,
      disclosed: keyedDisclosed.get(claim.payload.encounterDetails.patient),
    }),
    leftJoin(keyedClaims, keyedReceipts).values(),
  ));
}

const useClaimsData = () => useClaims( { } )

const Claims: React.FC = () => {
  return <TabularView
  title="Claims"
  useData={useClaimsData}
  fields={ [
    { label: "Patient Name", getter: o => o?.disclosed?.payload?.patientName || "unknown patient" },
    { label: "Payer", getter: o => o?.claim?.payload?.payer },
    { label: "Procedure Code", getter: o => o?.claim?.payload?.encounterDetails.procedureCode },
    { label: "Amount", getter: o => o?.claim?.payload?.amount },
    { label: "Complete", getter: o => o?.receipt ? "Yes" : "No" },
  ] }
  tableKey={ o => o.claim.contractId }
  itemUrl={ o => o.claim.contractId }
  />
}

const useClaimData = () => {
  const { claimId } = useParams< { claimId: string } >();
  const overview = useClaims( { claimId } )[0];
  return [ { claimId, overview: overview } ];
}

const Claim : React.FC = () => {
  const dollars = (n: any) => n ? "$" + n : "";
  return <SingleItemView
    title="Claim"
    useData={useClaimData}
    fields={ [
      [
        { label: "Allowed Amount", getter: o => dollars(o?.overview?.claim?.payload?.encounterDetails?.allowedAmount)},
        { label: "CoPay", getter: o => dollars(o?.overview?.claim?.payload?.encounterDetails?.coPay)},
        { label: "Patient Responsibility", getter: o => dollars(o?.overview?.claim?.payload?.encounterDetails?.patientResponsibility)},
        { label: "Claim Amount", getter: o => dollars(o?.overview?.claim?.payload?.amount)},
      ],
      [
        { label: "Provider Name", getter: o => "" }, //TODO
        { label: "Patient Name", getter: o => o?.overview?.claim?.payload?.encounterDetails?.patient},
        { label: "Appointment Date", getter: o => "" }, //TODO
        { label: "Appointment Priority", getter: o => o?.overview?.claim?.payload?.encounterDetails.appointmentPriority},
      ],
      [
        { label: "Procedure Code", getter: o => o?.overview?.claim?.payload?.encounterDetails.procedureCode},
        { label: "Diagnosis Code", getter: o => o?.overview?.claim?.payload?.encounterDetails.diagnosisCode},
        { label: "Site Service Code", getter: o => o?.overview?.claim?.payload?.encounterDetails.siteServiceCode},
      ],
    ] }
    tableKey={ o => o.overview?.claim?.contractId }
    itemUrl={ o => "" }
    choices={ d => [
            <ChoiceModal className="flex flex-col"
                         choice={Main.Claim.Claim.PayClaim}
                         contract={d.overview?.claim?.contractId}
                         submitTitle="Pay Claim"
                         buttonTitle="Pay Claim"
                         icon={<CalendarBlank size={20}/>}
                         initialValues={ { } } >
              <h1 className="text-center">Pay Claim</h1>
            </ChoiceModal>
    ] }
    />
  ;
}

export default ClaimRoutes;
