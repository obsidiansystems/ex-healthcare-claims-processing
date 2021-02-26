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
var Main_Policy = require('../../Main/Policy/module');
var Test_Onboard = require('../../Test/Onboard/module');


exports.PatientScenarioOutput = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({onboardResult: Test_Onboard.OnboardResult.decoder, patient1Role: damlTypes.ContractId(Main_Patient.Patient).decoder, disclosedPolicyCid: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, originalPolicyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).decoder, }); }),
  encode: function (__typed__) {
  return {
    onboardResult: Test_Onboard.OnboardResult.encode(__typed__.onboardResult),
    patient1Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient1Role),
    disclosedPolicyCid: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.disclosedPolicyCid),
    originalPolicyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).encode(__typed__.originalPolicyCid),
  };
}
,
};

