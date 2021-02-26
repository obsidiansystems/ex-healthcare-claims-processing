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

var DemoOnboardScenario_Onboard = require('../../DemoOnboardScenario/Onboard/module');
var Main_NetworkContract = require('../../Main/NetworkContract/module');


exports.NetworkContractSet = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({onboard: DemoOnboardScenario_Onboard.OnboardData.decoder, provider1NetworkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).decoder, provider2NetworkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).decoder, }); }),
  encode: function (__typed__) {
  return {
    onboard: DemoOnboardScenario_Onboard.OnboardData.encode(__typed__.onboard),
    provider1NetworkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).encode(__typed__.provider1NetworkContract),
    provider2NetworkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).encode(__typed__.provider2NetworkContract),
  };
}
,
};

