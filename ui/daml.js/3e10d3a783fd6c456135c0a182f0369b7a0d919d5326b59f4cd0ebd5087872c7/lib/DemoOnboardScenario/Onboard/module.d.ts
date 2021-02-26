// Generated from DemoOnboardScenario/Onboard.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as Main_Patient from '../../Main/Patient/module';
import * as Main_Payer from '../../Main/Payer/module';
import * as Main_Provider from '../../Main/Provider/module';

export declare type OnboardData = {
  payerRole: damlTypes.ContractId<Main_Payer.Payer>;
  provider1Role: damlTypes.ContractId<Main_Provider.Provider>;
  provider2Role: damlTypes.ContractId<Main_Provider.Provider>;
  patient1Role: damlTypes.ContractId<Main_Patient.Patient>;
  patient2Role: damlTypes.ContractId<Main_Patient.Patient>;
  patient3Role: damlTypes.ContractId<Main_Patient.Patient>;
  patient4Role: damlTypes.ContractId<Main_Patient.Patient>;
  patient5Role: damlTypes.ContractId<Main_Patient.Patient>;
  patient6Role: damlTypes.ContractId<Main_Patient.Patient>;
  patient7Role: damlTypes.ContractId<Main_Patient.Patient>;
  patient8Role: damlTypes.ContractId<Main_Patient.Patient>;
  patient9Role: damlTypes.ContractId<Main_Patient.Patient>;
  patient10Role: damlTypes.ContractId<Main_Patient.Patient>;
};

export declare const OnboardData:
  damlTypes.Serializable<OnboardData> & {
  }
;

