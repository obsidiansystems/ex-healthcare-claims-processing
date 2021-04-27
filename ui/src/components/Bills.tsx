import React, { useState, useMemo } from 'react'
import { Link, NavLink, Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Main } from '@daml.js/healthcare-claims-processing';
import { CreateEvent } from '@daml/ledger';
import { useStreamQuery, useLedger } from '@daml/react';
import { CaretRight, Share, ArrowRight } from "phosphor-react";
import { mapIter, leftJoin, intercalate, Field, FieldsRow, TabLink, useAsync } from "./Common";
import { Formik, Form, Field as FField, useField } from 'formik';
import Select from 'react-select';
import { LField, EField, ChoiceModal, Nothing } from "./ChoiceModal";
import { TabularScreenRoutes, TabularView, SingleItemView } from "./TabularScreen";

const BillRoutes : React.FC = () =>
  <TabularScreenRoutes metavar=":billId" table={Bills} detail={Bill}/>

const useBills = (query: any) => {
  const ledger = useLedger();
  const bill = useAsync(async () => query.billId ? await ledger.fetch(Main.Claim.PatientObligation, query.billId) : null, [query]);
  const billsStream = useStreamQuery(Main.Claim.PatientObligation, () => query).contracts;
  const bills : readonly CreateEvent<Main.Claim.PatientObligation>[] = query.billId && bill ? [bill] : billsStream;
  const receipts = useStreamQuery(Main.Claim.PaymentReceipt, () => ({ })).contracts;

  const keyedBills = new Map(bills.map(bill => [bill.payload.paymentId, bill]));
  const keyedReceipts = new Map(receipts.map(receipt => [receipt.payload.paymentId, receipt]));


  return Array.from(mapIter(
    ([bill, receipt]) => ({ bill, receipt }),
    leftJoin(keyedBills, keyedReceipts).values(),
  ));
}

const useBillsData = () => useBills( { } )

const Bills: React.FC = () => {
  return <TabularView
           title="Bills"
           useData={useBillsData}
           fields={ [
             { label: "Provider", getter: o => "Provider name hidden" },
             { label: "Amount", getter: o => o?.bill?.payload?.amount },
             { label: "Appointment Date", getter: o => o?.bill?.payload?.encounterDetails.diagnosisCode },
             { label: "Procedure Code", getter: o => o?.bill?.payload?.encounterDetails.procedureCode },
             { label: "Paid", getter: o => (o?.receipt?.payload) ? "YES" : "NO" },
           ] }
           tableKey={ o => o.bill.contractId }
           itemUrl={ o => o.bill.contractId }
  />
}

const useBillData = () => {
  const { billId } = useParams< { billId: string } >();
  const overview = useBills( { billId } )[0];
  return [ { billId, overview: overview } ];
}

const Bill : React.FC = () => {
  return <SingleItemView
    title="Bill"
    useData={useBillData}
    fields={ [[
      { label: "Paid", getter: o => o?.overview?.receipt ? "Yes" : "No" },
      { label: "Patient Name", getter: o => o?.overview?.bill?.payload?.encounterDetails?.patient},
      { label: "Appointment Date", getter: o => "" },
      { label: "Appointment Priority", getter: o => o?.overview?.bill?.payload?.encounterDetails.appointmentPriority},
      { label: "Procedure Code", getter: o => o?.overview?.bill?.payload?.encounterDetails.procedureCode},
      { label: "Diagnosis Code", getter: o => o?.overview?.bill?.payload?.encounterDetails.diagnosisCode},
      { label: "Site Service Code", getter: o => o?.overview?.bill?.payload?.encounterDetails.siteServiceCode},
      { label: "Allowed Amount", getter: o => o?.overview?.bill?.payload?.encounterDetails?.allowedAmount || ""},
      { label: "CoPay", getter: o => o?.overview?.bill?.payload?.encounterDetails?.coPay || ""},
      { label: "Patient Responsibility", getter: o => o?.overview?.bill?.payload?.encounterDetails?.patientResponsibility || ""},
      { label: "Bill Amount", getter: o => o?.overview?.bill?.payload?.amount || ""},
    ]] }
    tableKey={ o => o.overview?.bill?.contractId }
    itemUrl={ o => "" }
    choices={ d => [
            <ChoiceModal className="flex flex-col"
                         choice={Main.Claim.PatientObligation.PayPatientObligation}
                         contract={d.overview?.bill?.contractId}
                         submitTitle="Bill Pay"
                         buttonTitle="Bill Pay"
                         icon={<Share />}
                         successWidget={({ rv: [v, evts] }, close)=><>
                           <h2 className="2xl">Bill has been paid!</h2>
                             The bill for this procedure has been paid.
                             <a onClick={(e)=>close()}>close</a>
                           </>}
                         failureWidget={()=><>Failure</>}
                         initialValues={ { } } >
              <h1 className="text-center">Pay Bill</h1>
            </ChoiceModal>
    ] }
    />
  ;
}

export default BillRoutes;