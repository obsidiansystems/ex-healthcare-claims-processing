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

var Main_NetworkContract = require('../../Main/NetworkContract/module');
var Main_Patient = require('../../Main/Patient/module');
var Main_Payer = require('../../Main/Payer/module');
var Main_Provider = require('../../Main/Provider/module');


exports.Parties = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer1: damlTypes.Party.decoder, provider1: damlTypes.Party.decoder, provider2: damlTypes.Party.decoder, patient1: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer1: damlTypes.Party.encode(__typed__.payer1),
    provider1: damlTypes.Party.encode(__typed__.provider1),
    provider2: damlTypes.Party.encode(__typed__.provider2),
    patient1: damlTypes.Party.encode(__typed__.patient1),
  };
}
,
};



exports.OnboardResult = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({payerRole: damlTypes.ContractId(Main_Payer.Payer).decoder, provider1Role: damlTypes.ContractId(Main_Provider.Provider).decoder, provider2Role: damlTypes.ContractId(Main_Provider.Provider).decoder, patient1Role: damlTypes.ContractId(Main_Patient.Patient).decoder, provider1NetworkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).decoder, provider2NetworkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).decoder, }); }),
  encode: function (__typed__) {
  return {
    payerRole: damlTypes.ContractId(Main_Payer.Payer).encode(__typed__.payerRole),
    provider1Role: damlTypes.ContractId(Main_Provider.Provider).encode(__typed__.provider1Role),
    provider2Role: damlTypes.ContractId(Main_Provider.Provider).encode(__typed__.provider2Role),
    patient1Role: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patient1Role),
    provider1NetworkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).encode(__typed__.provider1NetworkContract),
    provider2NetworkContract: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).encode(__typed__.provider2NetworkContract),
  };
}
,
};

