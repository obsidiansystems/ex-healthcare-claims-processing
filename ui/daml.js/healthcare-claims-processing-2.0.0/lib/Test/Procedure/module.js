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

var pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14 = require('@daml.js/52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Main_Procedure = require('../../Main/Procedure/module');
var Main_Types = require('../../Main/Types/module');


exports.DisclosePM = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newObservers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    newObservers: damlTypes.List(damlTypes.Party).encode(__typed__.newObservers),
  };
}
,
};
exports.meta.types.DisclosePM = {
    tag: 'recordOf', 
    items: {
      newObservers: damlTypesMeta.List(damlTypesMeta.Party),
    }
  }
;



exports.Display2 = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Test.Procedure:Display2',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, procedureMap: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.ContractId(Main_Procedure.Procedure)).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    procedureMap: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.ContractId(Main_Procedure.Procedure)).encode(__typed__.procedureMap),
  };
}
,
  Archive: {
    template: function () { return exports.Display2; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  DisclosePM: {
    template: function () { return exports.Display2; },
    choiceName: 'DisclosePM',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DisclosePM.decoder; }),
    argumentEncode: function (__typed__) { return exports.DisclosePM.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Display2).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Display2).encode(__typed__); },
  },
};
exports.meta.templates.Display2 = {
  template: exports.Display2,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
    DisclosePM: {
      argument: exports.meta.types.DisclosePM,
      result: damlTypesMeta.ContractId(exports.meta.types.Display2),
    },
  },
};


damlTypes.registerTemplate(exports.Display2);



exports.Display = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Test.Procedure:Display',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({owner: damlTypes.Party.decoder, procedureList: damlTypes.List(damlTypes.ContractId(Main_Procedure.Procedure)).decoder, }); }),
  encode: function (__typed__) {
  return {
    owner: damlTypes.Party.encode(__typed__.owner),
    procedureList: damlTypes.List(damlTypes.ContractId(Main_Procedure.Procedure)).encode(__typed__.procedureList),
  };
}
,
  Archive: {
    template: function () { return exports.Display; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};
exports.meta.templates.Display = {
  template: exports.Display,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
  },
};


damlTypes.registerTemplate(exports.Display);

