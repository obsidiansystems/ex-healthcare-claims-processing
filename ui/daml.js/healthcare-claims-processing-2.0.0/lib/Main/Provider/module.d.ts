// Generated from Main/Provider.daml
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

import * as Main_Appointment from '../../Main/Appointment/module';
import * as Main_NetworkContract from '../../Main/NetworkContract/module';
import * as Main_Payer from '../../Main/Payer/module';
import * as Main_Policy from '../../Main/Policy/module';
import * as Main_Referral from '../../Main/Referral/module';
import * as Main_RuleTypes from '../../Main/RuleTypes/module';
import * as Main_Types from '../../Main/Types/module';

export declare type FailedSchedulingAppointment = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  patient: damlTypes.Party;
  appointmentDate: damlTypes.Date;
  reason: string;
};

export declare const FailedSchedulingAppointment:
  damlTypes.Template<FailedSchedulingAppointment, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:FailedSchedulingAppointment'> & {
  Archive: damlTypes.Choice<FailedSchedulingAppointment, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace FailedSchedulingAppointment {
  export type CreateEvent = damlLedger.CreateEvent<FailedSchedulingAppointment, undefined, typeof FailedSchedulingAppointment.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FailedSchedulingAppointment, typeof FailedSchedulingAppointment.templateId>
  export type Event = damlLedger.Event<FailedSchedulingAppointment, undefined, typeof FailedSchedulingAppointment.templateId>
  export type QueryResult = damlLedger.QueryResult<FailedSchedulingAppointment, undefined, typeof FailedSchedulingAppointment.templateId>
}



export declare type ScheduleAppointment = {
  appointmentDate: damlTypes.Date;
};

export declare const ScheduleAppointment:
  damlTypes.Serializable<ScheduleAppointment> & {
  }
;


export declare type UpdateReferralDetails = {
  referralCid: damlTypes.ContractId<Main_Referral.Referral>;
};

export declare const UpdateReferralDetails:
  damlTypes.Serializable<UpdateReferralDetails> & {
  }
;


export declare type ReferralDetails = {
  operator: damlTypes.Party;
  referringProvider: damlTypes.Party;
  renderingProvider: damlTypes.Party;
  referralDetails: Main_RuleTypes.RuleParameters;
};

export declare const ReferralDetails:
  damlTypes.Template<ReferralDetails, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:ReferralDetails'> & {
  Archive: damlTypes.Choice<ReferralDetails, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  ScheduleAppointment: damlTypes.Choice<ReferralDetails, ScheduleAppointment, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either<damlTypes.ContractId<FailedSchedulingAppointment>, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Appointment.Appointment>, damlTypes.ContractId<NotifyPayer>>>, undefined>;
  UpdateReferralDetails: damlTypes.Choice<ReferralDetails, UpdateReferralDetails, damlTypes.ContractId<ReferralDetails>, undefined>;
};

export declare namespace ReferralDetails {
  export type CreateEvent = damlLedger.CreateEvent<ReferralDetails, undefined, typeof ReferralDetails.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ReferralDetails, typeof ReferralDetails.templateId>
  export type Event = damlLedger.Event<ReferralDetails, undefined, typeof ReferralDetails.templateId>
  export type QueryResult = damlLedger.QueryResult<ReferralDetails, undefined, typeof ReferralDetails.templateId>
}



export declare type AcknowledgeAndDisclose = {
  policyCid: damlTypes.ContractId<Main_Policy.InsurancePolicy>;
  receivers: damlTypes.Party[];
};

export declare const AcknowledgeAndDisclose:
  damlTypes.Serializable<AcknowledgeAndDisclose> & {
  }
;


export declare type NotifyPatient = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
  patient: damlTypes.Party;
  provider: damlTypes.Party;
};

export declare const NotifyPatient:
  damlTypes.Template<NotifyPatient, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:NotifyPatient'> & {
  Archive: damlTypes.Choice<NotifyPatient, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcknowledgeAndDisclose: damlTypes.Choice<NotifyPatient, AcknowledgeAndDisclose, damlTypes.ContractId<Main_Policy.DisclosedPolicy>, undefined>;
};

