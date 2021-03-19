import React, { useState, useMemo, ReactNode, PropsWithChildren } from 'react'
import { Link, NavLink, Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Main } from '@daml.js/healthcare-claims-processing';
import { CreateEvent } from '@daml/ledger';
import { useStreamQuery, useLedger } from '@daml/react';
import { CaretRight, Share } from "phosphor-react";
import { innerJoin, intercalate, Field, FieldsRow, PageTitle, TabLink, useAsync } from "./Common";
import { Formik, Form, Field as FField, useField } from 'formik';
import Select from 'react-select';
import { LField, EField, ChoiceModal, DayPickerField, Nothing } from "./ChoiceModal";

export const TabularScreenRoutes : React.FC<{metavar: string, table: ReactNode, detail: ReactNode }> = ( { metavar, table, detail } ) => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/${metavar}`}>
        { detail }
      </Route>
      <Route path={match.path}>
        { table }
      </Route>
    </Switch>
  )
}

type TabularViewFields<T> = {
  label: string,
  getter: (a: T) => string,
};

type TabularViewConfig<T> = {
  title : string,
  tableKey: (a: T) => string,
  itemUrl: (a: T) => string,
  fields: TabularViewFields<T>[],
  useData: () => readonly T[],
};

export function TabularView<T, > ( { title, fields, tableKey, itemUrl, useData } : PropsWithChildren< TabularViewConfig<T> > ) {
  const match = useRouteMatch();
  const [search, setSearch] = useState("");
  const searchedFor = (s: string) => s.toLowerCase().indexOf(search.toLowerCase()) != -1;
  const data = useData();
  return (<>
    <PageTitle title={ title } />
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
            { fields.map(a=> <th className="w-1/6"> { a.label } </th>) }
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {data.map((po) =>
            <tr key={tableKey(po)} className="bg-white text-trueGray-500 hover:bg-trueGray-100 ">
              { fields.map( (g)=><td>{g.getter(po)}</td> ) }
              <td>
                <div className="">
                  <Link to={match.url + "/" + itemUrl(po)} className="flex justify-end">
                    <CaretRight />
                  </Link>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
   );
}

export function SingleItemView<T, > ( { title, fields, tableKey, itemUrl, useData, choices } : PropsWithChildren< TabularViewConfig<T> & { choices: (data: T) => ReactNode } > ) {
  const data = useData();
  const match = useRouteMatch();

  const content = (po: T) => (
    <div className="flex flex-col p-5 space-y-4 bg-white rounded shadow-lg">
      <Switch>
        <Route exact path={match.path}>
          <div>
            { choices(po) }
          </div>
          <hr />
          <FieldsRow fields={
            fields.map(f=>({label: f.label, value: f.getter(po)}))
            } />
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
        <PageTitle title={title}/>
        <div className="text-trueGray-500 text-sm"> { /* patientId */ "" } </div>
      </div>

      <div className="flex flex-col space-y-2">

        { data.length > 0 && content(data[0]) }

      </div>
    </>
  )
}