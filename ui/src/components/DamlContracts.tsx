import React, { useMemo, useEffect, useState } from 'react';
import 'reflect-metadata';
import { Container, Grid, Header, Icon, Segment, Divider } from 'semantic-ui-react';
import { Party } from '@daml/types';
import { Main } from '@daml.js/healthcare-claims-processing';
import { useParty, useLedger, useStreamFetchByKeys, useStreamQueries } from '@daml/react';
import { Template, lookupTemplate } from '@daml/types';
import { TemplateMeta, ChoiceMeta, Meta } from '@daml/types-meta';
import { CreateEvent } from '@daml/ledger';
import { Switch, Route, useParams, useRouteMatch, Link, useLocation } from 'react-router-dom';

function isTemplate([name, object]: [string, any]): boolean {
  return 'templateId' in object && 'keyEncode' in object;
}

const allTemplates = new Map(Object.values(Main).flatMap(a=>{console.log(a); return Object.values(a.meta.templates).map(a=>[a.template.templateId, a])}));

//const allTemplates = new Map(Object.values(Main).flatMap(a=>Object.entries(a.meta.templates).map()));

//const allTemplates = new Map(Object.values(Main).flatMap(a=>Object.entries(a).filter(isTemplate).map(t=>([t[1].templateId, {template: t[1], meta: a.meta.templates[t[0]]}]))));


// const allTemplates = Object.values(Main).flatMap(a=>Object.entries(a)).filter(isTemplate).map(a=>{name: a[0], template: a[1], meta: );

const showTemplateId = ( templateId : string ) => templateId.replace(/([^:]*):(.*)/, "$2@$1");

export const DamlContractList: React.FC = () => {
  var allContracts=[];
  for (let t of allTemplates.values()) {
    // Need to disable the hook check rule - allTemplates is constant so this loop _will_ produce the same sequence every render.
    // eslint-disable-next-line
    const query = useStreamQueries(t.template);
    if(query.contracts)
        allContracts.push(... query.contracts);
  }
  return (
    <div>
      <h1>Daml Contracts</h1>
      <table>
        <tr><th>ID</th><th>Template ID</th><th>Date</th></tr>
        {allContracts.map(c=><Link to={"contracts/"+c.templateId+"/"+c.contractId}><tr><td>{c.contractId}</td><td>{showTemplateId(c.templateId)}</td><td>unavailable</td></tr> {JSON.stringify(Object.keys(c))} </Link>)}
      </table>
    </div>
  );
}

type FieldProps = {
  title: string
};

const ShowDamlField: React.FC<FieldProps> = ({title, children}) =>
  (<div className="m-4"><label className="block font-bold">{title}</label>{children}</div>)

const ShowDamlRecord = (title: string, contents: any) =>
  (<div className="m-4"><label className="block font-bold">{title}</label>{Object.entries(contents).map(([k,v])=>ShowDamlData(k, v))}</div>)

const ShowDamlData = (title: string, contents: any) =>
  (typeof contents == 'object' ? (ShowDamlRecord(title, contents)) : <ShowDamlField title={title}>{contents}</ShowDamlField> )

export const ShowDamlContract: React.FC = () => {
  let { templateId, contractId } = useParams<{ templateId: string, contractId: any}>();
  let meta = allTemplates.get(templateId);
  let {template, choices} = meta;
  let ledger = useLedger();
  let [ contract, setContract ] = useState<CreateEvent<any, any, any> >();
  useEffect(() => {(async () => {
    if( contract?.contractId != contractId ) {
      let c = await ledger.fetch(template, contractId);
      if(c != null) setContract(c);
    }
  })();});
  let choice=useLocation().hash.substring(1);
  
  if(contract) {
      return (<div>
          <pre>Choices:
          {Object.keys(choices).map(k=>(<Link to={"#"+k}>{k}</Link>))}
          {choice ? <ShowDamlChoiceForm choice={choice} meta={meta} contractId={contractId}/> : []}
          </pre>
          <hr/>
          <ShowDamlField title="Signatories">{contract.signatories.join(", ")}</ShowDamlField>
          <ShowDamlField title="Template">{showTemplateId(contract.templateId)}</ShowDamlField>
          <hr/>
          {ShowDamlData("Contract Details", contract.payload)}
          <pre>{JSON.stringify(template,null,2)}</pre>
          </div>);
  } else {
      return (<div>Loading...</div>);
  }


    // {JSON.stringify(Object.keys(template))}{templateId}, {contractId}, {JSON.stringify(contract)}</div>);
}

export const ShowDamlItemInputs: React.FC<{item: Meta}> = ({item}) => {
  switch(item.tag) {
    case "recordOf": {
      return (<div className="flex flex-col">{Object.entries(item.items as {[s: string]: Meta}).map(sub=><><label>{sub[0]}</label><ShowDamlItemInputs item={sub[1]}/></>)}</div>);
    }
    case "enum": {
      return (<select>{(item.items as string[]).map(opt=><option value={opt}>{opt}</option>)}</select>);
    }
    default: {
      return (<input placeholder={item.tag}/>);
    }
  }
}

export const ShowDamlChoiceForm: React.FC<{choice: string, meta: TemplateMeta, contractId: string}> = ({choice, meta, contractId}) => {
  return (<form>
    <ShowDamlItemInputs item={(meta.choices[choice] as ChoiceMeta).argument}/>
    <Link to="">Cancel</Link>
    <button onClick={()=>{}}>Submit</button>
  </form>);
}

export const DamlContracts: React.FC = () => {
  let match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/:templateId/:contractId`}>
        <ShowDamlContract />
      </Route>
      <Route path={match.path}>
        <DamlContractList />
      </Route>
    </Switch>
  );
}

export const DamlTemplates: React.FC = () => {
  return (
    <div>
      <h1>Daml Contracts</h1>
      <table>
        <tr><th>Template ID</th><th>Contracts</th></tr>
      </table>
      {
      Array.from(allTemplates.values(), template=><tr><td>{template.template.templateId.replace(/([^:]*):(.*)/, "$2@$1")}</td><td>Create Contract</td></tr>)
      }
    </div>
  );
}
