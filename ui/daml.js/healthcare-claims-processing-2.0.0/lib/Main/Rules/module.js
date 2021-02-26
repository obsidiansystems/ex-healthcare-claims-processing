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

var Main_RuleTypes = require('../../Main/RuleTypes/module');


exports.CheckAdjudication = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};
exports.meta.types.CheckAdjudication = {
    tag: 'recordOf', 
    items: {
    }
  }
;



exports.CheckPreAuthorization = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};
exports.meta.types.CheckPreAuthorization = {
    tag: 'recordOf', 
    items: {
    }
  }
;



exports.CheckEligibility = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};
exports.meta.types.CheckEligibility = {
    tag: 'recordOf', 
    items: {
    }
  }
;



exports.RulesCheck = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Rules:RulesCheck',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({requestingParty: damlTypes.Party.decoder, ruleParams: Main_RuleTypes.RuleParameters.decoder, }); }),
  encode: function (__typed__) {
  return {
    requestingParty: damlTypes.Party.encode(__typed__.requestingParty),
    ruleParams: Main_RuleTypes.RuleParameters.encode(__typed__.ruleParams),
  };
}
,
  CheckAdjudication: {
    template: function () { return exports.RulesCheck; },
    choiceName: 'CheckAdjudication',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CheckAdjudication.decoder; }),
    argumentEncode: function (__typed__) { return exports.CheckAdjudication.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Optional(damlTypes.Text).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Optional(damlTypes.Text).encode(__typed__); },
  },
  CheckPreAuthorization: {
    template: function () { return exports.RulesCheck; },
    choiceName: 'CheckPreAuthorization',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CheckPreAuthorization.decoder; }),
    argumentEncode: function (__typed__) { return exports.CheckPreAuthorization.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Optional(damlTypes.Text).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Optional(damlTypes.Text).encode(__typed__); },
  },
  CheckEligibility: {
    template: function () { return exports.RulesCheck; },
    choiceName: 'CheckEligibility',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CheckEligibility.decoder; }),
    argumentEncode: function (__typed__) { return exports.CheckEligibility.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Optional(damlTypes.Text).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Optional(damlTypes.Text).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.RulesCheck; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};
exports.meta.templates.RulesCheck = {
  template: exports.RulesCheck,
  choices: {
    CheckAdjudication: {
      argument: exports.meta.types.CheckAdjudication,
      result: damlTypesMeta.Optional(damlTypesMeta.Text),
    },
    CheckPreAuthorization: {
      argument: exports.meta.types.CheckPreAuthorization,
      result: damlTypesMeta.Optional(damlTypesMeta.Text),
    },
    CheckEligibility: {
      argument: exports.meta.types.CheckEligibility,
      result: damlTypesMeta.Optional(damlTypesMeta.Text),
    },
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
  },
};


damlTypes.registerTemplate(exports.RulesCheck);

