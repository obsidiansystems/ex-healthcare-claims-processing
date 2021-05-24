// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback } from 'react'
import { ArrowRight } from "phosphor-react";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
import Credentials, { computeCredentials } from '../Credentials';
import Ledger from '@daml/ledger';
// import { User } from '@daml.js/example-create-daml-app';
import { DeploymentMode, deploymentMode, ledgerId, httpBaseUrl} from '../config';
import { Landing } from './Landing';
import { useEffect } from 'react';

type Props = {
  onLogin: (credentials: Credentials) => void;
}

/**
 * React component for the login screen of the `App`.
 */
const LoginScreen: React.FC<Props> = ({onLogin}) => {
  const login = useCallback(async (credentials: Credentials) => {
    try {
      console.log("Attempting Login");
      const ledger = new Ledger({token: credentials.token, httpBaseUrl});
      console.log("Got ledger" + ledger);
//      let userContract = await ledger.fetchByKey(User.User, credentials.party);
      let userContract = null;
      if (userContract === null) {
        const user = {username: credentials.party, following: []};
//        userContract = await ledger.create(User.User, user);
      }
      console.log(credentials);
      onLogin(credentials);
    } catch(error) {
      alert(`Unknown error:\n${error}`);
    }
  }, [onLogin]);

  const handleLogin = (username: string) => async (event : any) => {
    event.preventDefault();
    await login(computeCredentials(username));
  }

  // handleLogin({preventDefault: (() => 1)}); // Hotwiring for dev convenience.

  const handleDablLogin = () => {
    window.location.assign(`https://login.projectdabl.com/auth/login?ledgerId=${ledgerId}`);
  }

  useEffect(() => {
    const url = new URL(window.location.toString());
    const token = url.searchParams.get('token');
    if (token === null) {
      return;
    }
    const party = url.searchParams.get('party');
    if (party === null) {
      throw Error("When 'token' is passed via URL, 'party' must be passed too.");
    }
    url.search = '';
    window.history.replaceState(window.history.state, '', url.toString());
    login({token, party, ledgerId});
  }, [login]);

  const roles = [
    {
      label: "Primary Care Provider",
      username: "PrimaryCareProvider",
    },
    {
      label: "Radiologist",
      username: "Radiologist",
    },
    {
      label: "Insurance Company",
      username: "InsuranceCompany",
    },
    {
      label: "Patient",
      username: "Patient1",
    },
  ];

  const SelectRole = () => (
    <>
      <div className="text-2xl text-center text-gray-600">
        Select a User Role
      </div>
      <div className="text-sm text-center text-trueGray-500">
        User roles allow you to access features unique to each party in a health care system.
      </div>
      <div className="flex flex-col space-y-4">
        { roles.map(({label, username}) => (
          <button
            className="flex flex-row justify-between items-center rounded h-10 p-4 bg-trueGray-100 border-trueGray-100 focus:bg-blue focus:text-white hover:bg-white hover:border-blue border-2 text-sm text-gray-600"
            onClick={handleLogin(username)}
          >
            {label}
            <ArrowRight size={21} color="var(--blue)"/>
          </button>
          ))}
      </div>
    </>
  );

  return (
    <div className="main-grid font-alata" style={{
      display: "grid",
      gridTemplateColumns: "420px auto",
    }}>
      <Landing/>
      <div className="relative flex flex-col flex-grow justify-center items-center">
        <img src="/logo-with-name.svg" className="absolute top-7 left-11"/>
        <div className="flex flex-col justify-center items-stretch space-y-4 w-80">
          {deploymentMode === DeploymentMode.PROD_DABL
          ?
           <Button primary fluid onClick={handleDablLogin}>
             Log in with DABL
           </Button>
          : <SelectRole />
          }
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
