// Copyright (c) 2021 Digital Asset (Switzerland) GmbH and/or its affiliates. All rights reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'
import { Image, Menu } from 'semantic-ui-react'
import dateFormat from 'dateformat';
import DayPicker from './DayPicker'
import FormikMod, { Formik, Form, Field, FieldProps, FormikHelpers, FieldAttributes, useField } from 'formik';
import { SubmitButton, DayPickerField, Nothing } from "./ChoiceModal";
import MainView from './MainView';
import Modal from './Modal';
import { useParty } from '@daml/react';
import { Link, Route } from 'react-router-dom';
import { TabularScreenRoutes } from './TabularScreen';
import '@fontsource/alata';
// import * as phos from 'phosphor-react';

type Props = {
  onLogout: () => void;
}

const TabLink : React.FC<{to: string, exact?: boolean, icon: string}> = ({to, children, icon, exact}) => {
  return <Route path={to} exact={exact} children={({ match }) => (
    <Link to={to} className={"flex flex-grow-0 h-9 items-center text-blue text-sm font-alata mr-3 ml-3 mt-1 mb-1 rounded" + (match ? " tab-active" : " tab-hover") }><i className={"ph-"+icon+" text-blueGray-400 text-2xl center m-4"}/>{children}</Link>
    )} />;
};

/**
 * React component for the main screen of the `App`.
 */
const MainScreen: React.FC<Props> = ({onLogout}) => {
  const [modalActive,setModalActive] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const formatDate = (d:Date) => dateFormat(d, "ddd, mmm d, yyyy");
  const role = useParty(); // TODO: proper role handling
  const theme = {
    blue: '#4c6fea',
  }

  return (
    <div className="main-grid font-alata">
      <div className="bg-trueGray-50 flex flex-col justify-start text-sm text-trueGray-500"> {/*px-20 inset-y-0 bg-blue w-64 object-center">*/}
        <img src="/logo-with-name.svg" className="inline-block ml-px30 mt-px25 mb-7 self-start"/>
        <TabLink icon="user" to="/" exact={true}>Profile</TabLink>
        <TabLink icon="tray" to="/provider/referrals">Referrals</TabLink>
        <TabLink icon="calendar-blank" to="/provider/appointments">Appointments</TabLink>
        <TabLink icon="first-aid-kit" to="/provider/treatments">Treatments</TabLink>
        <TabLink icon="currency-circle-dollar" to="/provider/claims">Claims</TabLink>
        <TabLink icon="pedestrian" to="/provider/patients">Patients</TabLink>
        {/*<TabLink icon="handshake" to="/provider/payers">Insurance Providers</TabLink>*/}
        <TabLink icon="currency-circle-dollar" to="/patient/bills">Bills</TabLink>
        <div className="flex-grow"/>
        <hr className="mx-3"/>
        <div className="mx-7 py-2">
          <div className="my-2">
            <div>Today's Date:</div>
            <div className="text-sm text-trueGray-400">
              {formatDate(date)}
              <button className="text-blue ml-2" onClick={() => setModalActive(true)}>
                Set Date
              </button>
            </div>
          </div>
          {/*<div className="my-2">Show developer tabs</div>*/}
          <div className="my-2">
            Selected Role:
            <div className="text-sm text-trueGray-400">{role}</div>
          </div>
        </div>
        <a onClick={onLogout} className="flex flex-grow-0 h-9 items-center text-blue text-sm mr-3 ml-3 mt-1 mb-1 rounded tab-hover"><i className={"ph-users text-blueGray-400 text-2xl center m-4"}/>Change Roles</a>
        <a onClick={onLogout} className="flex flex-grow-0 h-9 items-center text-blue text-sm mr-3 ml-3 mt-1 mb-1 rounded tab-hover"><i className={"ph-sign-out text-blueGray-400 text-2xl center m-4"}/>Sign Out</a>
      </div>
      <Modal active={modalActive} setActive={setModalActive} hasCloseButton={true}>
        <Formik initialValues={{newDate: Nothing }} onSubmit={({}) => {} /* change time itself */}>
          {({ errors, touched, isValidating, isSubmitting}) => (
            <Form>
            <DayPickerField name="newDate" />
            <div className="flex justify-center align-center">
              <SubmitButton submitTitle={"Set Date"} isSubmitting={isSubmitting} />
            </div>
            {/* <Field name="email" validate={validateEmail} />
                {errors.email && touched.email && <div>{errors.email}</div>}
                <Field name="username" validate={validateUsername} />
                {errors.username && touched.username && <div>{errors.username}</div>}
                <button type="submit">Submit</button> */}
            </Form>)}
        </Formik>
      </Modal>

      <div className="relative bg-trueGray-100 z-0">
        <MainView />
      </div>
    </div>
  );
};

export default MainScreen;
