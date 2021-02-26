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


exports.Set = function (a) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({textMap: damlTypes.TextMap(damlTypes.Unit).decoder, }); }),
  encode: function (__typed__) {
  return {
    textMap: damlTypes.TextMap(damlTypes.Unit).encode(__typed__.textMap),
  };
}
,
}); };
exports.meta.types.Set = function (a) { return (
{
    tag: 'recordOf', 
    items: {
      textMap: damlTypesMeta.TextMap(damlTypesMeta.Unit),
    }
  }

); };

