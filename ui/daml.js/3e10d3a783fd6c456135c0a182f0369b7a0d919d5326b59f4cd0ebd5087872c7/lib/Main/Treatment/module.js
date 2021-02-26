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

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Main_Claim = require('../../Main/Claim/module');
var Main_Policy = require('../../Main/Policy/module');
var Main_Types = require('../../Main/Types/module');


exports.CompleteTreatment = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Treatment = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Treatment:Treatment',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, policy: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, encounterDetails: Main_Types.EncounterDetails.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    provider: damlTypes.Party.encode(__typed__.provider),
    patient: damlTypes.Party.encode(__typed__.patient),
    policy: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.policy),
    encounterDetails: Main_Types.EncounterDetails.encode(__typed__.encounterDetails),
  };
}
,
  Archive: {
    template: function () { return exports.Treatment; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CompleteTreatment: {
    template: function () { return exports.Treatment; },
    choiceName: 'CompleteTreatment',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CompleteTreatment.decoder; }),
    argumentEncode: function (__typed__) { return exports.CompleteTreatment.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return exports.TreatmentOutput.decoder; }),
    resultEncode: function (__typed__) { return exports.TreatmentOutput.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Treatment);



exports.TreatmentOutput = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({claimReq: damlTypes.ContractId(Main_Claim.ClaimRequest).decoder, patientReq: damlTypes.ContractId(Main_Claim.PatientPaymentRequest).decoder, }); }),
  encode: function (__typed__) {
  return {
    claimReq: damlTypes.ContractId(Main_Claim.ClaimRequest).encode(__typed__.claimReq),
    patientReq: damlTypes.ContractId(Main_Claim.PatientPaymentRequest).encode(__typed__.patientReq),
  };
}
,
};

