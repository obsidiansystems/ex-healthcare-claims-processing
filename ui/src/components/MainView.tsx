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

const UserIcon: React.FC = () => {
  return (
  <i className="ph-user userIconBlue"/>
  );
}

const Profile: React.FC = () => {
  const username = useParty();
  const pcpResult = useStreamQueries(Main.Provider.Provider).contracts;
  const patientResult = useStreamQueries(Main.Patient.Patient).contracts;
  const policyResult = useStreamQueries(Main.Policy.InsurancePolicy).contracts;
  return (
    <Container>
      <Grid centered columns={2}>
        <Grid.Row stretched>
          <Grid.Column>
            {[...pcpResult].map(({payload: p})=>
            <Segment>
              <Header as='h2'>
                <div>Welcome!</div>
                <UserIcon/>
                <Header.Content>
                  {p.providerName}
                  <Header.Subheader>Provider</Header.Subheader>
                </Header.Content>
              </Header>
              <Divider />
              {[p].map(({demographics: d})=>
                <div>
              <div> HIN {d.providerHIN}</div>
              <div> Tax ID {d.providerTaxID}</div>
              <div> Address
              {d.providerAddressFirstLine}
              {d.providerAddressSecondLine}
              {d.providerCity}, {d.providerState} {d.providerZipCode} </div>
               </div>)}
            </Segment>
               )}
            {[...patientResult].map(({payload: p})=>
            <Segment>
              <Header as='h2'>
                <div>Welcome!</div>
                <UserIcon/>
                <Header.Content>
                  {p.patientName}
                  <Header.Subheader>Patient</Header.Subheader>
                </Header.Content>
              </Header>
              <Divider />
              {[p].map(({demographics: d})=>
                <div>
              <div> PCP {p.primaryCareProviderID}</div>
              <div> Insurance ID {p.insuranceID}</div>
              <div> Plan {policyResult[0]?.payload.policyType}</div>
              </div>)}
            </Segment>
               )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
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
    <div className="flex flex-col p-4 space-y-5">
      <Switch>
        <Route exact={true} path="/">
          <Profile/>
        </Route>
        <Route path="/provider/patients">
          <PatientRoutes />
        </Route>
        <Route path="/provider/referrals">
          <ReferralRoutes />
        </Route>
        <Route path="/provider/appointments">
          <AppointmentRoutes />
        </Route>
        <Route path="/provider/treatments">
          <TreatmentRoutes />
        </Route>
        <Route path="/provider/Claims">
          <ClaimsRoutes />
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
