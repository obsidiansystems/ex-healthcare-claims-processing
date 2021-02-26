// Generated from Main/RuleTypes.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as Main_NetworkContract from '../../Main/NetworkContract/module';
import * as Main_Policy from '../../Main/Policy/module';
import * as Main_Referral from '../../Main/Referral/module';
import * as Main_Types from '../../Main/Types/module';

export declare type RuleParameters = {
  policy: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  encounterDetails: Main_Types.EncounterDetails;
  networkContract: damlTypes.ContractId<Main_NetworkContract.ProviderNetworkContract>;
  referral: damlTypes.Optional<damlTypes.ContractId<Main_Referral.Referral>>;
};

export declare const RuleParameters:
  damlTypes.Serializable<RuleParameters> & {
  }
;

