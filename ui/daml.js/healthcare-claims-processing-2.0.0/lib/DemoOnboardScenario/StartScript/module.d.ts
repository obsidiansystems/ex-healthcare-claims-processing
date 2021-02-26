// Generated from DemoOnboardScenario/StartScript.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

export declare type SetupConfig = {
  parties: LedgerParties;
};

export declare const SetupConfig:
  damlTypes.Serializable<SetupConfig> & {
  }
;


export declare type LedgerParties = {
  provider1: damlTypes.Party;
  provider2: damlTypes.Party;
  patient1: damlTypes.Party;
  operator: damlTypes.Party;
  payer1: damlTypes.Party;
};

export declare const LedgerParties:
  damlTypes.Serializable<LedgerParties> & {
  }
;

