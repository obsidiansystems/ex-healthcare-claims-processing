// Generated from Main/Onboard.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_Patient from '../../Main/Patient/module';
import * as Main_Payer from '../../Main/Payer/module';
import * as Main_Provider from '../../Main/Provider/module';

export declare type InvitePatient = {
  patient: damlTypes.Party;
};

export declare const InvitePatient:
  damlTypes.Serializable<InvitePatient> & {
  }
;


export declare type InviteProvider = {
  provider: damlTypes.Party;
};

export declare const InviteProvider:
  damlTypes.Serializable<InviteProvider> & {
  }
;


export declare type InvitePayer = {
  payer: damlTypes.Party;
};

export declare const InvitePayer:
  damlTypes.Serializable<InvitePayer> & {
  }
;


export declare type OnboardEntityMaster = {
  operator: damlTypes.Party;
};

export declare const OnboardEntityMaster:
  damlTypes.Template<OnboardEntityMaster, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Onboard:OnboardEntityMaster'> & {
  InvitePayer: damlTypes.Choice<OnboardEntityMaster, InvitePayer, damlTypes.ContractId<Main_Payer.PayerInvitation>, undefined>;
  InviteProvider: damlTypes.Choice<OnboardEntityMaster, InviteProvider, damlTypes.ContractId<Main_Provider.ProviderInvitation>, undefined>;
  Archive: damlTypes.Choice<OnboardEntityMaster, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  InvitePatient: damlTypes.Choice<OnboardEntityMaster, InvitePatient, damlTypes.ContractId<Main_Patient.PatientInvitation>, undefined>;
};

export declare namespace OnboardEntityMaster {
  export type CreateEvent = damlLedger.CreateEvent<OnboardEntityMaster, undefined, typeof OnboardEntityMaster.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<OnboardEntityMaster, typeof OnboardEntityMaster.templateId>
  export type Event = damlLedger.Event<OnboardEntityMaster, undefined, typeof OnboardEntityMaster.templateId>
  export type QueryResult = damlLedger.QueryResult<OnboardEntityMaster, undefined, typeof OnboardEntityMaster.templateId>
}


