// Generated from Main/Referral.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_Types from '../../Main/Types/module';

export declare type FailedReferral = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  receiver: damlTypes.Party;
  patient: damlTypes.Party;
  reason: string;
};

export declare const FailedReferral:
  damlTypes.Template<FailedReferral, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Referral:FailedReferral'> & {
  Archive: damlTypes.Choice<FailedReferral, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace FailedReferral {
  export type CreateEvent = damlLedger.CreateEvent<FailedReferral, undefined, typeof FailedReferral.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FailedReferral, typeof FailedReferral.templateId>
  export type Event = damlLedger.Event<FailedReferral, undefined, typeof FailedReferral.templateId>
  export type QueryResult = damlLedger.QueryResult<FailedReferral, undefined, typeof FailedReferral.templateId>
}



export declare type Referral = {
  operator: damlTypes.Party;
  referringProvider: damlTypes.Party;
  renderingProvider: damlTypes.Party;
  encounterDetails: Main_Types.EncounterDetails;
};

export declare const Referral:
  damlTypes.Template<Referral, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Referral:Referral'> & {
  Archive: damlTypes.Choice<Referral, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Referral {
  export type CreateEvent = damlLedger.CreateEvent<Referral, undefined, typeof Referral.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Referral, typeof Referral.templateId>
  export type Event = damlLedger.Event<Referral, undefined, typeof Referral.templateId>
  export type QueryResult = damlLedger.QueryResult<Referral, undefined, typeof Referral.templateId>
}


