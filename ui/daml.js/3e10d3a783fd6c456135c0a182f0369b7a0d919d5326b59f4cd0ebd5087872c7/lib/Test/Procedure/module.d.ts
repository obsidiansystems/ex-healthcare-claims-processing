// Generated from Test/Procedure.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14 from '@daml.js/52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_Procedure from '../../Main/Procedure/module';
import * as Main_Types from '../../Main/Types/module';

export declare type DisclosePM = {
  newObservers: damlTypes.Party[];
};

export declare const DisclosePM:
  damlTypes.Serializable<DisclosePM> & {
  }
;


export declare type Display2 = {
  owner: damlTypes.Party;
  procedureMap: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map<Main_Types.ProcedureCode, damlTypes.ContractId<Main_Procedure.Procedure>>;
};

export declare const Display2:
  damlTypes.Template<Display2, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Test.Procedure:Display2'> & {
  Archive: damlTypes.Choice<Display2, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  DisclosePM: damlTypes.Choice<Display2, DisclosePM, damlTypes.ContractId<Display2>, undefined>;
};

export declare namespace Display2 {
  export type CreateEvent = damlLedger.CreateEvent<Display2, undefined, typeof Display2.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Display2, typeof Display2.templateId>
  export type Event = damlLedger.Event<Display2, undefined, typeof Display2.templateId>
  export type QueryResult = damlLedger.QueryResult<Display2, undefined, typeof Display2.templateId>
}



export declare type Display = {
  owner: damlTypes.Party;
  procedureList: damlTypes.ContractId<Main_Procedure.Procedure>[];
};

export declare const Display:
  damlTypes.Template<Display, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Test.Procedure:Display'> & {
  Archive: damlTypes.Choice<Display, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Display {
  export type CreateEvent = damlLedger.CreateEvent<Display, undefined, typeof Display.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Display, typeof Display.templateId>
  export type Event = damlLedger.Event<Display, undefined, typeof Display.templateId>
  export type QueryResult = damlLedger.QueryResult<Display, undefined, typeof Display.templateId>
}


