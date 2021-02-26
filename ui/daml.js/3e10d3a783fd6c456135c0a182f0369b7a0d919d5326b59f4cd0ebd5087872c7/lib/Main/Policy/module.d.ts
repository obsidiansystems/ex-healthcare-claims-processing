// Generated from Main/Policy.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14 from '@daml.js/52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_Procedure from '../../Main/Procedure/module';
import * as Main_Types from '../../Main/Types/module';

export declare type Disclose = {
  newReceiver: damlTypes.Party;
};

export declare const Disclose:
  damlTypes.Serializable<Disclose> & {
  }
;


export declare type DisclosedPolicy = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
  patient: damlTypes.Party;
  receivers: damlTypes.Party[];
  patientName: string;
  insuranceID: string;
  policyType: Main_Types.PolicyType;
  annualDeductible: damlTypes.Numeric;
  currentDeductible: damlTypes.Numeric;
  procedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map<Main_Types.ProcedureCode, damlTypes.ContractId<Main_Procedure.Procedure>>;
  policyEndDate: damlTypes.Date;
  isPolicyInGoodStanding: boolean;
};

export declare const DisclosedPolicy:
  damlTypes.Template<DisclosedPolicy, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Policy:DisclosedPolicy'> & {
  Archive: damlTypes.Choice<DisclosedPolicy, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  Disclose: damlTypes.Choice<DisclosedPolicy, Disclose, damlTypes.ContractId<DisclosedPolicy>, undefined>;
};

export declare namespace DisclosedPolicy {
  export type CreateEvent = damlLedger.CreateEvent<DisclosedPolicy, undefined, typeof DisclosedPolicy.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DisclosedPolicy, typeof DisclosedPolicy.templateId>
  export type Event = damlLedger.Event<DisclosedPolicy, undefined, typeof DisclosedPolicy.templateId>
  export type QueryResult = damlLedger.QueryResult<DisclosedPolicy, undefined, typeof DisclosedPolicy.templateId>
}



export declare type DisclosePolicy = {
  receivers: damlTypes.Party[];
};

export declare const DisclosePolicy:
  damlTypes.Serializable<DisclosePolicy> & {
  }
;


export declare type UpdatePolicyOnTreatmentCompletion = {
  patientResponsibility: damlTypes.Numeric;
  procedureCode: Main_Types.ProcedureCode;
};

export declare const UpdatePolicyOnTreatmentCompletion:
  damlTypes.Serializable<UpdatePolicyOnTreatmentCompletion> & {
  }
;


export declare type UnlockProcedureOnAppointmentCancellation = {
  procedureCode: Main_Types.ProcedureCode;
};

export declare const UnlockProcedureOnAppointmentCancellation:
  damlTypes.Serializable<UnlockProcedureOnAppointmentCancellation> & {
  }
;


export declare type LockProcedureOnAppointmentCreation = {
  procedureCode: Main_Types.ProcedureCode;
};

export declare const LockProcedureOnAppointmentCreation:
  damlTypes.Serializable<LockProcedureOnAppointmentCreation> & {
  }
;


export declare type InsurancePolicy = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
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

export declare const InsurancePolicy:
  damlTypes.Template<InsurancePolicy, InsurancePolicy.Key, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Policy:InsurancePolicy'> & {
  LockProcedureOnAppointmentCreation: damlTypes.Choice<InsurancePolicy, LockProcedureOnAppointmentCreation, damlTypes.ContractId<InsurancePolicy>, InsurancePolicy.Key>;
  UnlockProcedureOnAppointmentCancellation: damlTypes.Choice<InsurancePolicy, UnlockProcedureOnAppointmentCancellation, damlTypes.ContractId<InsurancePolicy>, InsurancePolicy.Key>;
  UpdatePolicyOnTreatmentCompletion: damlTypes.Choice<InsurancePolicy, UpdatePolicyOnTreatmentCompletion, damlTypes.ContractId<InsurancePolicy>, InsurancePolicy.Key>;
  DisclosePolicy: damlTypes.Choice<InsurancePolicy, DisclosePolicy, damlTypes.ContractId<DisclosedPolicy>, InsurancePolicy.Key>;
  Archive: damlTypes.Choice<InsurancePolicy, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, InsurancePolicy.Key>;
};

export declare namespace InsurancePolicy {
  export type Key = pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3<damlTypes.Party, damlTypes.Party, damlTypes.Party>
  export type CreateEvent = damlLedger.CreateEvent<InsurancePolicy, InsurancePolicy.Key, typeof InsurancePolicy.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<InsurancePolicy, typeof InsurancePolicy.templateId>
  export type Event = damlLedger.Event<InsurancePolicy, InsurancePolicy.Key, typeof InsurancePolicy.templateId>
  export type QueryResult = damlLedger.QueryResult<InsurancePolicy, InsurancePolicy.Key, typeof InsurancePolicy.templateId>
}


