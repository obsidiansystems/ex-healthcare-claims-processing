import React, { useState, useMemo } from 'react'
import { Link, NavLink, Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Main } from '@daml.js/healthcare-claims-processing';
import { CreateEvent } from '@daml/ledger';
import { useStreamQuery, useLedger, useParty } from '@daml/react';
import { CaretRight, Share } from "phosphor-react";
import { mapIter, innerJoin, intercalate, Field, FieldsRow, Message, TabLink, useAsync } from "./Common";
import { Formik, Form, Field as FField, useField } from 'formik';
import Select from 'react-select';
import { LField, EField, ChoiceModal, DayTimePickerField, FollowUp, Nothing } from "./ChoiceModal";
import { TabularScreenRoutes, TabularView, SingleItemView } from "./TabularScreen";

const ReferralRoutes : React.FC = () =>
  <TabularScreenRoutes metavar=":referralId" table={Referrals} detail={Referral}/>

const useReferrals = (query: any) => {
  const ledger = useLedger();
  const referral = useAsync(async () => query.referralId ? await ledger.fetch(Main.Provider.ReferralDetails, query.referralId) : null, [query]);
  const referralsStream = useStreamQuery(Main.Provider.ReferralDetails, () => query).contracts;
  const referrals : readonly CreateEvent<Main.Provider.ReferralDetails>[] = query.referralId && referral ? [referral] : referralsStream;

  const disclosed = useStreamQuery(Main.Policy.DisclosedPolicy).contracts;

  const keyedReferrals = new Map(referrals.map(p => [p.payload.referralDetails.policy, p]));
  const keyedDisclosed = new Map(disclosed.map(p => [p.contractId, p]));
  return Array.from(mapIter(
    ([referral, policy]) => ({ referral, policy }),
    innerJoin(keyedReferrals, keyedDisclosed).values(),
  ));
}

const useReferralsData = () => useReferrals( { } )

const Referrals: React.FC = () => {
  return <TabularView
    title="Referrals"
    useData={useReferralsData}
    fields={ [
      { label: "Name", getter: o => o?.policy?.payload?.patientName},
      { label: "Referring Party", getter: o => o?.referral?.payload?.referringProvider},
      { label: "Referral Date", getter: o => "unknown" },
      { label: "Appointment Priority", getter: o => o?.referral?.payload?.referralDetails?.encounterDetails?.appointmentPriority},
    ] }
    tableKey={ o => o.referral.contractId }
    itemUrl={ o => o.referral.contractId }
    />
}

const useReferralData = () => {
  const { referralId } = useParams< { referralId: string } >();
  const overviews = useReferrals( { referralId: referralId } ); // { referralId: referralId });
  return [ { referralId, overview: overviews[0] } ];
}

const Referral: React.FC = () => {
  const role = useParty();
  return <SingleItemView
    title="Referral"
    useData={useReferralData}
    fields={ [[
      { label: "Name", getter: o => o?.overview?.policy?.payload?.patientName},
      { label: "Referring Party", getter: o => o?.overview?.referral?.payload?.referringProvider},
      { label: "Referral Date", getter: o => "unknown" },
      { label: "Appointment Priority", getter: o => o?.overview?.referral?.payload?.referralDetails?.encounterDetails?.appointmentPriority},
    ]] }
    tableKey={ o => o.overview.referral.contractId }
    itemUrl={ o => "" }
    choices={ d => d?.overview?.referral?.payload?.renderingProvider == role ? [
            <ChoiceModal className="flex flex-col"
                         choice={Main.Provider.ReferralDetails.ScheduleAppointment}
                         contract={d.overview?.referral?.contractId}
                         submitTitle="Schedule Appointment"
                         buttonTitle="Schedule Appointment"
                         icon={<Share />}
                         initialValues={ { appointmentTime: Nothing } }
                         successWidget={({ rv: [v, evts] }, close) =>
                           <>
                             <Message
                               title="Appointment Created!"
                               content={"An appointment has been scheduled for " + d.overview?.policy?.payload?.patientName + "." /* TODO: date */}
                             />
                             {  /* TODO: "View Appointment" link */ }
                           </>}
            >
              <h1 className="text-center">Schedule Appointment</h1>
              <p>Select a date for this appointment</p>
              <DayTimePickerField name="appointmentTime" />
            </ChoiceModal>
    ] : [] }

    />
  ;
}

export default ReferralRoutes;
