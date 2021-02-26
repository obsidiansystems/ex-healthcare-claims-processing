// Generated from Test/Treatment.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';
declare var meta: {types: {[prop: string]: Meta}, templates: {[prop: string]: TemplateMeta }};

import * as Main_Policy from '../../Main/Policy/module';
import * as Main_Provider from '../../Main/Provider/module';
import * as Main_Treatment from '../../Main/Treatment/module';

export declare type TreatmentScenarioOutput = {
  provider2Role: damlTypes.ContractId<Main_Provider.Provider>;
  treatmentCid: damlTypes.ContractId<Main_Treatment.Treatment>;
  paymentReq: Main_Treatment.TreatmentOutput;
  originalPolicy: damlTypes.ContractId<Main_Policy.InsurancePolicy>;
};

export declare const TreatmentScenarioOutput:
  damlTypes.Serializable<TreatmentScenarioOutput> & {
  }
;

