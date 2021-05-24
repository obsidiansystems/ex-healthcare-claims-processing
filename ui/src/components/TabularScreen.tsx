import React, { useState, useMemo, ReactNode, PropsWithChildren } from 'react'
import { Link, NavLink, Redirect, Route, Switch, useRouteMatch, useParams } from 'react-router-dom';
import { Main } from '@daml.js/healthcare-claims-processing';
import { CreateEvent } from '@daml/ledger';
import { useStreamQuery, useLedger } from '@daml/react';
import { CaretRight, Share } from "phosphor-react";
import { intercalate, Field, FieldsRow, PageTitleDiv, PageTitleSpan, PageSubTitleSpan, TabLink, useAsync } from "./Common";
import { Formik, Form, Field as FField, useField } from 'formik';
import Select from 'react-select';
import { LField, EField, ChoiceModal, Nothing } from "./ChoiceModal";

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

type TabularViewConfig<T, F> = {
  title : string,
  tableKey: (a: T) => string,
  itemUrl: (a: T) => string,
  fields: F,
  useData: () => readonly T[],
  searchFunc?: (a: string) => (b: T) => boolean,
};

export function TabularView<T, > ( { title, fields, tableKey, itemUrl, useData, searchFunc } : PropsWithChildren<TabularViewConfig<T, TabularViewFields<T>[]> > ) {
  const match = useRouteMatch();
  const [search, setSearch] = useState("");
  const searchedFor = (s: string) => s.toLowerCase().indexOf(search.toLowerCase()) != -1;
  const data = useData().filter((searchFunc || (a=>b=>true))(search));
  return (<>
      <PageTitleDiv><PageTitleSpan title={title} /></PageTitleDiv>
      <div className="flex p-3 bg-white m-6">
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name or insurance ID..."
          className="w-full px-3 py-2 h-10 bg-trueGray-100"
        />
      </div>
      <table className="table-fixed m-6 table-widths-eq">
        <thead>
          <tr className="text-left text-trueGray-500 text-sm">
            { fields.map(a=> <th className=""> { a.label } </th>) }
            <th />
          </tr>
        </thead>
        <tbody>
          {data.map((po) =>
            { let url = match.url + "/" + itemUrl(po)
              return (<tr key={tableKey(po)} className="bg-white text-trueGray-500 hover:bg-trueGray-100 whitespace-pre">
                        { fields.map( (g, idx) =>
                            // NOTE 1: We enable tabbing only to the first cell since
                            //  all table cells for each row link to the same URL.
                            // Thus, pressing the Tab key will move down one row per press.
                            //
                            // NOTE 2: Adding the "flex" className makes the entire table cell
                            //  become a link, instead of just the text inside the table cell.
                            <td>
                              <Link to={url} className="flex" {...idx == 0 ? {} : {'tabIndex': -1}}>
                                {g.getter(po)}
                              </Link>
                            </td>
                        )}
                        <td>
                          <Link to={url} className="flex justify-end" {...{'tabIndex': -1}}>
                            <CaretRight />
                          </Link>
                        </td>
                      </tr>)
            })
          }
        </tbody>
      </table>
    </>
   );
}

export function SingleItemView<T, > ( { title, fields, tableKey, itemUrl, useData, choices } : PropsWithChildren< TabularViewConfig<T, TabularViewFields<T>[][]> & { choices: (data: T) => ReactNode } > ) {
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
          { fields.map((row, i) =>
            <>
              <FieldsRow fields={
              row.map(f=>({label: f.label, value: f.getter(po)}))
              } />
              { i == fields.length - 1 ? <> </> : <hr/> }
            </>
          )}
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
        <PageTitleSpan title={title} />
        <PageSubTitleSpan title={/* patientId */ "" } />
      </PageTitleDiv>

      <div className="flex flex-col space-y-2">

        { data.length > 0 && content(data[0]) }

      </div>
    </>
  )
}
