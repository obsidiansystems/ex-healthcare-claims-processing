// Generated from DemoOnboardScenario/InsurancePolicies.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as DemoOnboardScenario_NetworkContracts from '../../DemoOnboardScenario/NetworkContracts/module';
import * as Main_Patient from '../../Main/Patient/module';
import * as Main_Policy from '../../Main/Policy/module';

export declare type InsurancePoliciesDataEntry4 = {
  patientRole: damlTypes.ContractId<Main_Patient.Patient>;
  disclosedPolicyCid1: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  disclosedPolicyCid2: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  disclosedPolicyCid3: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  disclosedPolicyCid4: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  originalPolicyCid: damlTypes.ContractId<Main_Policy.InsurancePolicy>;
};

export declare const InsurancePoliciesDataEntry4:
  damlTypes.Serializable<InsurancePoliciesDataEntry4> & {
  }
;


export declare type InsurancePoliciesDataEntry3 = {
  patientRole: damlTypes.ContractId<Main_Patient.Patient>;
  disclosedPolicyCid1: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  disclosedPolicyCid2: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  disclosedPolicyCid3: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  originalPolicyCid: damlTypes.ContractId<Main_Policy.InsurancePolicy>;
};

export declare const InsurancePoliciesDataEntry3:
  damlTypes.Serializable<InsurancePoliciesDataEntry3> & {
  }
;


export declare type InsurancePoliciesDataEntry1 = {
  patientRole: damlTypes.ContractId<Main_Patient.Patient>;
  disclosedPolicyCid1: damlTypes.ContractId<Main_Policy.DisclosedPolicy>;
  originalPolicyCid: damlTypes.ContractId<Main_Policy.InsurancePolicy>;
};

export declare const InsurancePoliciesDataEntry1:
  damlTypes.Serializable<InsurancePoliciesDataEntry1> & {
  }
;


export declare type InsurancePoliciesData = {
  networkContracts: DemoOnboardScenario_NetworkContracts.NetworkContractSet;
  patient1: InsurancePoliciesDataEntry4;
  patient2: InsurancePoliciesDataEntry3;
  patient3: InsurancePoliciesDataEntry3;
  patient4: InsurancePoliciesDataEntry3;
  patient5: InsurancePoliciesDataEntry3;
  patient6: InsurancePoliciesDataEntry3;
  patient7: InsurancePoliciesDataEntry3;
  patient8: InsurancePoliciesDataEntry1;
  patient9: InsurancePoliciesDataEntry1;
  patient10: InsurancePoliciesDataEntry1;
};

export declare const InsurancePoliciesData:
  damlTypes.Serializable<InsurancePoliciesData> & {
  }
;

