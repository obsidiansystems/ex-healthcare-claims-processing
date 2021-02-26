// Generated from Main/Appointment.daml
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
import * as Main_RuleTypes from '../../Main/RuleTypes/module';
import * as Main_Treatment from '../../Main/Treatment/module';

export declare type FailedCheckIn = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  patient: damlTypes.Party;
  appointmentDate: damlTypes.Date;
  reason: string;
};

export declare const FailedCheckIn:
  damlTypes.Template<FailedCheckIn, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Appointment:FailedCheckIn'> & {
  Archive: damlTypes.Choice<FailedCheckIn, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace FailedCheckIn {
  export type CreateEvent = damlLedger.CreateEvent<FailedCheckIn, undefined, typeof FailedCheckIn.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<FailedCheckIn, typeof FailedCheckIn.templateId>
  export type Event = damlLedger.Event<FailedCheckIn, undefined, typeof FailedCheckIn.templateId>
  export type QueryResult = damlLedger.QueryResult<FailedCheckIn, undefined, typeof FailedCheckIn.templateId>
}



export declare type CheckInPatient = {
};

export declare const CheckInPatient:
  damlTypes.Serializable<CheckInPatient> & {
  }
;


export declare type Appointment = {
  operator: damlTypes.Party;
  provider: damlTypes.Party;
  patient: damlTypes.Party;
  policy: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  encounterDetails: Main_RuleTypes.RuleParameters;
  appointmentDate: damlTypes.Date;
};

export declare const Appointment:
  damlTypes.Template<Appointment, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Appointment:Appointment'> & {
  Archive: damlTypes.Choice<Appointment, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
  CheckInPatient: damlTypes.Choice<Appointment, CheckInPatient, pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either<damlTypes.ContractId<FailedCheckIn>, damlTypes.ContractId<Main_Treatment.Treatment>>, undefined>;
};

export declare namespace Appointment {
  export type CreateEvent = damlLedger.CreateEvent<Appointment, undefined, typeof Appointment.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<Appointment, typeof Appointment.templateId>
  export type Event = damlLedger.Event<Appointment, undefined, typeof Appointment.templateId>
  export type QueryResult = damlLedger.QueryResult<Appointment, undefined, typeof Appointment.templateId>
}


