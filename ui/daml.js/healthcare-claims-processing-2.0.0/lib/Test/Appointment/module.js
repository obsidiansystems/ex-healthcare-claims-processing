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

var Main_Appointment = require('../../Main/Appointment/module');
var Main_Policy = require('../../Main/Policy/module');
var Main_Provider = require('../../Main/Provider/module');
var Main_RuleTypes = require('../../Main/RuleTypes/module');


exports.AppointmentScenarioOutput = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider2Role: damlTypes.ContractId(Main_Provider.Provider).decoder, appointmentCid: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).decoder, appointmentDetails: Main_RuleTypes.RuleParameters.decoder, originalPolicy: damlTypes.ContractId(Main_Policy.InsurancePolicy).decoder, appointmentDate: damlTypes.Date.decoder, }); }),
  encode: function (__typed__) {
  return {
    provider2Role: damlTypes.ContractId(Main_Provider.Provider).encode(__typed__.provider2Role),
    appointmentCid: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(Main_Provider.NotifyPayer)).encode(__typed__.appointmentCid),
    appointmentDetails: Main_RuleTypes.RuleParameters.encode(__typed__.appointmentDetails),
    originalPolicy: damlTypes.ContractId(Main_Policy.InsurancePolicy).encode(__typed__.originalPolicy),
    appointmentDate: damlTypes.Date.encode(__typed__.appointmentDate),
  };
}
,
};
exports.meta.types.AppointmentScenarioOutput = {
    tag: 'recordOf', 
    items: {
      provider2Role: damlTypesMeta.ContractId(Main_Provider.meta.types.Provider),
      appointmentCid: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.meta.types.Tuple2(damlTypesMeta.ContractId(Main_Appointment.meta.types.Appointment), damlTypesMeta.ContractId(Main_Provider.meta.types.NotifyPayer)),
      appointmentDetails: Main_RuleTypes.meta.types.RuleParameters,
      originalPolicy: damlTypesMeta.ContractId(Main_Policy.meta.types.InsurancePolicy),
      appointmentDate: damlTypesMeta.Date,
    }
  }
;

