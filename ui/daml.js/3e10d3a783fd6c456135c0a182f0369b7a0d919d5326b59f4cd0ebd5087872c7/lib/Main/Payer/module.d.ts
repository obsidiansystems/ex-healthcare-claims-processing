// Generated from Main/Payer.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14 from '@daml.js/52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_Policy from '../../Main/Policy/module';
import * as Main_Procedure from '../../Main/Procedure/module';
import * as Main_Types from '../../Main/Types/module';

export declare type CreateInsurancePolicy = {
  patient: damlTypes.Party;
  patientName: string;
  insuranceID: string;
  policyType: Main_Types.PolicyType;
  annualDeductible: damlTypes.Numeric;
  currentDeductible: damlTypes.Numeric;
  procedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map<Main_Types.ProcedureCode, damlTypes.ContractId<Main_Procedure.Procedure>>;
  policyEndDate: damlTypes.Date;
  isPolicyInGoodStanding: boolean;
};

export declare const CreateInsurancePolicy:
  damlTypes.Serializable<CreateInsurancePolicy> & {
  }
;


export declare type Payer = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
  payerName: string;
  demographics: Main_Types.PayerDemographics;
};

export declare const Payer:
  damlTypes.Template<Payer, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Payer:Payer'> & {
  Archive: damlTypes.Choice<Payer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  CreateInsurancePolicy: damlTypes.Choice<Payer, CreateInsurancePolicy, damlTypes.ContractId<Main_Policy.InsurancePolicy>, undefined>;
};

export declare namespace Payer {
  export type CreateEvent = damlLedger.CreateEvent<Payer, undefined, typeof Payer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Payer, typeof Payer.templateId>
  export type Event = damlLedger.Event<Payer, undefined, typeof Payer.templateId>
  export type QueryResult = damlLedger.QueryResult<Payer, undefined, typeof Payer.templateId>
}



export declare type AcceptPayerInvitation = {
  payerName: string;
  demographics: Main_Types.PayerDemographics;
};

export declare const AcceptPayerInvitation:
  damlTypes.Serializable<AcceptPayerInvitation> & {
  }
;


export declare type PayerInvitation = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
};

export declare const PayerInvitation:
  damlTypes.Template<PayerInvitation, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Payer:PayerInvitation'> & {
  AcceptPayerInvitation: damlTypes.Choice<PayerInvitation, AcceptPayerInvitation, damlTypes.ContractId<Payer>, undefined>;
  Archive: damlTypes.Choice<PayerInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace PayerInvitation {
  export type CreateEvent = damlLedger.CreateEvent<PayerInvitation, undefined, typeof PayerInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PayerInvitation, typeof PayerInvitation.templateId>
  export type Event = damlLedger.Event<PayerInvitation, undefined, typeof PayerInvitation.templateId>
  export type QueryResult = damlLedger.QueryResult<PayerInvitation, undefined, typeof PayerInvitation.templateId>
}


