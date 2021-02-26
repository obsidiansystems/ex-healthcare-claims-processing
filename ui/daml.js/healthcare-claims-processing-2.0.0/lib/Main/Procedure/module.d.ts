// Generated from Main/Procedure.daml
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

export declare type DiscloseProcedure = {
  newObservers: damlTypes.Party[];
};

export declare const DiscloseProcedure:
  damlTypes.Serializable<DiscloseProcedure> & {
  }
;


export declare type UnlockAndIncrement = {
};

export declare const UnlockAndIncrement:
  damlTypes.Serializable<UnlockAndIncrement> & {
  }
;


export declare type Unlock = {
};

export declare const Unlock:
  damlTypes.Serializable<Unlock> & {
  }
;


export declare type Lock = {
};

export declare const Lock:
  damlTypes.Serializable<Lock> & {
  }
;


export declare type Procedure = {
  owner: damlTypes.Party;
  procedureCode: Main_Types.ProcedureCode;
  copay: damlTypes.Numeric;
  maxProcedures: damlTypes.Int;
  scheduledProcedures: damlTypes.Int;
  receivedProcedures: damlTypes.Int;
  observers: damlTypes.Party[];
};

export declare const Procedure:
  damlTypes.Template<Procedure, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Procedure:Procedure'> & {
  Archive: damlTypes.Choice<Procedure, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  Lock: damlTypes.Choice<Procedure, Lock, damlTypes.ContractId<Procedure>, undefined>;
  Unlock: damlTypes.Choice<Procedure, Unlock, damlTypes.ContractId<Procedure>, undefined>;
  UnlockAndIncrement: damlTypes.Choice<Procedure, UnlockAndIncrement, damlTypes.ContractId<Procedure>, undefined>;
  DiscloseProcedure: damlTypes.Choice<Procedure, DiscloseProcedure, damlTypes.ContractId<Procedure>, undefined>;
};

export declare namespace Procedure {
  export type CreateEvent = damlLedger.CreateEvent<Procedure, undefined, typeof Procedure.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Procedure, typeof Procedure.templateId>
  export type Event = damlLedger.Event<Procedure, undefined, typeof Procedure.templateId>
  export type QueryResult = damlLedger.QueryResult<Procedure, undefined, typeof Procedure.templateId>
}



export declare type ProcedureFields = {
  copay: damlTypes.Numeric;
  maxProcedures: damlTypes.Int;
  scheduledProcedures: damlTypes.Int;
  receivedProcedures: damlTypes.Int;
};

export declare const ProcedureFields:
  damlTypes.Serializable<ProcedureFields> & {
  }
;

