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


exports.SetupConfig = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({parties: exports.LedgerParties.decoder, }); }),
  encode: function (__typed__) {
  return {
    parties: exports.LedgerParties.encode(__typed__.parties),
  };
}
,
};
exports.meta.types.SetupConfig = {
    tag: 'recordOf', 
    items: {
      parties: exports.meta.types.LedgerParties,
    }
  }
;



exports.LedgerParties = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({provider1: damlTypes.Party.decoder, provider2: damlTypes.Party.decoder, patient1: damlTypes.Party.decoder, operator: damlTypes.Party.decoder, payer1: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    provider1: damlTypes.Party.encode(__typed__.provider1),
    provider2: damlTypes.Party.encode(__typed__.provider2),
    patient1: damlTypes.Party.encode(__typed__.patient1),
    operator: damlTypes.Party.encode(__typed__.operator),
    payer1: damlTypes.Party.encode(__typed__.payer1),
  };
}
,
};
exports.meta.types.LedgerParties = {
    tag: 'recordOf', 
    items: {
      provider1: damlTypesMeta.Party,
      provider2: damlTypesMeta.Party,
      patient1: damlTypesMeta.Party,
      operator: damlTypesMeta.Party,
      payer1: damlTypesMeta.Party,
    }
  }
;

