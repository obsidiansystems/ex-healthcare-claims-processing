// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import { Image, Menu } from 'semantic-ui-react'
import dateFormat from 'dateformat';
import DayPicker from './DayPicker'
import MainView from './MainView';
import Modal from './Modal';
import { useParty } from '@daml/react';
import { Link } from 'react-router-dom';

type Props = {
  onLogout: () => void;
}

const TabLink : React.FC<{}> = ({children}) => {
  return <Link to="/nowhere">{children}</Link>
};

/**
 * React component for the main screen of the `App`.
 */
const MainScreen: React.FC<Props> = ({onLogout}) => {
  const [modalActive,setModalActive] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const formatDate = (d:Date) => dateFormat(d, "ddd, mmm d, yyyy");
  const theme = {
    blue: '#4c6fea',
  }

  return (
    <>
      <div className="px-20 inset-y-0 bg-blue w-64 object-center">
        <div>Daml Health</div>
        <TabLink>Profile</TabLink>
        <TabLink>Referrals</TabLink>
        <TabLink>Patients</TabLink>
        <TabLink>Insurance Providers</TabLink>
        <hr/>
        <div>Today's Date:</div>
        <div>Show developer tabs</div>
        <div>Selected Role:</div>
        <div>Change Role</div>
        <div>Sign Out</div>
      </div>
      <Menu icon borderless>
        <Menu.Item>
          <Image
            as='a'
            href='https://www.daml.com/'
            target='_blank'
            src='/daml.svg'
            alt='DAML Logo'
            size='mini'
          />
        </Menu.Item>
        <Menu.Menu position='right' className='test-select-main-menu'>
          <Menu.Item position='right'>
            You are logged in as {useParty()}.
          </Menu.Item>
          <Menu.Item
            position='right'
            active={false}
            className='test-select-log-out'
            onClick={onLogout}
            icon='log out'
          />
        </Menu.Menu>
      </Menu>

      {formatDate(date)}
      <br />
      <button onClick={() => setModalActive(true)}>
        Set Date
      </button>
      <Modal active={modalActive} setActive={setModalActive} hasCloseButton={true} theme={theme} body={
        <DayPicker
          setModalActive={setModalActive}
          date={date}
          setDate={setDate}
          theme={theme}
        />
      }
      />

      <MainView/>
    </>
  );
};

export default MainScreen;
