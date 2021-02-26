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

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Main_Policy = require('../../Main/Policy/module');
var Main_Types = require('../../Main/Types/module');


exports.AcceptPatientObligation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PatientPaymentRequest = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:PatientPaymentRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, encounterDetails: Main_Types.EncounterDetails.decoder, paymentId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    provider: damlTypes.Party.encode(__typed__.provider),
    patient: damlTypes.Party.encode(__typed__.patient),
    encounterDetails: Main_Types.EncounterDetails.encode(__typed__.encounterDetails),
    paymentId: damlTypes.Text.encode(__typed__.paymentId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
  Archive: {
    template: function () { return exports.PatientPaymentRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptPatientObligation: {
    template: function () { return exports.PatientPaymentRequest; },
    choiceName: 'AcceptPatientObligation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptPatientObligation.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptPatientObligation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PatientObligation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PatientObligation).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.PatientPaymentRequest);



exports.AcceptClaimRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.ClaimRequest = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:ClaimRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, encounterDetails: Main_Types.EncounterDetails.decoder, claimId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    provider: damlTypes.Party.encode(__typed__.provider),
    payer: damlTypes.Party.encode(__typed__.payer),
    encounterDetails: Main_Types.EncounterDetails.encode(__typed__.encounterDetails),
    claimId: damlTypes.Text.encode(__typed__.claimId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
  AcceptClaimRequest: {
    template: function () { return exports.ClaimRequest; },
    choiceName: 'AcceptClaimRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptClaimRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptClaimRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Claim).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Claim).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.ClaimRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ClaimRequest);



exports.PaymentReceipt = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:PaymentReceipt',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, recipient: damlTypes.Party.decoder, sender: damlTypes.Party.decoder, paymentId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    recipient: damlTypes.Party.encode(__typed__.recipient),
    sender: damlTypes.Party.encode(__typed__.sender),
    paymentId: damlTypes.Text.encode(__typed__.paymentId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
  Archive: {
    template: function () { return exports.PaymentReceipt; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.PaymentReceipt);



exports.PayPatientObligation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.PatientObligation = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:PatientObligation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, encounterDetails: Main_Types.EncounterDetails.decoder, paymentId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    provider: damlTypes.Party.encode(__typed__.provider),
    patient: damlTypes.Party.encode(__typed__.patient),
    encounterDetails: Main_Types.EncounterDetails.encode(__typed__.encounterDetails),
    paymentId: damlTypes.Text.encode(__typed__.paymentId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
  PayPatientObligation: {
    template: function () { return exports.PatientObligation; },
    choiceName: 'PayPatientObligation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.PayPatientObligation.decoder; }),
    argumentEncode: function (__typed__) { return exports.PayPatientObligation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PaymentReceipt).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PaymentReceipt).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PatientObligation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.PatientObligation);



exports.PayClaim = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Claim = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Claim:Claim',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, encounterDetails: Main_Types.EncounterDetails.decoder, claimId: damlTypes.Text.decoder, amount: damlTypes.Numeric(10).decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    provider: damlTypes.Party.encode(__typed__.provider),
    payer: damlTypes.Party.encode(__typed__.payer),
    encounterDetails: Main_Types.EncounterDetails.encode(__typed__.encounterDetails),
    claimId: damlTypes.Text.encode(__typed__.claimId),
    amount: damlTypes.Numeric(10).encode(__typed__.amount),
  };
}
,
  PayClaim: {
    template: function () { return exports.Claim; },
    choiceName: 'PayClaim',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.PayClaim.decoder; }),
    argumentEncode: function (__typed__) { return exports.PayClaim.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.PaymentReceipt), damlTypes.ContractId(Main_Policy.InsurancePolicy)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(exports.PaymentReceipt), damlTypes.ContractId(Main_Policy.InsurancePolicy)).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.Claim; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Claim);

