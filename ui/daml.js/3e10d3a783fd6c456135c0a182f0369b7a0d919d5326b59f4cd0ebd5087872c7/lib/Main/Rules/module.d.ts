// Generated from Main/Rules.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as damlTypes from '@daml/types';
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import * as damlLedger from '@daml/ledger';

import * as pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 from '@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Main_RuleTypes from '../../Main/RuleTypes/module';

export declare type CheckAdjudication = {
};

export declare const CheckAdjudication:
  damlTypes.Serializable<CheckAdjudication> & {
  }
;


export declare type CheckPreAuthorization = {
};

export declare const CheckPreAuthorization:
  damlTypes.Serializable<CheckPreAuthorization> & {
  }
;


export declare type CheckEligibility = {
};

export declare const CheckEligibility:
  damlTypes.Serializable<CheckEligibility> & {
  }
;


export declare type RulesCheck = {
  requestingParty: damlTypes.Party;
  ruleParams: Main_RuleTypes.RuleParameters;
};

export declare const RulesCheck:
  damlTypes.Template<RulesCheck, undefined, '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Rules:RulesCheck'> & {
  CheckAdjudication: damlTypes.Choice<RulesCheck, CheckAdjudication, damlTypes.Optional<string>, undefined>;
  CheckPreAuthorization: damlTypes.Choice<RulesCheck, CheckPreAuthorization, damlTypes.Optional<string>, undefined>;
  CheckEligibility: damlTypes.Choice<RulesCheck, CheckEligibility, damlTypes.Optional<string>, undefined>;
  Archive: damlTypes.Choice<RulesCheck, pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive, {}, undefined>;
};

export declare namespace RulesCheck {
  export type CreateEvent = damlLedger.CreateEvent<RulesCheck, undefined, typeof RulesCheck.templateId>
  export type ArchiveEvent = damlLedger.ArchiveEvent<RulesCheck, typeof RulesCheck.templateId>
  export type Event = damlLedger.Event<RulesCheck, undefined, typeof RulesCheck.templateId>
  export type QueryResult = damlLedger.QueryResult<RulesCheck, undefined, typeof RulesCheck.templateId>
}


