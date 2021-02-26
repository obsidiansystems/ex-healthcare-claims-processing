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

var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Main_Patient = require('../../Main/Patient/module');
var Main_Payer = require('../../Main/Payer/module');
var Main_Provider = require('../../Main/Provider/module');


exports.InvitePatient = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({patient: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    patient: damlTypes.Party.encode(__typed__.patient),
  };
}
,
};
exports.meta.types.InvitePatient = {
    tag: 'recordOf', 
    items: {
      patient: damlTypesMeta.Party,
    }
  }
;



exports.InviteProvider = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    provider: damlTypes.Party.encode(__typed__.provider),
  };
}
,
};
exports.meta.types.InviteProvider = {
    tag: 'recordOf', 
    items: {
      provider: damlTypesMeta.Party,
    }
  }
;



exports.InvitePayer = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({payer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    payer: damlTypes.Party.encode(__typed__.payer),
  };
}
,
};
exports.meta.types.InvitePayer = {
    tag: 'recordOf', 
    items: {
      payer: damlTypesMeta.Party,
    }
  }
;



exports.OnboardEntityMaster = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Onboard:OnboardEntityMaster',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
  };
}
,
  InvitePayer: {
    template: function () { return exports.OnboardEntityMaster; },
    choiceName: 'InvitePayer',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InvitePayer.decoder; }),
    argumentEncode: function (__typed__) { return exports.InvitePayer.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Main_Payer.PayerInvitation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Main_Payer.PayerInvitation).encode(__typed__); },
  },
  InviteProvider: {
    template: function () { return exports.OnboardEntityMaster; },
    choiceName: 'InviteProvider',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InviteProvider.decoder; }),
    argumentEncode: function (__typed__) { return exports.InviteProvider.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Main_Provider.ProviderInvitation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Main_Provider.ProviderInvitation).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.OnboardEntityMaster; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  InvitePatient: {
    template: function () { return exports.OnboardEntityMaster; },
    choiceName: 'InvitePatient',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.InvitePatient.decoder; }),
    argumentEncode: function (__typed__) { return exports.InvitePatient.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Main_Patient.PatientInvitation).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Main_Patient.PatientInvitation).encode(__typed__); },
  },
};
exports.meta.templates.OnboardEntityMaster = {
  template: exports.OnboardEntityMaster,
  choices: {
    InvitePayer: {
      argument: exports.meta.types.InvitePayer,
      result: damlTypesMeta.ContractId(Main_Payer.meta.types.PayerInvitation),
    },
    InviteProvider: {
      argument: exports.meta.types.InviteProvider,
      result: damlTypesMeta.ContractId(Main_Provider.meta.types.ProviderInvitation),
    },
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
    InvitePatient: {
      argument: exports.meta.types.InvitePatient,
      result: damlTypesMeta.ContractId(Main_Patient.meta.types.PatientInvitation),
    },
  },
};


damlTypes.registerTemplate(exports.OnboardEntityMaster);

