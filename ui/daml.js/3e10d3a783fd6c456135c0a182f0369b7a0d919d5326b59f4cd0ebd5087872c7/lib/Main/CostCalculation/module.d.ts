// Generated from Main/CostCalculation.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

export declare type EncounterStage =
  | 'Referral'
  | 'Appointment'
  | 'Treatment'
;

export declare const EncounterStage:
  damlTypes.Serializable<EncounterStage> & {
  }
& { readonly keys: EncounterStage[] } & { readonly [e in EncounterStage]: e }
;

