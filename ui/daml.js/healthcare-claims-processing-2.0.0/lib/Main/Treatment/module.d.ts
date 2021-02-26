// Generated from Main/Treatment.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_Claim from '../../Main/Claim/module';
import * as Main_Policy from '../../Main/Policy/module';
import * as Main_Types from '../../Main/Types/module';

export declare type CompleteTreatment = {
};

export declare const CompleteTreatment:
  damlTypes.Serializable<CompleteTreatment> & {
  }
;


export declare type Treatment = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  patient: damlTypes.Party;
  policy: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  encounterDetails: Main_Types.EncounterDetails;
};

export declare const Treatment:
  damlTypes.Template<Treatment, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Treatment:Treatment'> & {
  Archive: damlTypes.Choice<Treatment, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  CompleteTreatment: damlTypes.Choice<Treatment, CompleteTreatment, TreatmentOutput, undefined>;
};

export declare namespace Treatment {
  export type CreateEvent = damlLedger.CreateEvent<Treatment, undefined, typeof Treatment.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Treatment, typeof Treatment.templateId>
  export type Event = damlLedger.Event<Treatment, undefined, typeof Treatment.templateId>
  export type QueryResult = damlLedger.QueryResult<Treatment, undefined, typeof Treatment.templateId>
}



export declare type TreatmentOutput = {
  claimReq: damlTypes.ContractId<Main_Claim.ClaimRequest>;
  patientReq: damlTypes.ContractId<Main_Claim.PatientPaymentRequest>;
};

export declare const TreatmentOutput:
  damlTypes.Serializable<TreatmentOutput> & {
  }
;

