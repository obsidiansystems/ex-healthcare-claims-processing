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


exports.EncounterStage = {
  Referral: 'Referral',
  Appointment: 'Appointment',
  Treatment: 'Treatment',
  keys: ['Referral','Appointment','Treatment',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.EncounterStage.Referral), jtv.constant(exports.EncounterStage.Appointment), jtv.constant(exports.EncounterStage.Treatment)); }),
  encode: function (__typed__) { return __typed__; },
};

