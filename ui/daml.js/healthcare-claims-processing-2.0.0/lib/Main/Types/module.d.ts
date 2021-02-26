// Generated from Main/Types.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

export declare type EncounterDetails = {
  patient: damlTypes.Party;
  encounterId: string;
  procedureCode: ProcedureCode;
  diagnosisCode: DiagnosisCode;
  allowedAmount: damlTypes.Optional<damlTypes.Numeric>;
  coPay: damlTypes.Optional<damlTypes.Numeric>;
  patientResponsibility: damlTypes.Optional<damlTypes.Numeric>;
  siteServiceCode: string;
  appointmentPriority: string;
};

export declare const EncounterDetails:
  damlTypes.Serializable<EncounterDetails> & {
  }
;


export declare type DiagnosisCode =
  | 'Fracture_of_scaphoid_bone_right_wrist_S62_001'
  | 'Closed_fracture_of_scaphoid_bone_right_wrist_S62_001A'
  | 'Open_fracture_of_scaphoid_bone_right_wrist_S62_001B'
  | 'Fracture_of_scaphoid_bone_left_wrist_S62_002'
  | 'Closed_fracture_of_scaphoid_bone_left_wrist_S62_002A'
  | 'Open_fracture_of_scaphoid_bone_left_wrist_S62_002B'
  | 'Fracture_of_scaphoid_bone_unspecified_S62_009'
  | 'Closed_fracture_of_scaphoid_bone_unspecified_S62_009A'
  | 'Open_fracture_of_scaphoid_bone_unspecified_S62_009B'
  | 'Pain_in_right_arm_M79_601'
  | 'Pain_in_left_arm_M79_602'
  | 'Pain_in_arm_unspecified_M79_603'
;

export declare const DiagnosisCode:
  damlTypes.Serializable<DiagnosisCode> & {
  }
& { readonly keys: DiagnosisCode[] } & { readonly [e in DiagnosisCode]: e }
;


export declare type ProcedureCode =
  | 'Preventative_Care'
  | 'Physicals'
  | 'Sick_Visits'
  | 'X_Ray_Wrist_2_Views'
  | 'X_Ray_Wrist_3_Views'
;

export declare const ProcedureCode:
  damlTypes.Serializable<ProcedureCode> & {
  }
& { readonly keys: ProcedureCode[] } & { readonly [e in ProcedureCode]: e }
;


export declare type PolicyType =
  | 'Gold'
  | 'Bronze'
;

export declare const PolicyType:
  damlTypes.Serializable<PolicyType> & {
  }
& { readonly keys: PolicyType[] } & { readonly [e in PolicyType]: e }
;


export declare type PayerDemographics = {
  payerHIN: string;
  payerTaxID: string;
  payerBankDFINumber: string;
  payerBankAccountNumber: string;
  payerAddressFirstLine: string;
  payerAddressSecondLine: string;
  payerCity: string;
  payerState: string;
  payerZipCode: string;
};

export declare const PayerDemographics:
  damlTypes.Serializable<PayerDemographics> & {
  }
;


export declare type ProviderDemographics = {
  providerHIN: string;
  providerTaxID: string;
  providerBankDFINumber: string;
  providerBankAccountNumber: string;
  providerType: ProviderType;
  providerAddressFirstLine: string;
  providerAddressSecondLine: string;
  providerCity: string;
  providerState: string;
  providerZipCode: string;
};

export declare const ProviderDemographics:
  damlTypes.Serializable<ProviderDemographics> & {
  }
;


export declare type PatientDemographics = {
  patientGender: string;
  patientSocialSecurityNumber: string;
  patientDateOfBirth: string;
  patientAddressLine1: string;
  patientAddressLine2: string;
  patientCity: string;
  patientState: string;
  patientZipCode: string;
};

export declare const PatientDemographics:
  damlTypes.Serializable<PatientDemographics> & {
  }
;


export declare type ProviderType =
  | 'Primary'
  | 'Specialist'
;

export declare const ProviderType:
  damlTypes.Serializable<ProviderType> & {
  }
& { readonly keys: ProviderType[] } & { readonly [e in ProviderType]: e }
;

