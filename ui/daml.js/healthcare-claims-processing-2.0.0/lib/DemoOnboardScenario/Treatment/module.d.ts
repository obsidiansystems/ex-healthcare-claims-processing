// Generated from DemoOnboardScenario/Treatment.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as DemoOnboardScenario_Appointment from '../../DemoOnboardScenario/Appointment/module';
import * as Main_Treatment from '../../Main/Treatment/module';

export declare type TreatmentData = {
  appointment: DemoOnboardScenario_Appointment.AppointmentData;
  paymentReq11: Main_Treatment.TreatmentOutput;
  paymentReq12: Main_Treatment.TreatmentOutput;
  paymentReq21: Main_Treatment.TreatmentOutput;
  paymentReq22: Main_Treatment.TreatmentOutput;
  paymentReq23: Main_Treatment.TreatmentOutput;
  paymentReq32: Main_Treatment.TreatmentOutput;
  paymentReq33: Main_Treatment.TreatmentOutput;
  paymentReq42: Main_Treatment.TreatmentOutput;
  paymentReq52: Main_Treatment.TreatmentOutput;
  paymentReq62: Main_Treatment.TreatmentOutput;
  paymentReq63: Main_Treatment.TreatmentOutput;
  paymentReq71: Main_Treatment.TreatmentOutput;
};

export declare const TreatmentData:
  damlTypes.Serializable<TreatmentData> & {
  }
;

