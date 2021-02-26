"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlTypesMeta = require('@daml/types-meta');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');
exports.meta={types: Object.create(null), templates: Object.create(null)};

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');

var DemoOnboardScenario_Referral = require('../../DemoOnboardScenario/Referral/module');
var Main_Appointment = require('../../Main/Appointment/module');
var Main_Provider = require('../../Main/Provider/module');


exports.PatientAppointmentData4 = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({appointment1: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).decoder, appointment2: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).decoder, appointment3: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).decoder, appointment4: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).decoder, }); }),
  encode: function (__typed__) {
  return {
    appointment1: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).encode(__typed__.appointment1),
    appointment2: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).encode(__typed__.appointment2),
    appointment3: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).encode(__typed__.appointment3),
    appointment4: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).encode(__typed__.appointment4),
  };
}
,
};
exports.meta.types.PatientAppointmentData4 = {
    tag: 'recordOf', 
    items: {
      appointment1: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.meta.types.Tuple2(damlTypesMeta.ContractId(Main_Appointment.meta.types.Appointment), damlTypesMeta.ContractId(Main_Provider.meta.types.NotifyPayer)),
      appointment2: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.meta.types.Tuple2(damlTypesMeta.ContractId(Main_Appointment.meta.types.Appointment), damlTypesMeta.ContractId(Main_Provider.meta.types.NotifyPayer)),
      appointment3: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.meta.types.Tuple2(damlTypesMeta.ContractId(Main_Appointment.meta.types.Appointment), damlTypesMeta.ContractId(Main_Provider.meta.types.NotifyPayer)),
      appointment4: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.meta.types.Tuple2(damlTypesMeta.ContractId(Main_Appointment.meta.types.Appointment), damlTypesMeta.ContractId(Main_Provider.meta.types.NotifyPayer)),
    }
  }
;



exports.PatientAppointmentData3 = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({appointment1: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).decoder, appointment2: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).decoder, appointment3: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).decoder, }); }),
  encode: function (__typed__) {
  return {
    appointment1: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).encode(__typed__.appointment1),
    appointment2: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).encode(__typed__.appointment2),
    appointment3: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).encode(__typed__.appointment3),
  };
}
,
};
exports.meta.types.PatientAppointmentData3 = {
    tag: 'recordOf', 
    items: {
      appointment1: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.meta.types.Tuple2(damlTypesMeta.ContractId(Main_Appointment.meta.types.Appointment), damlTypesMeta.ContractId(Main_Provider.meta.types.NotifyPayer)),
      appointment2: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.meta.types.Tuple2(damlTypesMeta.ContractId(Main_Appointment.meta.types.Appointment), damlTypesMeta.ContractId(Main_Provider.meta.types.NotifyPayer)),
      appointment3: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.meta.types.Tuple2(damlTypesMeta.ContractId(Main_Appointment.meta.types.Appointment), damlTypesMeta.ContractId(Main_Provider.meta.types.NotifyPayer)),
    }
  }
;



exports.AppointmentData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({referral: DemoOnboardScenario_Referral.ReferralData.decoder, patient1: exports.PatientAppointmentData4.decoder, patient2: exports.PatientAppointmentData3.decoder, patient3: exports.PatientAppointmentData3.decoder, patient4: exports.PatientAppointmentData3.decoder, patient5: exports.PatientAppointmentData3.decoder, patient6: exports.PatientAppointmentData3.decoder, patient7: exports.PatientAppointmentData3.decoder, }); }),
  encode: function (__typed__) {
  return {
    referral: DemoOnboardScenario_Referral.ReferralData.encode(__typed__.referral),
    patient1: exports.PatientAppointmentData4.encode(__typed__.patient1),
    patient2: exports.PatientAppointmentData3.encode(__typed__.patient2),
    patient3: exports.PatientAppointmentData3.encode(__typed__.patient3),
    patient4: exports.PatientAppointmentData3.encode(__typed__.patient4),
    patient5: exports.PatientAppointmentData3.encode(__typed__.patient5),
    patient6: exports.PatientAppointmentData3.encode(__typed__.patient6),
    patient7: exports.PatientAppointmentData3.encode(__typed__.patient7),
  };
}
,
};
exports.meta.types.AppointmentData = {
    tag: 'recordOf', 
    items: {
      referral: DemoOnboardScenario_Referral.meta.types.ReferralData,
      patient1: exports.meta.types.PatientAppointmentData4,
      patient2: exports.meta.types.PatientAppointmentData3,
      patient3: exports.meta.types.PatientAppointmentData3,
      patient4: exports.meta.types.PatientAppointmentData3,
      patient5: exports.meta.types.PatientAppointmentData3,
      patient6: exports.meta.types.PatientAppointmentData3,
      patient7: exports.meta.types.PatientAppointmentData3,
    }
  }
;

