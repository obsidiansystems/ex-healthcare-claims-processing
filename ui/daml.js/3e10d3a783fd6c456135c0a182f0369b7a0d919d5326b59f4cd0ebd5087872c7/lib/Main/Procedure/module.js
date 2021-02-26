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

var Main_Types = require('../../Main/Types/module');


exports.DiscloseProcedure = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newObservers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    newObservers: damlTypes.List(damlTypes.Party).encode(__typed__.newObservers),
  };
}
,
};



exports.UnlockAndIncrement = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Unlock = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Lock = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
};



exports.Procedure = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Procedure:Procedure',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, procedureCode: Main_Types.ProcedureCode.decoder, copay: damlTypes.Numeric(10).decoder, maxProcedures: damlTypes.Int.decoder, scheduledProcedures: damlTypes.Int.decoder, receivedProcedures: damlTypes.Int.decoder, observers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    procedureCode: Main_Types.ProcedureCode.encode(__typed__.procedureCode),
    copay: damlTypes.Numeric(10).encode(__typed__.copay),
    maxProcedures: damlTypes.Int.encode(__typed__.maxProcedures),
    scheduledProcedures: damlTypes.Int.encode(__typed__.scheduledProcedures),
    receivedProcedures: damlTypes.Int.encode(__typed__.receivedProcedures),
    observers: damlTypes.List(damlTypes.Party).encode(__typed__.observers),
  };
}
,
  Archive: {
    template: function () { return exports.Procedure; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Lock: {
    template: function () { return exports.Procedure; },
    choiceName: 'Lock',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Lock.decoder; }),
    argumentEncode: function (__typed__) { return exports.Lock.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Procedure).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Procedure).encode(__typed__); },
  },
  Unlock: {
    template: function () { return exports.Procedure; },
    choiceName: 'Unlock',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Unlock.decoder; }),
    argumentEncode: function (__typed__) { return exports.Unlock.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Procedure).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Procedure).encode(__typed__); },
  },
  UnlockAndIncrement: {
    template: function () { return exports.Procedure; },
    choiceName: 'UnlockAndIncrement',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UnlockAndIncrement.decoder; }),
    argumentEncode: function (__typed__) { return exports.UnlockAndIncrement.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Procedure).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Procedure).encode(__typed__); },
  },
  DiscloseProcedure: {
    template: function () { return exports.Procedure; },
    choiceName: 'DiscloseProcedure',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DiscloseProcedure.decoder; }),
    argumentEncode: function (__typed__) { return exports.DiscloseProcedure.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Procedure).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Procedure).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Procedure);



exports.ProcedureFields = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({copay: damlTypes.Numeric(10).decoder, maxProcedures: damlTypes.Int.decoder, scheduledProcedures: damlTypes.Int.decoder, receivedProcedures: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    copay: damlTypes.Numeric(10).encode(__typed__.copay),
    maxProcedures: damlTypes.Int.encode(__typed__.maxProcedures),
    scheduledProcedures: damlTypes.Int.encode(__typed__.scheduledProcedures),
    receivedProcedures: damlTypes.Int.encode(__typed__.receivedProcedures),
  };
}
,
};

