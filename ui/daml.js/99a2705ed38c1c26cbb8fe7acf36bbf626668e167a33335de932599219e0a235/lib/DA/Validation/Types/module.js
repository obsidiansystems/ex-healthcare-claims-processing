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

var pkge22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c = require('@daml.js/e22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c');


exports.Validation = function (errs, a) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.object({tag: jtv.constant('Errors'), value: pkge22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c.DA.NonEmpty.Types.NonEmpty(errs).decoder, }), jtv.object({tag: jtv.constant('Success'), value: a.decoder, })); }),
  encode: function (__typed__) {
  switch(__typed__.tag) {
    case 'Errors': return {tag: __typed__.tag, value: pkge22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c.DA.NonEmpty.Types.NonEmpty(errs).encode(__typed__.value)};
    case 'Success': return {tag: __typed__.tag, value: a.encode(__typed__.value)};
    default: throw 'unrecognized type tag: ' + __typed__.tag + ' while serializing a value of type Validation';
  }
}
,
}); };
exports.meta.types.Validation = function (errs, a) { return (
{ tag: 'oneOf', 
  items: {
    Errors: pkge22bce619ae24ca3b8e6519281cb5a33b64b3190cc763248b4c3f9ad5087a92c.DA.NonEmpty.Types.meta.types.NonEmpty(errs),
    Success: a,
  }
}

); };

