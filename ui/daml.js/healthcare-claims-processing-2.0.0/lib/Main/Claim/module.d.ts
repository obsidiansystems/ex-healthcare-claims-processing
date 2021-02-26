// Generated from Main/Claim.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_Policy from '../../Main/Policy/module';
import * as Main_Types from '../../Main/Types/module';

export declare type AcceptPatientObligation = {
};

export declare const AcceptPatientObligation:
  damlTypes.Serializable<AcceptPatientObligation> & {
  }
;


export declare type PatientPaymentRequest = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  patient: damlTypes.Party;
  encounterDetails: Main_Types.EncounterDetails;
  paymentId: string;
  amount: damlTypes.Numeric;
};

export declare const PatientPaymentRequest:
  damlTypes.Template<PatientPaymentRequest, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:PatientPaymentRequest'> & {
  Archive: damlTypes.Choice<PatientPaymentRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptPatientObligation: damlTypes.Choice<PatientPaymentRequest, AcceptPatientObligation, damlTypes.ContractId<PatientObligation>, undefined>;
};

export declare namespace PatientPaymentRequest {
  export type CreateEvent = damlLedger.CreateEvent<PatientPaymentRequest, undefined, typeof PatientPaymentRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PatientPaymentRequest, typeof PatientPaymentRequest.templateId>
  export type Event = damlLedger.Event<PatientPaymentRequest, undefined, typeof PatientPaymentRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<PatientPaymentRequest, undefined, typeof PatientPaymentRequest.templateId>
}



export declare type AcceptClaimRequest = {
};

export declare const AcceptClaimRequest:
  damlTypes.Serializable<AcceptClaimRequest> & {
  }
;


export declare type ClaimRequest = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  payer: damlTypes.Party;
  encounterDetails: Main_Types.EncounterDetails;
  claimId: string;
  amount: damlTypes.Numeric;
};

export declare const ClaimRequest:
  damlTypes.Template<ClaimRequest, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:ClaimRequest'> & {
  AcceptClaimRequest: damlTypes.Choice<ClaimRequest, AcceptClaimRequest, damlTypes.ContractId<Claim>, undefined>;
  Archive: damlTypes.Choice<ClaimRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace ClaimRequest {
  export type CreateEvent = damlLedger.CreateEvent<ClaimRequest, undefined, typeof ClaimRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ClaimRequest, typeof ClaimRequest.templateId>
  export type Event = damlLedger.Event<ClaimRequest, undefined, typeof ClaimRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<ClaimRequest, undefined, typeof ClaimRequest.templateId>
}



export declare type PaymentReceipt = {
  operator: damlTypes.Party;
  recipient: damlTypes.Party;
  sender: damlTypes.Party;
  paymentId: string;
  amount: damlTypes.Numeric;
};

export declare const PaymentReceipt:
  damlTypes.Template<PaymentReceipt, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:PaymentReceipt'> & {
  Archive: damlTypes.Choice<PaymentReceipt, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace PaymentReceipt {
  export type CreateEvent = damlLedger.CreateEvent<PaymentReceipt, undefined, typeof PaymentReceipt.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PaymentReceipt, typeof PaymentReceipt.templateId>
  export type Event = damlLedger.Event<PaymentReceipt, undefined, typeof PaymentReceipt.templateId>
  export type QueryResult = damlLedger.QueryResult<PaymentReceipt, undefined, typeof PaymentReceipt.templateId>
}



export declare type PayPatientObligation = {
};

export declare const PayPatientObligation:
  damlTypes.Serializable<PayPatientObligation> & {
  }
;


export declare type PatientObligation = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  patient: damlTypes.Party;
  encounterDetails: Main_Types.EncounterDetails;
  paymentId: string;
  amount: damlTypes.Numeric;
};

export declare const PatientObligation:
  damlTypes.Template<PatientObligation, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:PatientObligation'> & {
  PayPatientObligation: damlTypes.Choice<PatientObligation, PayPatientObligation, damlTypes.ContractId<PaymentReceipt>, undefined>;
  Archive: damlTypes.Choice<PatientObligation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace PatientObligation {
  export type CreateEvent = damlLedger.CreateEvent<PatientObligation, undefined, typeof PatientObligation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<PatientObligation, typeof PatientObligation.templateId>
  export type Event = damlLedger.Event<PatientObligation, undefined, typeof PatientObligation.templateId>
  export type QueryResult = damlLedger.QueryResult<PatientObligation, undefined, typeof PatientObligation.templateId>
}



export declare type PayClaim = {
};

export declare const PayClaim:
  damlTypes.Serializable<PayClaim> & {
  }
;


export declare type Claim = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  payer: damlTypes.Party;
  encounterDetails: Main_Types.EncounterDetails;
  claimId: string;
  amount: damlTypes.Numeric;
};

export declare const Claim:
  damlTypes.Template<Claim, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:Claim'> & {
  PayClaim: damlTypes.Choice<Claim, PayClaim, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<PaymentReceipt>, damlTypes.ContractId<Main_Policy.InsurancePolicy>>, undefined>;
  Archive: damlTypes.Choice<Claim, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace Claim {
  export type CreateEvent = damlLedger.CreateEvent<Claim, undefined, typeof Claim.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Claim, typeof Claim.templateId>
  export type Event = damlLedger.Event<Claim, undefined, typeof Claim.templateId>
  export type QueryResult = damlLedger.QueryResult<Claim, undefined, typeof Claim.templateId>
}


