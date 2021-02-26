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

var Main_NetworkContract = require('../../Main/NetworkContract/module');
var Main_Policy = require('../../Main/Policy/module');
var Main_Referral = require('../../Main/Referral/module');
var Main_Types = require('../../Main/Types/module');


exports.RuleParameters = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({policy: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, encounterDetails: Main_Types.EncounterDetails.decoder, networkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).decoder, referral: damlTypes.Optional(damlTypes.ContractId(Main_Referral.Referral)).decoder, }); }),
  encode: function (__typed__) {
  return {
    policy: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.policy),
    encounterDetails: Main_Types.EncounterDetails.encode(__typed__.encounterDetails),
    networkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).encode(__typed__.networkContract),
    referral: damlTypes.Optional(damlTypes.ContractId(Main_Referral.Referral)).encode(__typed__.referral),
  };
}
,
};
exports.meta.types.RuleParameters = {
    tag: 'recordOf', 
    items: {
      policy: damlTypesMeta.ContractId(Main_Policy.meta.types.DisclosedPolicy),
      encounterDetails: Main_Types.meta.types.EncounterDetails,
      networkContract: damlTypesMeta.ContractId(Main_NetworkContract.meta.types.ProviderNetworkContract),
      referral: damlTypesMeta.Optional(damlTypesMeta.ContractId(Main_Referral.meta.types.Referral)),
    }
  }
;

