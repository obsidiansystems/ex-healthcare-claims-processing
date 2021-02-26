// Generated from DemoOnboardScenario/Appointment.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 from '@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';

import * as DemoOnboardScenario_Referral from '../../DemoOnboardScenario/Referral/module';
import * as Main_Appointment from '../../Main/Appointment/module';
import * as Main_Provider from '../../Main/Provider/module';

export declare type PatientAppointmentData4 = {
  appointment1: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Appointment.Appointment>, damlTypes.ContractId<Main_Provider.NotifyPayer>>;
  appointment2: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Appointment.Appointment>, damlTypes.ContractId<Main_Provider.NotifyPayer>>;
  appointment3: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Appointment.Appointment>, damlTypes.ContractId<Main_Provider.NotifyPayer>>;
  appointment4: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Appointment.Appointment>, damlTypes.ContractId<Main_Provider.NotifyPayer>>;
};

export declare const PatientAppointmentData4:
  damlTypes.Serializable<PatientAppointmentData4> & {
  }
;


export declare type PatientAppointmentData3 = {
  appointment1: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Appointment.Appointment>, damlTypes.ContractId<Main_Provider.NotifyPayer>>;
  appointment2: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Appointment.Appointment>, damlTypes.ContractId<Main_Provider.NotifyPayer>>;
  appointment3: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2<damlTypes.ContractId<Main_Appointment.Appointment>, damlTypes.ContractId<Main_Provider.NotifyPayer>>;
};

export declare const PatientAppointmentData3:
  damlTypes.Serializable<PatientAppointmentData3> & {
  }
;


export declare type AppointmentData = {
  referral: DemoOnboardScenario_Referral.ReferralData;
  patient1: PatientAppointmentData4;
  patient2: PatientAppointmentData3;
  patient3: PatientAppointmentData3;
  patient4: PatientAppointmentData3;
  patient5: PatientAppointmentData3;
  patient6: PatientAppointmentData3;
  patient7: PatientAppointmentData3;
};

export declare const AppointmentData:
  damlTypes.Serializable<AppointmentData> & {
  }
;

