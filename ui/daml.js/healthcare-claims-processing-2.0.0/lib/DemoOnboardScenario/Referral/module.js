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

var DemoOnboardScenario_InsurancePolicies = require('../../DemoOnboardScenario/InsurancePolicies/module');
var Main_Provider = require('../../Main/Provider/module');
var Main_RuleTypes = require('../../Main/RuleTypes/module');


exports.PatientReferralData3 = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({ruleParams1: Main_RuleTypes.RuleParameters.decoder, referralDetails1: damlTypes.ContractId(Main_Provider.ReferralDetails).decoder, ruleParams2: Main_RuleTypes.RuleParameters.decoder, referralDetails2: damlTypes.ContractId(Main_Provider.ReferralDetails).decoder, ruleParams3: Main_RuleTypes.RuleParameters.decoder, referralDetails3: damlTypes.ContractId(Main_Provider.ReferralDetails).decoder, }); }),
  encode: function (__typed__) {
  return {
    ruleParams1: Main_RuleTypes.RuleParameters.encode(__typed__.ruleParams1),
    referralDetails1: damlTypes.ContractId(Main_Provider.ReferralDetails).encode(__typed__.referralDetails1),
    ruleParams2: Main_RuleTypes.RuleParameters.encode(__typed__.ruleParams2),
    referralDetails2: damlTypes.ContractId(Main_Provider.ReferralDetails).encode(__typed__.referralDetails2),
    ruleParams3: Main_RuleTypes.RuleParameters.encode(__typed__.ruleParams3),
    referralDetails3: damlTypes.ContractId(Main_Provider.ReferralDetails).encode(__typed__.referralDetails3),
  };
}
,
};
exports.meta.types.PatientReferralData3 = {
    tag: 'recordOf', 
    items: {
      ruleParams1: Main_RuleTypes.meta.types.RuleParameters,
      referralDetails1: damlTypesMeta.ContractId(Main_Provider.meta.types.ReferralDetails),
      ruleParams2: Main_RuleTypes.meta.types.RuleParameters,
      referralDetails2: damlTypesMeta.ContractId(Main_Provider.meta.types.ReferralDetails),
      ruleParams3: Main_RuleTypes.meta.types.RuleParameters,
      referralDetails3: damlTypesMeta.ContractId(Main_Provider.meta.types.ReferralDetails),
    }
  }
;



exports.PatientReferralData4 = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({ruleParams1: Main_RuleTypes.RuleParameters.decoder, referralDetails1: damlTypes.ContractId(Main_Provider.ReferralDetails).decoder, ruleParams2: Main_RuleTypes.RuleParameters.decoder, referralDetails2: damlTypes.ContractId(Main_Provider.ReferralDetails).decoder, ruleParams3: Main_RuleTypes.RuleParameters.decoder, referralDetails3: damlTypes.ContractId(Main_Provider.ReferralDetails).decoder, ruleParams4: Main_RuleTypes.RuleParameters.decoder, referralDetails4: damlTypes.ContractId(Main_Provider.ReferralDetails).decoder, }); }),
  encode: function (__typed__) {
  return {
    ruleParams1: Main_RuleTypes.RuleParameters.encode(__typed__.ruleParams1),
    referralDetails1: damlTypes.ContractId(Main_Provider.ReferralDetails).encode(__typed__.referralDetails1),
    ruleParams2: Main_RuleTypes.RuleParameters.encode(__typed__.ruleParams2),
    referralDetails2: damlTypes.ContractId(Main_Provider.ReferralDetails).encode(__typed__.referralDetails2),
    ruleParams3: Main_RuleTypes.RuleParameters.encode(__typed__.ruleParams3),
    referralDetails3: damlTypes.ContractId(Main_Provider.ReferralDetails).encode(__typed__.referralDetails3),
    ruleParams4: Main_RuleTypes.RuleParameters.encode(__typed__.ruleParams4),
    referralDetails4: damlTypes.ContractId(Main_Provider.ReferralDetails).encode(__typed__.referralDetails4),
  };
}
,
};
exports.meta.types.PatientReferralData4 = {
    tag: 'recordOf', 
    items: {
      ruleParams1: Main_RuleTypes.meta.types.RuleParameters,
      referralDetails1: damlTypesMeta.ContractId(Main_Provider.meta.types.ReferralDetails),
      ruleParams2: Main_RuleTypes.meta.types.RuleParameters,
      referralDetails2: damlTypesMeta.ContractId(Main_Provider.meta.types.ReferralDetails),
      ruleParams3: Main_RuleTypes.meta.types.RuleParameters,
      referralDetails3: damlTypesMeta.ContractId(Main_Provider.meta.types.ReferralDetails),
      ruleParams4: Main_RuleTypes.meta.types.RuleParameters,
      referralDetails4: damlTypesMeta.ContractId(Main_Provider.meta.types.ReferralDetails),
    }
  }
;



exports.ReferralData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({insurancePolicies: DemoOnboardScenario_InsurancePolicies.InsurancePoliciesData.decoder, patient1: exports.PatientReferralData4.decoder, patient2: exports.PatientReferralData3.decoder, patient3: exports.PatientReferralData3.decoder, patient4: exports.PatientReferralData3.decoder, patient5: exports.PatientReferralData3.decoder, patient6: exports.PatientReferralData3.decoder, patient7: exports.PatientReferralData3.decoder, }); }),
  encode: function (__typed__) {
  return {
    insurancePolicies: DemoOnboardScenario_InsurancePolicies.InsurancePoliciesData.encode(__typed__.insurancePolicies),
    patient1: exports.PatientReferralData4.encode(__typed__.patient1),
    patient2: exports.PatientReferralData3.encode(__typed__.patient2),
    patient3: exports.PatientReferralData3.encode(__typed__.patient3),
    patient4: exports.PatientReferralData3.encode(__typed__.patient4),
    patient5: exports.PatientReferralData3.encode(__typed__.patient5),
    patient6: exports.PatientReferralData3.encode(__typed__.patient6),
    patient7: exports.PatientReferralData3.encode(__typed__.patient7),
  };
}
,
};
exports.meta.types.ReferralData = {
    tag: 'recordOf', 
    items: {
      insurancePolicies: DemoOnboardScenario_InsurancePolicies.meta.types.InsurancePoliciesData,
      patient1: exports.meta.types.PatientReferralData4,
      patient2: exports.meta.types.PatientReferralData3,
      patient3: exports.meta.types.PatientReferralData3,
      patient4: exports.meta.types.PatientReferralData3,
      patient5: exports.meta.types.PatientReferralData3,
      patient6: exports.meta.types.PatientReferralData3,
      patient7: exports.meta.types.PatientReferralData3,
    }
  }
;

