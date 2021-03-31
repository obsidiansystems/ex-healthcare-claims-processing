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
import { TabularScreenRoutes, TabularView, SingleItemView } from "./TabularScreen";

const AppointmentRoutes : React.FC = () => 
  <TabularScreenRoutes metavar=":appointmentId" table={Appointments} detail={Appointment}/>

const useAppointments = (query: any) => {
  const ledger = useLedger();
  const appointment = useAsync(async () => query.appointmentId ? await ledger.fetch(Main.Appointment.Appointment, query.appointmentId) : null, [query]);
  const appointmentsStream = useStreamQuery(Main.Appointment.Appointment, () => query).contracts;
  const appointments : readonly CreateEvent<Main.Appointment.Appointment>[] = query.appointmentId && appointment ? [appointment] : appointmentsStream;
  
  const disclosed = useStreamQuery(Main.Policy.DisclosedPolicy).contracts;

  const keyedAppointments = Object.fromEntries(appointments.map(p => [p.payload.policy, p]));
  const keyedDisclosed = Object.fromEntries(disclosed.map(p => [p.contractId, p]));
  const overviews = Object.values(innerJoin(keyedAppointments, keyedDisclosed))
                         .map(p => ({ appointment: p[0], policy : p[1]}));
  return overviews;
}

const useAppointmentsData = () => useAppointments( { } )

const Appointments: React.FC = () => {
  return <TabularView
    title="Appointments"
    useData={useAppointmentsData}
    fields={ [
      { label: "Appointment Date", getter: o => o?.appointment?.payload?.appointmentDate },
      { label: "Patient Name", getter: o => o?.policy?.payload?.patientName },
      { label: "Insurance ID", getter: o => o?.policy?.payload?.insuranceID },
      { label: "Procedure Code", getter: o => o?.appointment?.payload?.encounterDetails.encounterDetails.procedureCode },
      { label: "Appointment Pririty", getter: o => o?.appointment?.payload?.encounterDetails.encounterDetails.appointmentPriority },
    ] }
    tableKey={ o => o.appointment.contractId }
    itemUrl={ o => o.appointment.contractId }
    />
}

const useAppointmentData = () => {
  const { appointmentId } = useParams< { appointmentId: string } >();
  const overviews = useAppointments( { appointmentId } );
  return [ { appointmentId, overview: overviews[0] } ];
}

const Appointment : React.FC = () => {
  return <SingleItemView
    title="Appointment"
    useData={useAppointmentData}
    fields={ [
      { label: "Patient Name", getter: o => o?.overview?.policy?.payload?.patientName },
      { label: "Appointment Date", getter: o => o?.overview?.appointment?.payload?.appointmentDate },
      { label: "Appointment Pririty", getter: o => o?.overview?.appointment?.payload?.encounterDetails.encounterDetails.appointmentPriority },
      { label: "Procedure Code", getter: o => o?.overview?.appointment?.payload?.encounterDetails.encounterDetails.procedureCode },
      { label: "Diagnosis Code", getter: o => o?.overview?.appointment?.payload?.encounterDetails.encounterDetails.diagnosisCode },
      { label: "Site Service Code", getter: o => o?.overview?.appointment?.payload?.encounterDetails.encounterDetails.siteServiceCode },
      { label: "Allowed Amount", getter: o => o?.overview?.appointment?.payload?.encounterDetails.encounterDetails?.allowedAmount || "" },
      { label: "CoPay", getter: o => o?.overview?.appointment?.payload?.encounterDetails.encounterDetails?.coPay || "" },
      { label: "Patient Responsibility", getter: o => o?.overview?.appointment?.payload?.encounterDetails.encounterDetails?.patientResponsibility || "" },
    ] }
    tableKey={ o => o.overview?.appointment.contractId }
    itemUrl={ o => "" }
    choices={ d => [
            <ChoiceModal className="flex flex-col"
                         choice={Main.Appointment.Appointment.CheckInPatient}
                         contract={d.overview?.appointment?.contractId}
                         submitTitle="Check In Patient Now"
                         buttonTitle="Check In Patient"
                         icon={<Share />}
                         initialValues={ { } } >
              <h1 className="text-center">Check In Patient</h1>
              <p>{d.overview?.policy?.payload?.patientName} is present and ready for treatment?</p>
            </ChoiceModal>
    ] }
    
    />
  ;
}

export default AppointmentRoutes;
