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


exports.All = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({getAll: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    getAll: damlTypes.Bool.encode(__typed__.getAll),
  };
}
,
};
exports.meta.types.All = {
    tag: 'recordOf', 
    items: {
      getAll: damlTypesMeta.Bool,
    }
  }
;



exports.Any = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({getAny: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    getAny: damlTypes.Bool.encode(__typed__.getAny),
  };
}
,
};
exports.meta.types.Any = {
    tag: 'recordOf', 
    items: {
      getAny: damlTypesMeta.Bool,
    }
  }
;



exports.Sum = function (a) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({unpack: a.decoder, }); }),
  encode: function (__typed__) {
  return {
    unpack: a.encode(__typed__.unpack),
  };
}
,
}); };
exports.meta.types.Sum = function (a) { return (
{
    tag: 'recordOf', 
    items: {
      unpack: a,
    }
  }

); };



exports.Product = function (a) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({unpack: a.decoder, }); }),
  encode: function (__typed__) {
  return {
    unpack: a.encode(__typed__.unpack),
  };
}
,
}); };
exports.meta.types.Product = function (a) { return (
{
    tag: 'recordOf', 
    items: {
      unpack: a,
    }
  }

); };