export declare namespace NotifyPatient {
  export type CreateEvent = damlLedger.CreateEvent<NotifyPatient, undefined, typeof NotifyPatient.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<NotifyPatient, typeof NotifyPatient.templateId>
  export type Event = damlLedger.Event<NotifyPatient, undefined, typeof NotifyPatient.templateId>
  export type QueryResult = damlLedger.QueryResult<NotifyPatient, undefined, typeof NotifyPatient.templateId>
}



export declare type DisclosureRule = {
  operator: damlTypes.Party;
  owner: damlTypes.Party;
  receivers: damlTypes.Party[];
};

export declare const DisclosureRule:
  damlTypes.Template<DisclosureRule, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:DisclosureRule'> & {
  Archive: damlTypes.Choice<DisclosureRule, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace DisclosureRule {
  export type CreateEvent = damlLedger.CreateEvent<DisclosureRule, undefined, typeof DisclosureRule.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<DisclosureRule, typeof DisclosureRule.templateId>
  export type Event = damlLedger.Event<DisclosureRule, undefined, typeof DisclosureRule.templateId>
  export type QueryResult = damlLedger.QueryResult<DisclosureRule, undefined, typeof DisclosureRule.templateId>
}



export declare type AcknowledgeAndLock = {
  policyCid: damlTypes.ContractId<Main_Policy.InsurancePolicy>;
};

export declare const AcknowledgeAndLock:
  damlTypes.Serializable<AcknowledgeAndLock> & {
  }
;


export declare type NotifyPayer = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
  patient: damlTypes.Party;
  provider: damlTypes.Party;
  referralDetails: Main_RuleTypes.RuleParameters;
};

export declare const NotifyPayer:
  damlTypes.Template<NotifyPayer, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:NotifyPayer'> & {
  Archive: damlTypes.Choice<NotifyPayer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcknowledgeAndLock: damlTypes.Choice<NotifyPayer, AcknowledgeAndLock, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Policy.InsurancePolicy>, damlTypes.ContractId<NotifyPatient>>, undefined>;
};

export declare namespace NotifyPayer {
  export type CreateEvent = damlLedger.CreateEvent<NotifyPayer, undefined, typeof NotifyPayer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<NotifyPayer, typeof NotifyPayer.templateId>
  export type Event = damlLedger.Event<NotifyPayer, undefined, typeof NotifyPayer.templateId>
  export type QueryResult = damlLedger.QueryResult<NotifyPayer, undefined, typeof NotifyPayer.templateId>
}



export declare type EvaluateReferral = {
  networkContractCid: damlTypes.ContractId<Main_NetworkContract.ProviderNetworkContract>;
};

export declare const EvaluateReferral:
  damlTypes.Serializable<EvaluateReferral> & {
  }
;


export declare type ReferralRequest = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  receiver: damlTypes.Party;
  policy: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  encounterDetails: Main_Types.EncounterDetails;
};

export declare const ReferralRequest:
  damlTypes.Template<ReferralRequest, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:ReferralRequest'> & {
  Archive: damlTypes.Choice<ReferralRequest, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  EvaluateReferral: damlTypes.Choice<ReferralRequest, EvaluateReferral, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either<damlTypes.ContractId<Main_Referral.FailedReferral>, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Referral.Referral>, damlTypes.ContractId<ReferralDetails>>>, undefined>;
};

export declare namespace ReferralRequest {
  export type CreateEvent = damlLedger.CreateEvent<ReferralRequest, undefined, typeof ReferralRequest.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ReferralRequest, typeof ReferralRequest.templateId>
  export type Event = damlLedger.Event<ReferralRequest, undefined, typeof ReferralRequest.templateId>
  export type QueryResult = damlLedger.QueryResult<ReferralRequest, undefined, typeof ReferralRequest.templateId>
}



export declare type RejectNetworkContractRequest = {
  reason: string;
};

export declare const RejectNetworkContractRequest:
  damlTypes.Serializable<RejectNetworkContractRequest> & {
  }
;


export declare type AcceptNetworkContractRequest = {
  payerCid: damlTypes.ContractId<Main_Payer.Payer>;
  feeSchedule: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map<Main_Types.ProcedureCode, damlTypes.Numeric>;
};

