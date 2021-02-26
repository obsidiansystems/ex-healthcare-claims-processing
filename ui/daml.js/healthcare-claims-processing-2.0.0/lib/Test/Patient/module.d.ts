// Generated from Test/Patient.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as Main_Patient from '../../Main/Patient/module';
import * as Main_Policy from '../../Main/Policy/module';
import * as Test_Onboard from '../../Test/Onboard/module';

export declare type PatientScenarioOutput = {
  onboardResult: Test_Onboard.OnboardResult;
  patient1Role: damlTypes.ContractId<Main_Patient.Patient>;
  disclosedPolicyCid: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  originalPolicyCid: damlTypes.ContractId<Main_Policy.InsurancePolicy>;
};

export declare const PatientScenarioOutput:
  damlTypes.Serializable<PatientScenarioOutput> & {
  }
;

