// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import { Image, Menu } from 'semantic-ui-react'
import MainView from './MainView';
import { useParty } from '@daml/react';
import { Link } from 'react-router-dom';
// import * as phos from 'phosphor-react';

type Props = {
  onLogout: () => void;
}

const TabLink : React.FC<{to: string, icon: string}> = ({to, children, icon}) => {
  return <Link to={to} className="flex h-9 items-center"><i className={"ph-"+icon}/>{children}</Link>
};

/**
 * React component for the main screen of the `App`.
 */
const MainScreen: React.FC<Props> = ({onLogout}) => {
  return (
    <div className="main-grid">
      <div className="bg-trueGray-50"> {/*px-20 inset-y-0 bg-blue w-64 object-center">*/}
        <div>Daml Health</div>
        <TabLink icon="user" to="/">Profile</TabLink>
        <TabLink icon="tray" to="/provider/referrals">Referrals</TabLink>
        <TabLink icon="pedestrian" to="/provider/patients">Patients</TabLink>
        <TabLink icon="handshake" to="/provider/payers">Insurance Providers</TabLink>
        <TabLink icon="pen" to="/daml/contracts">Daml Contracts</TabLink>
        <TabLink icon="pen" to="/daml/templates">Daml Templates</TabLink>
        <hr/>
        <div>Today's Date:</div>
        <div>Show developer tabs</div>
        <div>Selected Role:</div>
        <a onClick={onLogout}>Change Role</a>
        <a onClick={onLogout}>Sign Out</a>
      </div>
      <div className="bg-trueGray-100">
      <MainView/>
      </div>
    </div>
  );
};

export default MainScreen;
