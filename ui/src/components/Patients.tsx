import React, { useState } from 'react'
import { Link, NavLink, Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Main } from '@daml.js/healthcare-claims-processing';
import { useStreamQuery } from '@daml/react';
import { CaretRight, Share } from "phosphor-react";
import { innerJoin, intercalate, Field, FieldsRow, PageTitle, TabLink } from "./Common";


type PatientOverview =
  { acceptance: Main.Patient.NotifyPatientOfPCPAcceptance,
    policy: Main.Policy.DisclosedPolicy,
  };


const PatientRoutes: React.FC = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:patientId`}>
        <Patient/>
      </Route>
      <Route path={match.path}>
        <Patients/>
      </Route>
    </Switch>
  )
}

const usePatients = (query: any) => {
  const acceptances = useStreamQuery(Main.Patient.NotifyPatientOfPCPAcceptance, () => query)
    .contracts
    .map(resp => resp.payload)
  const disclosed = useStreamQuery(Main.Policy.DisclosedPolicy, () => query)
    .contracts
    .map(resp => resp.payload)

  const keyedAcceptance = Object.fromEntries(acceptances.map(p => [p.patient, p]));
  const keyedDisclosed = Object.fromEntries(disclosed.map(p => [p.patient, p]));
  const overviews = Object.values(innerJoin(keyedAcceptance, keyedDisclosed))
                         .map(p => ({ acceptance: p[0], policy : p[1]}));
  return { acceptances, disclosed, overviews };
}

const Patients: React.FC = () => {
  const match = useRouteMatch();
  const [search, setSearch] = useState("");
  const searchedFor = (s: string) => s.toLowerCase().indexOf(search.toLowerCase()) != -1;
  const visible = usePatients({}).overviews.filter(p => searchedFor(p.policy.patientName) || searchedFor(p.policy.insuranceID));

  return (
    <>
    <PageTitle title="Patients" />
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
            <th className="w-1/6"> Name </th>
            <th className="w-1/6"> PCP </th>
            <th className="w-1/6"> Insurance ID </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {visible.map((po) =>
            <tr key={po.policy.patient} className="bg-white text-trueGray-500 hover:bg-trueGray-100 ">
              <td className="border-red-600"> { po.policy.patientName } </td>
              <td> </td>
              <td> { po.policy.insuranceID } </td>
              <td>
                <div className="">
                  <Link to={match.url + "/" + po.policy.patient} className="flex justify-end">
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

const Patient: React.FC = () => {
  const { patientId } = useParams();
  const { overviews, disclosed } = usePatients({ patient: patientId });
  const match = useRouteMatch();

  const policyRows = disclosed.map((d) =>
    <div>
      <FieldsRow fields={[
        { label: "Receivers", value: d.receivers.join() },
        { label: "Insurance ID", value: d.insuranceID },
      ]} />
    </div>
  )

  const content = (po: PatientOverview) => (
    <div className="flex flex-col p-5 space-y-4 bg-white rounded shadow-lg">
      <Switch>
        <Route exact path={match.path + "/policies"}>
          <div className="flex flex-col space-y-4">
            { intercalate(policyRows, <hr />) }
          </div>
        </Route>
        <Route exact path={match.path}>
          <div>
            <button className="flex justify-center items-center space-x-2 px-4 py-2 rounded-lg border-black border-2 bg-blue text-white">
              <Share />
              <div> Refer Patient </div>
            </button>
          </div>
          <hr />
          <FieldsRow fields={[
            { label: "Name", value: po.policy.patientName},
            { label: "Insurance ID", value: po.policy.insuranceID},
            { label: "Primary Care Provider", value: ""},
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
        <PageTitle title="Patient"/>
        <div className="text-trueGray-500 text-sm"> { patientId } </div>
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

export default PatientRoutes;
