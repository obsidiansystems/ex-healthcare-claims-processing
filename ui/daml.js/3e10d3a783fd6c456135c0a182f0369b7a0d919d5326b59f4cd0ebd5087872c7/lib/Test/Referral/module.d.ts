// Generated from Test/Referral.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as Main_Policy from '../../Main/Policy/module';
import * as Main_Provider from '../../Main/Provider/module';
import * as Main_RuleTypes from '../../Main/RuleTypes/module';

export declare type ReferralScenarioOutput = {
  provider2Role: damlTypes.ContractId<Main_Provider.Provider>;
  referralReq: damlTypes.ContractId<Main_Provider.ReferralRequest>;
  referralDetails: damlTypes.ContractId<Main_Provider.ReferralDetails>;
  ruleParameters: Main_RuleTypes.RuleParameters;
  originalPolicy: damlTypes.ContractId<Main_Policy.InsurancePolicy>;
};

export declare const ReferralScenarioOutput:
  damlTypes.Serializable<ReferralScenarioOutput> & {
  }
;

