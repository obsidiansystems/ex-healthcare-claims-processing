// Generated from Main/Patient.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14 from '@daml.js/52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_Payer from '../../Main/Payer/module';
import * as Main_Policy from '../../Main/Policy/module';
import * as Main_Procedure from '../../Main/Procedure/module';
import * as Main_Types from '../../Main/Types/module';

export declare type NotifyPatientOfPCPAcceptance = {
  operator: damlTypes.Party;
  patient: damlTypes.Party;
  provider: damlTypes.Party;
  demographics: Main_Types.PatientDemographics;
  providerID: string;
};

export declare const NotifyPatientOfPCPAcceptance:
  damlTypes.Template<NotifyPatientOfPCPAcceptance, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:NotifyPatientOfPCPAcceptance'> & {
  Archive: damlTypes.Choice<NotifyPatientOfPCPAcceptance, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace NotifyPatientOfPCPAcceptance {
  export type CreateEvent = damlLedger.CreateEvent<NotifyPatientOfPCPAcceptance, undefined, typeof NotifyPatientOfPCPAcceptance.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<NotifyPatientOfPCPAcceptance, typeof NotifyPatientOfPCPAcceptance.templateId>
  export type Event = damlLedger.Event<NotifyPatientOfPCPAcceptance, undefined, typeof NotifyPatientOfPCPAcceptance.templateId>
  export type QueryResult = damlLedger.QueryResult<NotifyPatientOfPCPAcceptance, undefined, typeof NotifyPatientOfPCPAcceptance.templateId>
}



export declare type AcceptPatient = {
  providerID: string;
};

export declare const AcceptPatient:
  damlTypes.Serializable<AcceptPatient> & {
  }
;


export declare type PrimaryCareProviderRequest = {
  operator: damlTypes.Party;
  patient: damlTypes.Party;
  provider: damlTypes.Party;
  demographics: Main_Types.PatientDemographics;
};

export declare const PrimaryCareProviderRequest:
  damlTypes.Template<PrimaryCareProviderRequest, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:PrimaryCareProviderRequest'> & {
  Archive: damlTypes.Choice<PrimaryCareProviderRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptPatient: damlTypes.Choice<PrimaryCareProviderRequest, AcceptPatient, damlTypes.ContractId<NotifyPatientOfPCPAcceptance>, undefined>;
};

export declare namespace PrimaryCareProviderRequest {
  export type CreateEvent = damlLedger.CreateEvent<PrimaryCareProviderRequest, undefined, typeof PrimaryCareProviderRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PrimaryCareProviderRequest, typeof PrimaryCareProviderRequest.templateId>
  export type Event = damlLedger.Event<PrimaryCareProviderRequest, undefined, typeof PrimaryCareProviderRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<PrimaryCareProviderRequest, undefined, typeof PrimaryCareProviderRequest.templateId>
}



export declare type NotifyPatientOfPayerAcceptance = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
  patient: damlTypes.Party;
  insuranceID: string;
  policyType: Main_Types.PolicyType;
};

export declare const NotifyPatientOfPayerAcceptance:
  damlTypes.Template<NotifyPatientOfPayerAcceptance, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:NotifyPatientOfPayerAcceptance'> & {
  Archive: damlTypes.Choice<NotifyPatientOfPayerAcceptance, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace NotifyPatientOfPayerAcceptance {
  export type CreateEvent = damlLedger.CreateEvent<NotifyPatientOfPayerAcceptance, undefined, typeof NotifyPatientOfPayerAcceptance.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<NotifyPatientOfPayerAcceptance, typeof NotifyPatientOfPayerAcceptance.templateId>
  export type Event = damlLedger.Event<NotifyPatientOfPayerAcceptance, undefined, typeof NotifyPatientOfPayerAcceptance.templateId>
  export type QueryResult = damlLedger.QueryResult<NotifyPatientOfPayerAcceptance, undefined, typeof NotifyPatientOfPayerAcceptance.templateId>
}



export declare type AcceptMember = {
  payerCid: damlTypes.ContractId<Main_Payer.Payer>;
  insuranceID: string;
  undisclosedProcedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map<Main_Types.ProcedureCode, damlTypes.ContractId<Main_Procedure.Procedure>>;
};

export declare const AcceptMember:
  damlTypes.Serializable<AcceptMember> & {
  }
;


export declare type RequestPayerForPolicy = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
  patient: damlTypes.Party;
  policyType: Main_Types.PolicyType;
  patientName: string;
  demographics: Main_Types.PatientDemographics;
};

