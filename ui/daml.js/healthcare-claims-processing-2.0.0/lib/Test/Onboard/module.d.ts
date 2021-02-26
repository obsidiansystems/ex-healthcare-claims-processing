// Generated from Test/Onboard.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as Main_NetworkContract from '../../Main/NetworkContract/module';
import * as Main_Patient from '../../Main/Patient/module';
import * as Main_Payer from '../../Main/Payer/module';
import * as Main_Provider from '../../Main/Provider/module';

export declare type Parties = {
  operator: damlTypes.Party;
  payer1: damlTypes.Party;
  provider1: damlTypes.Party;
  provider2: damlTypes.Party;
  patient1: damlTypes.Party;
};

export declare const Parties:
  damlTypes.Serializable<Parties> & {
  }
;


export declare type OnboardResult = {
  payerRole: damlTypes.ContractId<Main_Payer.Payer>;
  provider1Role: damlTypes.ContractId<Main_Provider.Provider>;
  provider2Role: damlTypes.ContractId<Main_Provider.Provider>;
  patient1Role: damlTypes.ContractId<Main_Patient.Patient>;
  provider1NetworkContract: damlTypes.ContractId<Main_NetworkContract.ProviderNetworkContract>;
  provider2NetworkContract: damlTypes.ContractId<Main_NetworkContract.ProviderNetworkContract>;
};

export declare const OnboardResult:
  damlTypes.Serializable<OnboardResult> & {
  }
;

