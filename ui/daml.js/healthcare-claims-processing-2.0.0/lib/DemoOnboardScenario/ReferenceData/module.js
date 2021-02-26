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


exports.Parties = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer1: damlTypes.Party.decoder, provider1: damlTypes.Party.decoder, provider2: damlTypes.Party.decoder, patient1: damlTypes.Party.decoder, patient2: damlTypes.Party.decoder, patient3: damlTypes.Party.decoder, patient4: damlTypes.Party.decoder, patient5: damlTypes.Party.decoder, patient6: damlTypes.Party.decoder, patient7: damlTypes.Party.decoder, patient8: damlTypes.Party.decoder, patient9: damlTypes.Party.decoder, patient10: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer1: damlTypes.Party.encode(__typed__.payer1),
    provider1: damlTypes.Party.encode(__typed__.provider1),
    provider2: damlTypes.Party.encode(__typed__.provider2),
    patient1: damlTypes.Party.encode(__typed__.patient1),
    patient2: damlTypes.Party.encode(__typed__.patient2),
    patient3: damlTypes.Party.encode(__typed__.patient3),
    patient4: damlTypes.Party.encode(__typed__.patient4),
    patient5: damlTypes.Party.encode(__typed__.patient5),
    patient6: damlTypes.Party.encode(__typed__.patient6),
    patient7: damlTypes.Party.encode(__typed__.patient7),
    patient8: damlTypes.Party.encode(__typed__.patient8),
    patient9: damlTypes.Party.encode(__typed__.patient9),
    patient10: damlTypes.Party.encode(__typed__.patient10),
  };
}
,
};
exports.meta.types.Parties = {
    tag: 'recordOf', 
    items: {
      operator: damlTypesMeta.Party,
      payer1: damlTypesMeta.Party,
      provider1: damlTypesMeta.Party,
      provider2: damlTypesMeta.Party,
      patient1: damlTypesMeta.Party,
      patient2: damlTypesMeta.Party,
      patient3: damlTypesMeta.Party,
      patient4: damlTypesMeta.Party,
      patient5: damlTypesMeta.Party,
      patient6: damlTypesMeta.Party,
      patient7: damlTypesMeta.Party,
      patient8: damlTypesMeta.Party,
      patient9: damlTypesMeta.Party,
      patient10: damlTypesMeta.Party,
    }
  }
;