export declare const RequestPayerForPolicy:
  damlTypes.Template<RequestPayerForPolicy, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:RequestPayerForPolicy'> & {
  Archive: damlTypes.Choice<RequestPayerForPolicy, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptMember: damlTypes.Choice<RequestPayerForPolicy, AcceptMember, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Policy.InsurancePolicy>, damlTypes.ContractId<NotifyPatientOfPayerAcceptance>>, undefined>;
};

export declare namespace RequestPayerForPolicy {
  export type CreateEvent = damlLedger.CreateEvent<RequestPayerForPolicy, undefined, typeof RequestPayerForPolicy.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RequestPayerForPolicy, typeof RequestPayerForPolicy.templateId>
  export type Event = damlLedger.Event<RequestPayerForPolicy, undefined, typeof RequestPayerForPolicy.templateId>
  export type QueryResult = damlLedger.QueryResult<RequestPayerForPolicy, undefined, typeof RequestPayerForPolicy.templateId>
}



export declare type SetPrimaryCareProvider = {
  notifyCid: damlTypes.ContractId<NotifyPatientOfPCPAcceptance>;
};

export declare const SetPrimaryCareProvider:
  damlTypes.Serializable<SetPrimaryCareProvider> & {
  }
;


export declare type RequestPrimaryCareProvider = {
  primaryCareProvider: damlTypes.Party;
};

export declare const RequestPrimaryCareProvider:
  damlTypes.Serializable<RequestPrimaryCareProvider> & {
  }
;


export declare type SetInsurancePolicy = {
  notifyCid: damlTypes.ContractId<NotifyPatientOfPayerAcceptance>;
};

export declare const SetInsurancePolicy:
  damlTypes.Serializable<SetInsurancePolicy> & {
  }
;


export declare type RequestInsurancePolicy = {
  payer: damlTypes.Party;
  policyType: Main_Types.PolicyType;
};

export declare const RequestInsurancePolicy:
  damlTypes.Serializable<RequestInsurancePolicy> & {
  }
;


export declare type Patient = {
  operator: damlTypes.Party;
  patient: damlTypes.Party;
  patientName: string;
  demographics: Main_Types.PatientDemographics;
  insuranceID: damlTypes.Optional<string>;
  primaryCareProviderID: damlTypes.Optional<string>;
};

export declare const Patient:
  damlTypes.Template<Patient, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:Patient'> & {
  Archive: damlTypes.Choice<Patient, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  RequestInsurancePolicy: damlTypes.Choice<Patient, RequestInsurancePolicy, damlTypes.ContractId<RequestPayerForPolicy>, undefined>;
  SetInsurancePolicy: damlTypes.Choice<Patient, SetInsurancePolicy, damlTypes.ContractId<Patient>, undefined>;
  RequestPrimaryCareProvider: damlTypes.Choice<Patient, RequestPrimaryCareProvider, damlTypes.ContractId<PrimaryCareProviderRequest>, undefined>;
  SetPrimaryCareProvider: damlTypes.Choice<Patient, SetPrimaryCareProvider, damlTypes.ContractId<Patient>, undefined>;
};

export declare namespace Patient {
  export type CreateEvent = damlLedger.CreateEvent<Patient, undefined, typeof Patient.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Patient, typeof Patient.templateId>
  export type Event = damlLedger.Event<Patient, undefined, typeof Patient.templateId>
  export type QueryResult = damlLedger.QueryResult<Patient, undefined, typeof Patient.templateId>
}



export declare type AcceptPatientInvitation = {
  patientName: string;
  demographics: Main_Types.PatientDemographics;
};

export declare const AcceptPatientInvitation:
  damlTypes.Serializable<AcceptPatientInvitation> & {
  }
;


export declare type PatientInvitation = {
  operator: damlTypes.Party;
  patient: damlTypes.Party;
};

export declare const PatientInvitation:
  damlTypes.Template<PatientInvitation, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:PatientInvitation'> & {
  Archive: damlTypes.Choice<PatientInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptPatientInvitation: damlTypes.Choice<PatientInvitation, AcceptPatientInvitation, damlTypes.ContractId<Patient>, undefined>;
};

export declare namespace PatientInvitation {
  export type CreateEvent = damlLedger.CreateEvent<PatientInvitation, undefined, typeof PatientInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PatientInvitation, typeof PatientInvitation.templateId>
  export type Event = damlLedger.Event<PatientInvitation, undefined, typeof PatientInvitation.templateId>
  export type QueryResult = damlLedger.QueryResult<PatientInvitation, undefined, typeof PatientInvitation.templateId>
}


