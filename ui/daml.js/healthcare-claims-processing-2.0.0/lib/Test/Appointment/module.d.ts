// Generated from Test/Appointment.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';

import * as Main_Appointment from '../../Main/Appointment/module';
import * as Main_Policy from '../../Main/Policy/module';
import * as Main_Provider from '../../Main/Provider/module';
import * as Main_RuleTypes from '../../Main/RuleTypes/module';

export declare type AppointmentScenarioOutput = {
  provider2Role: damlTypes.ContractId<Main_Provider.Provider>;
  appointmentCid: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Appointment.Appointment>, damlTypes.ContractId<Main_Provider.NotifyPayer>>;
  appointmentDetails: Main_RuleTypes.RuleParameters;
  originalPolicy: damlTypes.ContractId<Main_Policy.InsurancePolicy>;
  appointmentDate: damlTypes.Date;
};

export declare const AppointmentScenarioOutput:
  damlTypes.Serializable<AppointmentScenarioOutput> & {
  }
;

