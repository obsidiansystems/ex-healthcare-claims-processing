// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useMemo } from 'react';
import { Container, Grid, Header, Icon, Segment, Divider } from 'semantic-ui-react';
import { Party } from '@daml/types';
import { Main } from '@daml.js/healthcare-claims-processing';
import { useParty, useLedger, useStreamFetchByKeys, useStreamQueries } from '@daml/react';
import { Switch, Route } from 'react-router-dom';
import PatientRoutes from './Patients';
import ReferralRoutes from './Referrals';
import AppointmentRoutes from './Appointments';
import TreatmentRoutes from './Treatments';
import ClaimsRoutes from './Claims';
import BillRoutes from './Bills';
import { TabularScreenRoutes } from './TabularScreen';
import { User } from "phosphor-react";

const UserIcon: React.FC<{className: string}> = ({className}) => {
  return (
    <svg className={className} width="89" height="85" viewBox="0 0 89 85">
      <defs>
        <linearGradient id="userIconGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stop-color="#83a8f6"/>
          <stop offset="100%" stop-color="#4c6fea"/>
        </linearGradient>
      </defs>
      <mask id="userMask">
        <User size={89} viewBox="22 22 212 212" color="white"/>
      </mask>
      <rect width="89" height="89" fill="url(#userIconGradient)" mask="url(#userMask)"/>
    </svg>
  )
}

const ProfileTop: React.FC<{name: string, role: string}> = ({name, role}) => <>
  <div className="label-sm">Welcome!</div>
  <UserIcon className="mx-auto mt-16 mb-4"/>
  <Header className="text-2xl" as='h2'>{name}</Header>
  <div className="label-sm mt-2 mb-8">{role}</div>
  <hr/>
</>;

const ProfileKV: React.FC<{keyS: string, value?: string | null}> = ({keyS, value, children}) =>
  <div>
    <div className="sm-trueGray-400">{keyS}</div>
    {value}{children}
  </div>;

const ProfileKVCenter: React.FC<{keyS: string, value?: string | null}> = ({keyS, value, children}) =>
  <div className="mx-auto">
    <div className="sm-trueGray-400">{keyS}</div>
    {value || children || "has none"}
  </div>;

const Profile: React.FC = () => {
  const username = useParty();
  const pcpResult = useStreamQueries(Main.Provider.Provider).contracts;
  const patientResult = useStreamQueries(Main.Patient.Patient).contracts;
  const policyResult = useStreamQueries(Main.Policy.InsurancePolicy).contracts;
  return (<>
    <div className="shadow-2xl size-card rounded-xl content-center flex flex-col text-center m-auto justify-self-center self-center p-12 z-20 bg-white relative">
      {[...pcpResult].map(({payload: p})=> <>
        <ProfileTop name={p.providerName} role="Provider" />
        {[p].map(({demographics: d})=>
        <div className="flex text-left sm-trueGray-500 mt-8">
          <ProfileKV keyS="HIN" value={d.providerHIN} />
          <ProfileKVCenter keyS="Tax ID" value={d.providerTaxID} />
          <ProfileKV keyS="Address">
            {d.providerAddressFirstLine}<br/>
            {d.providerAddressSecondLine}<br/>
            {d.providerCity}, {d.providerState} {d.providerZipCode}
          </ProfileKV>
        </div>)}
      </>)}
      {[...patientResult].map(({payload: p})=> <>
        <ProfileTop name={p.patientName} role="Patient" />
        <div className="flex text-left sm-trueGray-500 mt-8">
          <ProfileKV keyS="PCP" value={p.primaryCareProviderID} />
          <ProfileKVCenter keyS="Insurance ID" value={p.insuranceID} />
          <ProfileKV keyS="Plan" value={policyResult[0]?.payload.policyType} />
        </div>
      </>)}
    </div>
    <div className="card-GraphicalDots card-gdots-pos1 z-10"/>
    <div className="card-GraphicalDots card-gdots-pos2 z-10"/>
  </>);
}

// USERS_BEGIN
const MainView: React.FC = () => {
  const username = useParty();
  const pcpResult = useStreamQueries(Main.Provider.Provider).contracts;

  // kept for the moment as an example of exercising an option
  /* const ledger = useLedger();

  const follow = async (userToFollow: Party): Promise<boolean> => {
    try {
      await ledger.exerciseByKey(User.User.Follow, username, {userToFollow});
      return true;
    } catch (error) {
      alert(`Unknown error:\n${error}`);
      return false;
    }
  }*/
  return (
    <div className="min-h-full flex flex-col">
      <Switch>
        <Route exact={true} path="/">
          <Profile/>
        </Route>
        <Route path="/provider/patients">
          <PatientRoutes role={username} />
        </Route>
        <Route path="/provider/referrals">
          <ReferralRoutes role={username} />
        </Route>
        <Route path="/provider/appointments">
          <AppointmentRoutes role={username} />
        </Route>
        <Route path="/provider/treatments">
          <TreatmentRoutes role={username} />
        </Route>
        <Route path="/provider/Claims">
          <ClaimsRoutes role={username} />
        </Route>
        <Route path="/patient/bills">
          <BillRoutes />
        </Route>
        <Route path="/test">
          <TabularScreenRoutes metavar="foo" table={<p>Nothing</p>} detail={<p>Also nothing</p>}/>
        </Route>
      </Switch>
    </div>
  );
}

export default MainView;
