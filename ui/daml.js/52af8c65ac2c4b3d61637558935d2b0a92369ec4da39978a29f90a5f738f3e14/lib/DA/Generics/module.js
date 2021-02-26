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


exports.DecidedStrictness = {
  DecidedLazy: 'DecidedLazy',
  DecidedStrict: 'DecidedStrict',
  DecidedUnpack: 'DecidedUnpack',
  keys: ['DecidedLazy','DecidedStrict','DecidedUnpack',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.DecidedStrictness.DecidedLazy), jtv.constant(exports.DecidedStrictness.DecidedStrict), jtv.constant(exports.DecidedStrictness.DecidedUnpack)); }),
  encode: function (__typed__) { return __typed__; },
};
exports.meta.types.DecidedStrictness = { tag: 'enum',
  items: [
    'DecidedLazy',
    'DecidedStrict',
    'DecidedUnpack',
  ]}
;



exports.SourceStrictness = {
  NoSourceStrictness: 'NoSourceStrictness',
  SourceLazy: 'SourceLazy',
  SourceStrict: 'SourceStrict',
  keys: ['NoSourceStrictness','SourceLazy','SourceStrict',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.SourceStrictness.NoSourceStrictness), jtv.constant(exports.SourceStrictness.SourceLazy), jtv.constant(exports.SourceStrictness.SourceStrict)); }),
  encode: function (__typed__) { return __typed__; },
};
exports.meta.types.SourceStrictness = { tag: 'enum',
  items: [
    'NoSourceStrictness',
    'SourceLazy',
    'SourceStrict',
  ]}
;



exports.SourceUnpackedness = {
  NoSourceUnpackedness: 'NoSourceUnpackedness',
  SourceNoUnpack: 'SourceNoUnpack',
  SourceUnpack: 'SourceUnpack',
  keys: ['NoSourceUnpackedness','SourceNoUnpack','SourceUnpack',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.SourceUnpackedness.NoSourceUnpackedness), jtv.constant(exports.SourceUnpackedness.SourceNoUnpack), jtv.constant(exports.SourceUnpackedness.SourceUnpack)); }),
  encode: function (__typed__) { return __typed__; },
};
exports.meta.types.SourceUnpackedness = { tag: 'enum',
  items: [
    'NoSourceUnpackedness',
    'SourceNoUnpack',
    'SourceUnpack',
  ]}
;



exports.Associativity = {
  LeftAssociative: 'LeftAssociative',
  RightAssociative: 'RightAssociative',
  NotAssociative: 'NotAssociative',
  keys: ['LeftAssociative','RightAssociative','NotAssociative',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.Associativity.LeftAssociative), jtv.constant(exports.Associativity.RightAssociative), jtv.constant(exports.Associativity.NotAssociative)); }),
  encode: function (__typed__) { return __typed__; },
};
exports.meta.types.Associativity = { tag: 'enum',
  items: [
    'LeftAssociative',
    'RightAssociative',
    'NotAssociative',
  ]}
;



exports.Infix0 = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({associativity: exports.Associativity.decoder, fixity: damlTypes.Int.decoder, }); }),
  encode: function (__typed__) {
  return {
    associativity: exports.Associativity.encode(__typed__.associativity),
    fixity: damlTypes.Int.encode(__typed__.fixity),
  };
}
,
};
exports.meta.types.Infix0 = {
    tag: 'recordOf', 
    items: {
      associativity: exports.meta.types.Associativity,
      fixity: damlTypesMeta.Int,
    }
  }
;



exports.Fixity = {
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.object({tag: jtv.constant('Prefix'), value: damlTypes.Unit.decoder, }), jtv.object({tag: jtv.constant('Infix'), value: exports.Infix0.decoder, })); }),
  encode: function (__typed__) {
  switch(__typed__.tag) {
    case 'Prefix': return {tag: __typed__.tag, value: damlTypes.Unit.encode(__typed__.value)};
    case 'Infix': return {tag: __typed__.tag, value: exports.Infix0.encode(__typed__.value)};
    default: throw 'unrecognized type tag: ' + __typed__.tag + ' while serializing a value of type Fixity';
  }
}
,
};
exports.meta.types.Fixity = { tag: 'oneOf', 
  items: {
    Prefix: damlTypesMeta.Unit,
    Infix: exports.meta.types.Infix0,
  }
}
;



exports.K1 = function (i, c, p) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({unK1: c.decoder, }); }),
  encode: function (__typed__) {
  return {
    unK1: c.encode(__typed__.unK1),
  };
}
,
}); };
exports.meta.types.K1 = function (i, c, p) { return (
{
    tag: 'recordOf', 
    items: {
      unK1: c,
    }
  }

); };



exports.Par1 = function (p) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({unPar1: p.decoder, }); }),
  encode: function (__typed__) {
  return {
    unPar1: p.encode(__typed__.unPar1),
  };
}
,
}); };
exports.meta.types.Par1 = function (p) { return (
{
    tag: 'recordOf', 
    items: {
      unPar1: p,
    }
  }

); };



exports.U1 = function (p) { return ({
  decoder: damlTypes.lazyMemo(function () { return jtv.object({}); }),
  encode: function (__typed__) {
  return {
  };
}
,
}); };
exports.meta.types.U1 = function (p) { return (
{
    tag: 'recordOf', 
    items: {
    }
  }

); };