export declare const AcceptNetworkContractRequest:
  damlTypes.Serializable<AcceptNetworkContractRequest> & {
  }
;


export declare type ProviderRequestsPayer = {
  operator: damlTypes.Party;
  payer: damlTypes.Party;
  provider: damlTypes.Party;
  providerName: string;
  demographics: Main_Types.ProviderDemographics;
};

export declare const ProviderRequestsPayer:
  damlTypes.Template<ProviderRequestsPayer, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:ProviderRequestsPayer'> & {
  Archive: damlTypes.Choice<ProviderRequestsPayer, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptNetworkContractRequest: damlTypes.Choice<ProviderRequestsPayer, AcceptNetworkContractRequest, damlTypes.ContractId<Main_NetworkContract.ProviderNetworkContract>, undefined>;
  RejectNetworkContractRequest: damlTypes.Choice<ProviderRequestsPayer, RejectNetworkContractRequest, damlTypes.ContractId<Main_NetworkContract.PayerRejectsNetworkContract>, undefined>;
};

export declare namespace ProviderRequestsPayer {
  export type CreateEvent = damlLedger.CreateEvent<ProviderRequestsPayer, undefined, typeof ProviderRequestsPayer.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ProviderRequestsPayer, typeof ProviderRequestsPayer.templateId>
  export type Event = damlLedger.Event<ProviderRequestsPayer, undefined, typeof ProviderRequestsPayer.templateId>
  export type QueryResult = damlLedger.QueryResult<ProviderRequestsPayer, undefined, typeof ProviderRequestsPayer.templateId>
}



export declare type CreateReferral = {
  receiver: damlTypes.Party;
  policy: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  encounterId: string;
  procedureCode: Main_Types.ProcedureCode;
  diagnosisCode: Main_Types.DiagnosisCode;
  siteServiceCode: string;
  appointmentPriority: string;
};

export declare const CreateReferral:
  damlTypes.Serializable<CreateReferral> & {
  }
;


export declare type RequestNetworkContract = {
  payer: damlTypes.Party;
};

export declare const RequestNetworkContract:
  damlTypes.Serializable<RequestNetworkContract> & {
  }
;


export declare type Provider = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  providerName: string;
  demographics: Main_Types.ProviderDemographics;
};

export declare const Provider:
  damlTypes.Template<Provider, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:Provider'> & {
  Archive: damlTypes.Choice<Provider, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  RequestNetworkContract: damlTypes.Choice<Provider, RequestNetworkContract, damlTypes.ContractId<ProviderRequestsPayer>, undefined>;
  CreateReferral: damlTypes.Choice<Provider, CreateReferral, damlTypes.ContractId<ReferralRequest>, undefined>;
};

export declare namespace Provider {
  export type CreateEvent = damlLedger.CreateEvent<Provider, undefined, typeof Provider.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Provider, typeof Provider.templateId>
  export type Event = damlLedger.Event<Provider, undefined, typeof Provider.templateId>
  export type QueryResult = damlLedger.QueryResult<Provider, undefined, typeof Provider.templateId>
}



export declare type AcceptProviderInvitation = {
  providerName: string;
  demographics: Main_Types.ProviderDemographics;
};

export declare const AcceptProviderInvitation:
  damlTypes.Serializable<AcceptProviderInvitation> & {
  }
;


export declare type ProviderInvitation = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
};

export declare const ProviderInvitation:
  damlTypes.Template<ProviderInvitation, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:ProviderInvitation'> & {
  Archive: damlTypes.Choice<ProviderInvitation, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  AcceptProviderInvitation: damlTypes.Choice<ProviderInvitation, AcceptProviderInvitation, damlTypes.ContractId<Provider>, undefined>;
};

export declare namespace ProviderInvitation {
  export type CreateEvent = damlLedger.CreateEvent<ProviderInvitation, undefined, typeof ProviderInvitation.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<ProviderInvitation, typeof ProviderInvitation.templateId>
  export type Event = damlLedger.Event<ProviderInvitation, undefined, typeof ProviderInvitation.templateId>
  export type QueryResult = damlLedger.QueryResult<ProviderInvitation, undefined, typeof ProviderInvitation.templateId>
}


