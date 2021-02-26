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


exports.Formula = function (a) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.object({tag: jtv.constant('Proposition'), value: a.decoder, }), jtv.object({tag: jtv.constant('Negation'), value: exports.Formula(a).decoder, }), jtv.object({tag: jtv.constant('Conjunction'), value: damlTypes.List(exports.Formula(a)).decoder, }), jtv.object({tag: jtv.constant('Disjunction'), value: damlTypes.List(exports.Formula(a)).decoder, })); }),
  encode: function (__typed__) {
  switch(__typed__.tag) {
    case 'Proposition': return {tag: __typed__.tag, value: a.encode(__typed__.value)};
    case 'Negation': return {tag: __typed__.tag, value: exports.Formula(a).encode(__typed__.value)};
    case 'Conjunction': return {tag: __typed__.tag, value: damlTypes.List(exports.Formula(a)).encode(__typed__.value)};
    case 'Disjunction': return {tag: __typed__.tag, value: damlTypes.List(exports.Formula(a)).encode(__typed__.value)};
    default: throw 'unrecognized type tag: ' + __typed__.tag + ' while serializing a value of type Formula';
  }
}
,
}); };
exports.meta.types.Formula = function (a) { return (
{ tag: 'oneOf', 
  items: {
    Proposition: a,
    Negation: exports.meta.types.Formula(a),
    Conjunction: damlTypesMeta.List(exports.meta.types.Formula(a)),
    Disjunction: damlTypesMeta.List(exports.meta.types.Formula(a)),
  }
}

); };

