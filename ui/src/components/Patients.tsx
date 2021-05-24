import React, { useState } from 'react'
import { Link, NavLink, Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Main } from '@daml.js/healthcare-claims-processing';
import { CreateEvent } from '@daml/ledger';
import { useParty, useStreamQuery } from '@daml/react';
import { CaretRight, Share, ArrowRight } from "phosphor-react";
import { mapIter, innerJoin, intercalate, Field, FieldsRow, Message, PageTitleDiv, PageTitleSpan, PageSubTitleSpan, TabLink } from "./Common";
import { Formik, Form, Field as FField, useField } from 'formik';
import Select from 'react-select';
import { LField, EField, ChoiceModal, ChoiceErrorsType, FollowUp, Nothing, creations, validateNonEmpty, RenderError } from "./ChoiceModal";
import { TabularScreenRoutes, TabularView, SingleItemView } from "./TabularScreen";
import { Party } from '@daml/types';


type PatientOverview =
  { acceptance: Main.Patient.NotifyPatientOfPCPAcceptance,
    policy: Main.Policy.DisclosedPolicy,
  };


const PatientRoutes: React.FC<{role : Party}> = ({role}) => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:patientId`}>
        <Patient role={role}/>
      </Route>
      <Route path={match.path}>
        <Patients/>
      </Route>
    </Switch>
  )
}

const usePatients = (query: any, predicate: any = () => true) => {
  const acceptances = useStreamQuery(Main.Patient.NotifyPatientOfPCPAcceptance, () => query)
    .contracts
    .map(resp => resp.payload)
  const disclosedRaw = useStreamQuery(Main.Policy.DisclosedPolicy, () => query)
    .contracts
    .filter(resp => predicate(resp.payload))
  const disclosed = disclosedRaw.map(resp => resp.payload)

  const keyedAcceptance = new Map(acceptances.map(p => [p.patient, p]));
  const keyedDisclosed = new Map(disclosed.map(p => [p.patient, p]));
  const overviews = Array.from(mapIter(
    ([acceptance, policy]) => ({ acceptance, policy }),
    innerJoin(keyedAcceptance, keyedDisclosed).values(),
  ));
  return { acceptances, disclosed, overviews, disclosedRaw, 'disclosedUnique' : Array.from(keyedDisclosed.values()) };
}

const useAllPatients: (() => Main.Policy.DisclosedPolicy[]) = () => usePatients({}).disclosedUnique;
const Patients: React.FC = () => {
  return <TabularView
    title="Patients"
    useData={useAllPatients}
    fields={ [
      { label: "Name", getter : o => o.patientName },
      /* { label: "PCP", getter : o => "" }, */
      { label: "Insurance ID", getter : o => o.insuranceID },
    ] }
    tableKey={ o => o.patient }
    itemUrl={ o => o.patient }
    />
  ;
}

const NotPatients: React.FC = () => {
  const match = useRouteMatch();
  const [search, setSearch] = useState("");
  const searchedFor = (s: string) => s.toLowerCase().indexOf(search.toLowerCase()) != -1;
  const visible = usePatients({}).overviews.filter(p => searchedFor(p.policy.patientName) || searchedFor(p.policy.insuranceID));

  return (
    <>
      <PageTitleDiv><PageTitleSpan title="Patients" /></PageTitleDiv>
      <div className="flex p-2 bg-white">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name or insurance ID..."
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

const Patient: React.FC<{role : Party}> = ({role}) => {
  const username = useParty();
  const controlled = (d: Main.Policy.DisclosedPolicy) => d.receivers.length > 0 && d.receivers.includes(username);

  const { patientId } = useParams< { patientId: string } >();
  const { disclosedUnique, disclosed, disclosedRaw } = usePatients({ patient: patientId }, controlled);
  const match = useRouteMatch();

  const policyRows = disclosed.map((d) =>
    <div>
      <FieldsRow fields={[
        { label: "Receivers", value: d.receivers.join() },
        { label: "Insurance ID", value: d.insuranceID },
      ]} />
    </div>
  )

  const pcpResult = useStreamQuery(Main.Provider.Provider).contracts;
  const pcpContract = pcpResult[0];

  const choiceModal = (
            <ChoiceModal className="flex flex-col w-170"
                         choice={Main.Provider.Provider.CreateReferral}
                         contract={pcpContract?.contractId}
                         submitTitle="Create Referral"
                         buttonTitle="Refer Patient"
                         icon={<Share />}
                         successWidget={({ rv: [v, evts] }, close) =>
                           <>
                             <Message
                               title="Referral Created!"
                               content="Change to the Radiologist role to see the referral and schedule an appointment with the patient."
                             />
                           </>
                         }
                         initialValues={ {
                           policy: Nothing,
                           receiver: Nothing,
                           encounterId: Nothing,
                           procedureCode: Nothing,
                           diagnosisCode: Nothing,
                           siteServiceCode: Nothing,
                           appointmentPriority: Nothing,
                         } } >
              {({ errors, touched }) => (
                <>
                  <h1 className="heading-2xl mb-7">Create Referral</h1>
                  <PolicySelect label="Policy" name="policy" disclosedRaw={disclosedRaw} errors={errors} />
                  <div className="grid grid-cols-2 gap-4 gap-x-8 mb-7.5 mt-4">
                    <LField name="receiver" label="Receiver" errors={errors} />
                    <EField name="diagnosisCode" e={Main.Types.DiagnosisCode} label="Diagnosis Code" errors={errors} />
                    <LField name="encounterId" placeholder='eg "1"' label="Encounter ID" errors={errors}/>
                    <LField name="siteServiceCode" placeholder='eg "11"' label="Site Service Code" errors={errors}/>
                    <EField name="procedureCode" e={Main.Types.ProcedureCode} label="Procedure Code" errors={errors}/>
                    <LField name="appointmentPriority" placeholder='eg "Elective"' label="Appointment Priority" errors={errors} />
                  </div>
                </>
              )}
            </ChoiceModal>
  )

  const content = (dp: Main.Policy.DisclosedPolicy) => (
    <div className="flex flex-col p-5 space-y-4 bg-white rounded shadow-lg">
      <Switch>
        <Route exact path={match.path + "/policies"}>
          <div className="flex flex-col space-y-4">
            { intercalate(policyRows, <hr />) }
          </div>
        </Route>
        <Route exact path={match.path}>
          <div>
            { role === "PrimaryCareProvider" ? choiceModal : <div></div> }
          </div>
      <hr />
      <FieldsRow fields={[
        { label: "Name", value: dp.patientName},
        { label: "Insurance ID", value: dp.insuranceID},
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
      <PageTitleDiv>
        <PageTitleSpan title="Patient"/>
        <PageSubTitleSpan title={ patientId } />
      </PageTitleDiv>

      <div className="flex flex-col space-y-2">
        <div className="flex">
          <TabLink to={match.url + ""}> Summary </TabLink>
          <TabLink to={match.url + "/policies"}>  Disclosed Policies </TabLink>
        </div>

        { disclosedUnique.length > 0 && content(disclosedUnique[0]) }

      </div>
    </>
  )
}

const PolicySelect : React.FC< {
  name: string,
  label: string,
  disclosedRaw: readonly CreateEvent<Main.Policy.DisclosedPolicy>[],
  errors?: ChoiceErrorsType,
} > = ({ name, label, disclosedRaw, errors }) => {
  const [ field, meta, helpers ] = useField({
    name,
    validate: validateNonEmpty(label),
  });
  const { setValue } = helpers;
  const formatOptionLabel= (a : CreateEvent<Main.Policy.DisclosedPolicy>) => (
    <div className="">
      Policy Provider: <b>{a.payload.payer}</b><br/>
      Disclosed Parties: <b>{a.payload.receivers}</b><br/>
      <div style={ {textOverflow: "ellipsis", display: "inline-block", maxWidth: "20em", overflow: "hidden", whiteSpace: "nowrap" } }>
        Contract ID: <b>{a.contractId}</b></div>
    </div>
  );
  const error = errors?.[name];
  return (
    <div className="flow flow-col mb-2 mt-0.5"><label htmlFor={name} className="block label-sm">{label}</label>
      <Select
        classNamePrefix="react-select-modal-enum"
        options={disclosedRaw}
        onChange={(option) => setValue(option?.contractId) }
        formatOptionLabel={formatOptionLabel}
        getOptionValue={a=>a.contractId}
        styles={({singleValue: (base) => ({ textOverflow: "ellipsis" }) })}
      />
      <RenderError error={error} />
    </div>
  );

}

export default PatientRoutes;
