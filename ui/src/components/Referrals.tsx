import React, { useState, useMemo } from 'react'
import { Link, NavLink, Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Main } from '@daml.js/healthcare-claims-processing';
import { CreateEvent } from '@daml/ledger';
import { useStreamQuery, useLedger } from '@daml/react';
import { CaretRight, Share } from "phosphor-react";
import { innerJoin, intercalate, Field, FieldsRow, PageTitle, TabLink, useAsync } from "./Common";
import { Formik, Form, Field as FField, useField } from 'formik';
import Select from 'react-select';
import { LField, EField, ChoiceModal, DayPickerField, Nothing } from "./ChoiceModal";


const ReferralRoutes: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:referralId`}>
        <Referral/>
      </Route>
      <Route path={match.path}>
        <Referrals/>
      </Route>
    </Switch>
  )
}

const useReferrals = (query: any) => {
  const ledger = useLedger();
  const referral = useAsync(async () => query.referralId ? await ledger.fetch(Main.Provider.ReferralDetails, query.referralId) : null, [query]);
  const referralsStream = useStreamQuery(Main.Provider.ReferralDetails, () => query).contracts;
  const referrals : readonly CreateEvent<Main.Provider.ReferralDetails>[] = query.referralId && referral ? [referral] : referralsStream;
  
  const disclosed = useStreamQuery(Main.Policy.DisclosedPolicy).contracts;

  const keyedReferrals = Object.fromEntries(referrals.map(p => [p.payload.referralDetails.policy, p]));
  const keyedDisclosed = Object.fromEntries(disclosed.map(p => [p.contractId, p]));
  const overviews = Object.values(innerJoin(keyedReferrals, keyedDisclosed))
                         .map(p => ({ referral: p[0], policy : p[1]}));
  return { overviews };
}

const Referrals: React.FC = () => {
  const match = useRouteMatch();
  const [search, setSearch] = useState("");
  const searchedFor = (s: string) => s.toLowerCase().indexOf(search.toLowerCase()) != -1;
  const visible = useReferrals( { } ); // useStreamQuery(Main.Provider.ReferralDetails).contracts; // .filter(p => searchedFor(p.policy.patientName) || searchedFor(p.policy.insuranceID));

  return (
    <>
    <PageTitle title="Referrals" />
      <div className="flex p-2 bg-white">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name of insurance ID..."
          className="w-full px-3 py-2 h-10 bg-trueGray-100"
        />
      </div>
      <table className="table-fixed">
        <thead>
          <tr className="text-left text-trueGray-500 text-sm">
            <th className="w-1/6"> Patient Name </th>
            <th className="w-1/6"> Referring Party </th>
            <th className="w-1/6"> Insurance ID </th>
            <th className="w-1/6"> Referral Date </th>
            <th className="w-1/6"> Priority </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {visible.overviews.map((po) =>
            <tr key={po.policy.payload.patient} className="bg-white text-trueGray-500 hover:bg-trueGray-100 ">
            <td>{po.policy.payload.patientName}</td>
            <td>{po.referral.payload.referringProvider}</td>
            <td>{po.policy.payload.insuranceID}</td>
            <td> </td>
            <td>{po.referral.payload.referralDetails.encounterDetails.appointmentPriority}</td>
              <td>
                <div className="">
                  <Link to={match.url + "/" + po.referral.contractId} className="flex justify-end">
                    <CaretRight />
                  </Link>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

const Referral: React.FC = () => {
  const { referralId } = useParams< { referralId: string } >();
  const { overviews } = useReferrals( { referralId: referralId } ); // { referralId: referralId });
  const match = useRouteMatch();

  /*const policyRows = disclosed.map((d) =>
    <div>
      <FieldsRow fields={[
        { label: "Receivers", value: d.receivers.join() },
        { label: "Insurance ID", value: d.insuranceID },
      ]} />
    </div>
  )*/

  const pcpResult = useStreamQuery(Main.Provider.Provider).contracts;
  const pcpContract = pcpResult[0];

  
  const content = (overview : { policy: CreateEvent<Main.Policy.DisclosedPolicy>, referral: CreateEvent<Main.Provider.ReferralDetails> }) => (
    <div className="flex flex-col p-5 space-y-4 bg-white rounded shadow-lg">
      <Switch>
        {/*<Route exact path={match.path + "/policies"}>
          <div className="flex flex-col space-y-4">
            { intercalate(policyRows, <hr />) }
          </div>
        </Route>*/}
        <Route exact path={match.path}>
          <div>
            <ChoiceModal className="flex flex-col"
                         choice={Main.Provider.ReferralDetails.ScheduleAppointment}
                         contract={overview.referral?.contractId}
                         submitTitle="Schedule Appointment"
                         buttonTitle="Schedule Appointment"
                         icon={<Share />}
                         initialValues={ { appointmentDate: Nothing } } >
              <h1 className="text-center">Schedule Appointment</h1>
              <p>Select a date for this appointment</p>
              <DayPickerField name="appointmentDate" />
            </ChoiceModal>
          </div>
          <hr />
          <FieldsRow fields={[
            { label: "Name", value: overview.policy.payload.patientName},
            { label: "Referring Party", value: overview.referral.payload.referringProvider},
            { label: "Referral Date", value: "unknown" },
            { label: "Appointment Pririty", value: overview.referral.payload.referralDetails.encounterDetails.appointmentPriority},
          ]} />
        </Route>
        <Route>
          <Redirect to={match.url} />
        </Route>
      </Switch>
    </div>
  );

  return (
    <>
      <div className="flex items-end space-x-4">
        <PageTitle title="Referral"/>
        <div className="text-trueGray-500 text-sm"> { /*patientId*/ "" } </div>
      </div>

      <div className="flex flex-col space-y-2">
        <div className="flex">
          <TabLink to={match.url + ""}> Summary </TabLink>
          <TabLink to={match.url + "/policies"}>  Disclosed Policies </TabLink>
        </div>

        { overviews.length > 0 && content(overviews[0]) }

      </div>
    </>
  )
}

const PolicySelect : React.FC< { name: string, label: string, disclosedRaw: readonly CreateEvent<Main.Policy.DisclosedPolicy>[] } > = ({name, label, disclosedRaw}) => {
  const [ field, meta, helpers ] = useField(name);
  const { setValue } = helpers;
  const formatOptionLabel= (a : CreateEvent<Main.Policy.DisclosedPolicy>) =>
    <div>
      Policy Provider: <b>{a.payload.payer}</b><br/>
      Disclosed Parties: <b>{a.payload.receivers}</b><br/>
      <div style={ {textOverflow: "ellipsis", display: "inline-block", maxWidth: "20em", overflow: "hidden", whiteSpace: "nowrap" } }>
        Contract ID: <b>{a.contractId}</b></div>
    </div>
  return (
    <div className="flow flow-col"><label htmlFor={name} className="block">{label}</label>
    <Select
      options={disclosedRaw}
      onChange={(option) => setValue(option?.contractId) }
      formatOptionLabel={formatOptionLabel}
      getOptionValue={a=>a.contractId}
      styles={({singleValue: (base) => ({ textOverflow: "ellipsis" }) })}
 />
 </div>);

}

export default ReferralRoutes;
