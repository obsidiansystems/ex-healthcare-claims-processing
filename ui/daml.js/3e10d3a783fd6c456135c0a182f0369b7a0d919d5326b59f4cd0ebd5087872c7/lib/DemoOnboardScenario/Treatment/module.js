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
var damlLedger = require('@daml/ledger');
//example tweak

var DemoOnboardScenario_Appointment = require('../../DemoOnboardScenario/Appointment/module');
var Main_Treatment = require('../../Main/Treatment/module');


exports.TreatmentData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({appointment: DemoOnboardScenario_Appointment.AppointmentData.decoder, paymentReq11: Main_Treatment.TreatmentOutput.decoder, paymentReq12: Main_Treatment.TreatmentOutput.decoder, paymentReq21: Main_Treatment.TreatmentOutput.decoder, paymentReq22: Main_Treatment.TreatmentOutput.decoder, paymentReq23: Main_Treatment.TreatmentOutput.decoder, paymentReq32: Main_Treatment.TreatmentOutput.decoder, paymentReq33: Main_Treatment.TreatmentOutput.decoder, paymentReq42: Main_Treatment.TreatmentOutput.decoder, paymentReq52: Main_Treatment.TreatmentOutput.decoder, paymentReq62: Main_Treatment.TreatmentOutput.decoder, paymentReq63: Main_Treatment.TreatmentOutput.decoder, paymentReq71: Main_Treatment.TreatmentOutput.decoder, }); }),
  encode: function (__typed__) {
  return {
    appointment: DemoOnboardScenario_Appointment.AppointmentData.encode(__typed__.appointment),
    paymentReq11: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq11),
    paymentReq12: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq12),
    paymentReq21: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq21),
    paymentReq22: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq22),
    paymentReq23: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq23),
    paymentReq32: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq32),
    paymentReq33: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq33),
    paymentReq42: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq42),
    paymentReq52: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq52),
    paymentReq62: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq62),
    paymentReq63: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq63),
    paymentReq71: Main_Treatment.TreatmentOutput.encode(__typed__.paymentReq71),
  };
}
,
};

