// Generated from DemoOnboardScenario/NetworkContracts.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as DemoOnboardScenario_Onboard from '../../DemoOnboardScenario/Onboard/module';
import * as Main_NetworkContract from '../../Main/NetworkContract/module';

export declare type NetworkContractSet = {
  onboard: DemoOnboardScenario_Onboard.OnboardData;
  provider1NetworkContract: damlTypes.ContractId<Main_NetworkContract.ProviderNetworkContract>;
  provider2NetworkContract: damlTypes.ContractId<Main_NetworkContract.ProviderNetworkContract>;
};

export declare const NetworkContractSet:
  damlTypes.Serializable<NetworkContractSet> & {
  }
;

