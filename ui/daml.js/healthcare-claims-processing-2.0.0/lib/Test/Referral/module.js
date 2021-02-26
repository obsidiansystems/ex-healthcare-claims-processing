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

var Main_Policy = require('../../Main/Policy/module');
var Main_Provider = require('../../Main/Provider/module');
var Main_RuleTypes = require('../../Main/RuleTypes/module');


exports.ReferralScenarioOutput = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider2Role: damlTypes.ContractId(Main_Provider.Provider).decoder, referralReq: damlTypes.ContractId(Main_Provider.ReferralRequest).decoder, referralDetails: damlTypes.ContractId(Main_Provider.ReferralDetails).decoder, ruleParameters: Main_RuleTypes.RuleParameters.decoder, originalPolicy: damlTypes.ContractId(Main_Policy.InsurancePolicy).decoder, }); }),
  encode: function (__typed__) {
  return {
    provider2Role: damlTypes.ContractId(Main_Provider.Provider).encode(__typed__.provider2Role),
    referralReq: damlTypes.ContractId(Main_Provider.ReferralRequest).encode(__typed__.referralReq),
    referralDetails: damlTypes.ContractId(Main_Provider.ReferralDetails).encode(__typed__.referralDetails),
    ruleParameters: Main_RuleTypes.RuleParameters.encode(__typed__.ruleParameters),
    originalPolicy: damlTypes.ContractId(Main_Policy.InsurancePolicy).encode(__typed__.originalPolicy),
  };
}
,
};
exports.meta.types.ReferralScenarioOutput = {
    tag: 'recordOf', 
    items: {
      provider2Role: damlTypesMeta.ContractId(Main_Provider.meta.types.Provider),
      referralReq: damlTypesMeta.ContractId(Main_Provider.meta.types.ReferralRequest),
      referralDetails: damlTypesMeta.ContractId(Main_Provider.meta.types.ReferralDetails),
      ruleParameters: Main_RuleTypes.meta.types.RuleParameters,
      originalPolicy: damlTypesMeta.ContractId(Main_Policy.meta.types.InsurancePolicy),
    }
  }
;

