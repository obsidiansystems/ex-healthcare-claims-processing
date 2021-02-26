// Generated from Main/NetworkContract.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14 from '@daml.js/52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_Types from '../../Main/Types/module';

export declare type PayerRejectsNetworkContract = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
  provider: damlTypes.Party;
  reason: string;
};

export declare const PayerRejectsNetworkContract:
  damlTypes.Template<PayerRejectsNetworkContract, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.NetworkContract:PayerRejectsNetworkContract'> & {
  Archive: damlTypes.Choice<PayerRejectsNetworkContract, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace PayerRejectsNetworkContract {
  export type CreateEvent = damlLedger.CreateEvent<PayerRejectsNetworkContract, undefined, typeof PayerRejectsNetworkContract.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PayerRejectsNetworkContract, typeof PayerRejectsNetworkContract.templateId>
  export type Event = damlLedger.Event<PayerRejectsNetworkContract, undefined, typeof PayerRejectsNetworkContract.templateId>
  export type QueryResult = damlLedger.QueryResult<PayerRejectsNetworkContract, undefined, typeof PayerRejectsNetworkContract.templateId>
}



export declare type ProviderNetworkContract = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
  payerName: string;
  provider: damlTypes.Party;
  providerName: string;
  demographics: Main_Types.ProviderDemographics;
  feeSchedule: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map<Main_Types.ProcedureCode, damlTypes.Numeric>;
};

export declare const ProviderNetworkContract:
  damlTypes.Template<ProviderNetworkContract, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.NetworkContract:ProviderNetworkContract'> & {
  Archive: damlTypes.Choice<ProviderNetworkContract, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ProviderNetworkContract {
  export type CreateEvent = damlLedger.CreateEvent<ProviderNetworkContract, undefined, typeof ProviderNetworkContract.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ProviderNetworkContract, typeof ProviderNetworkContract.templateId>
  export type Event = damlLedger.Event<ProviderNetworkContract, undefined, typeof ProviderNetworkContract.templateId>
  export type QueryResult = damlLedger.QueryResult<ProviderNetworkContract, undefined, typeof ProviderNetworkContract.templateId>
}


