// Generated from DemoOnboardScenario/Referral.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as DemoOnboardScenario_InsurancePolicies from '../../DemoOnboardScenario/InsurancePolicies/module';
import * as Main_Provider from '../../Main/Provider/module';
import * as Main_RuleTypes from '../../Main/RuleTypes/module';

export declare type PatientReferralData3 = {
  ruleParams1: Main_RuleTypes.RuleParameters;
  referralDetails1: damlTypes.ContractId<Main_Provider.ReferralDetails>;
  ruleParams2: Main_RuleTypes.RuleParameters;
  referralDetails2: damlTypes.ContractId<Main_Provider.ReferralDetails>;
  ruleParams3: Main_RuleTypes.RuleParameters;
  referralDetails3: damlTypes.ContractId<Main_Provider.ReferralDetails>;
};

export declare const PatientReferralData3:
  damlTypes.Serializable<PatientReferralData3> & {
  }
;


export declare type PatientReferralData4 = {
  ruleParams1: Main_RuleTypes.RuleParameters;
  referralDetails1: damlTypes.ContractId<Main_Provider.ReferralDetails>;
  ruleParams2: Main_RuleTypes.RuleParameters;
  referralDetails2: damlTypes.ContractId<Main_Provider.ReferralDetails>;
  ruleParams3: Main_RuleTypes.RuleParameters;
  referralDetails3: damlTypes.ContractId<Main_Provider.ReferralDetails>;
  ruleParams4: Main_RuleTypes.RuleParameters;
  referralDetails4: damlTypes.ContractId<Main_Provider.ReferralDetails>;
};

export declare const PatientReferralData4:
  damlTypes.Serializable<PatientReferralData4> & {
  }
;


export declare type ReferralData = {
  insurancePolicies: DemoOnboardScenario_InsurancePolicies.InsurancePoliciesData;
  patient1: PatientReferralData4;
  patient2: PatientReferralData3;
  patient3: PatientReferralData3;
  patient4: PatientReferralData3;
  patient5: PatientReferralData3;
  patient6: PatientReferralData3;
  patient7: PatientReferralData3;
};

export declare const ReferralData:
  damlTypes.Serializable<ReferralData> & {
  }
;

