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

var Main_Patient = require('../../Main/Patient/module');
var Main_Payer = require('../../Main/Payer/module');
var Main_Provider = require('../../Main/Provider/module');


exports.OnboardData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({payerRole: damlTypes.ContractId(Main_Payer.Payer).decoder, provider1Role: damlTypes.ContractId(Main_Provider.Provider).decoder, provider2Role: damlTypes.ContractId(Main_Provider.Provider).decoder, patient1Role: damlTypes.ContractId(Main_Patient.Patient).decoder, patient2Role: damlTypes.ContractId(Main_Patient.Patient).decoder, patient3Role: damlTypes.ContractId(Main_Patient.Patient).decoder, patient4Role: damlTypes.ContractId(Main_Patient.Patient).decoder, patient5Role: damlTypes.ContractId(Main_Patient.Patient).decoder, patient6Role: damlTypes.ContractId(Main_Patient.Patient).decoder, patient7Role: damlTypes.ContractId(Main_Patient.Patient).decoder, patient8Role: damlTypes.ContractId(Main_Patient.Patient).decoder, patient9Role: damlTypes.ContractId(Main_Patient.Patient).decoder, patient10Role: damlTypes.ContractId(Main_Patient.Patient).decoder, }); }),
  encode: function (__typed__) {
  return {
    payerRole: damlTypes.ContractId(Main_Payer.Payer).encode(__typed__.payerRole),
    provider1Role: damlTypes.ContractId(Main_Provider.Provider).encode(__typed__.provider1Role),
    provider2Role: damlTypes.ContractId(Main_Provider.Provider).encode(__typed__.provider2Role),
    patient1Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient1Role),
    patient2Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient2Role),
    patient3Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient3Role),
    patient4Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient4Role),
    patient5Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient5Role),
    patient6Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient6Role),
    patient7Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient7Role),
    patient8Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient8Role),
    patient9Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient9Role),
    patient10Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient10Role),
  };
}
,
};

