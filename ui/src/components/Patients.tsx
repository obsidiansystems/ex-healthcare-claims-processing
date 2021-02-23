import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Main } from '@daml.js/healthcare-claims-processing';
import { useStreamQuery } from '@daml/react';
import { CaretRight } from "phosphor-react";

type Map<V> = { [key: string]: V };

type Row =
  { acceptance: Main.Patient.NotifyPatientOfPCPAcceptance,
    policy: Main.Policy.DisclosedPolicy,
  };

function innerJoin<X,Y>(xs: Map<X>, ys: Map<Y>): Map<[X,Y]> {
  const keys = Object.keys(xs).filter(k => ys[k] != undefined);
  return Object.fromEntries(keys.map(k => [k, [xs[k], ys[k]]]));
}

const Patients : React.FC = () => {
  const [search, setSearch] = useState("");
  const searchedFor = (s: string) => s.toLowerCase().indexOf(search.toLowerCase()) != -1;

  const accepted = useStreamQuery(Main.Patient.NotifyPatientOfPCPAcceptance)
    .contracts
    .map(resp => resp.payload)
  const disclosed = useStreamQuery(Main.Policy.DisclosedPolicy)
    .contracts
    .map(resp => resp.payload)

  const keyedAccepted = Object.fromEntries(accepted.map(p => [p.patient, p]));
  const keyedDisclosed = Object.fromEntries(disclosed.map(p => [p.patient, p]));
  const patients = Object.values(innerJoin(keyedAccepted, keyedDisclosed))
                         .map(p => ({ acceptance: p[0], policy : p[1]}));

  const visible = patients.filter(p => searchedFor(p.policy.patientName) || searchedFor(p.policy.insuranceID));

  return (
    <div className="flex flex-col p-4 space-y-5">
      <div className="text-3xl text-trueGray-700 "> Patients </div>
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
          {visible.map((p) =>
            <tr className="bg-white text-trueGray-500 hover:bg-trueGray-100 ">
              <td className="border-red-600"> { p.policy.patientName } </td>
              <td> { p.acceptance.providerID } </td>
              <td> { p.policy.insuranceID } </td>
              <td>
                <div className="flex justify-end">
                  <CaretRight />
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Patients;
