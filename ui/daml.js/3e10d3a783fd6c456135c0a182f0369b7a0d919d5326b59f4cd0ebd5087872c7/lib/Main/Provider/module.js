"use strict";
/* eslint-disable-next-line no-unused-vars */
function __export(m) {
/* eslint-disable-next-line no-prototype-builtins */
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable-next-line no-unused-vars */
var jtv = require('@mojotech/json-type-validation');
/* eslint-disable-next-line no-unused-vars */
var damlTypes = require('@daml/types');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');
//example tweak

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14 = require('@daml.js/52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Main_Appointment = require('../../Main/Appointment/module');
var Main_NetworkContract = require('../../Main/NetworkContract/module');
var Main_Payer = require('../../Main/Payer/module');
var Main_Policy = require('../../Main/Policy/module');
var Main_Referral = require('../../Main/Referral/module');
var Main_RuleTypes = require('../../Main/RuleTypes/module');
var Main_Types = require('../../Main/Types/module');


exports.FailedSchedulingAppointment = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:FailedSchedulingAppointment',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, appointmentDate: damlTypes.Date.decoder, reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    provider: damlTypes.Party.encode(__typed__.provider),
    patient: damlTypes.Party.encode(__typed__.patient),
    appointmentDate: damlTypes.Date.encode(__typed__.appointmentDate),
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
  Archive: {
    template: function () { return exports.FailedSchedulingAppointment; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.FailedSchedulingAppointment);



exports.ScheduleAppointment = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({appointmentDate: damlTypes.Date.decoder, }); }),
  encode: function (__typed__) {
  return {
    appointmentDate: damlTypes.Date.encode(__typed__.appointmentDate),
  };
}
,
};



exports.UpdateReferralDetails = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({referralCid: damlTypes.ContractId(Main_Referral.Referral).decoder, }); }),
  encode: function (__typed__) {
  return {
    referralCid: damlTypes.ContractId(Main_Referral.Referral).encode(__typed__.referralCid),
  };
}
,
};



exports.ReferralDetails = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:ReferralDetails',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, referringProvider: damlTypes.Party.decoder, renderingProvider: damlTypes.Party.decoder, referralDetails: Main_RuleTypes.RuleParameters.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    referringProvider: damlTypes.Party.encode(__typed__.referringProvider),
    renderingProvider: damlTypes.Party.encode(__typed__.renderingProvider),
    referralDetails: Main_RuleTypes.RuleParameters.encode(__typed__.referralDetails),
  };
}
,
  Archive: {
    template: function () { return exports.ReferralDetails; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  ScheduleAppointment: {
    template: function () { return exports.ReferralDetails; },
    choiceName: 'ScheduleAppointment',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.ScheduleAppointment.decoder; }),
    argumentEncode: function (__typed__) { return exports.ScheduleAppointment.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.ContractId(exports.FailedSchedulingAppointment), pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(exports.NotifyPayer))).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.ContractId(exports.FailedSchedulingAppointment), pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Appointment.Appointment), damlTypes.ContractId(exports.NotifyPayer))).encode(__typed__); },
  },
  UpdateReferralDetails: {
    template: function () { return exports.ReferralDetails; },
    choiceName: 'UpdateReferralDetails',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdateReferralDetails.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdateReferralDetails.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ReferralDetails).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ReferralDetails).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ReferralDetails);



exports.AcknowledgeAndDisclose = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({policyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).decoder, receivers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    policyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).encode(__typed__.policyCid),
    receivers: damlTypes.List(damlTypes.Party).encode(__typed__.receivers),
  };
}
,
};



exports.NotifyPatient = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:NotifyPatient',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer: damlTypes.Party.encode(__typed__.payer),
    patient: damlTypes.Party.encode(__typed__.patient),
    provider: damlTypes.Party.encode(__typed__.provider),
  };
}
,
  Archive: {
    template: function () { return exports.NotifyPatient; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcknowledgeAndDisclose: {
    template: function () { return exports.NotifyPatient; },
    choiceName: 'AcknowledgeAndDisclose',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcknowledgeAndDisclose.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcknowledgeAndDisclose.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.NotifyPatient);



exports.DisclosureRule = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:DisclosureRule',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, owner: damlTypes.Party.decoder, receivers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    owner: damlTypes.Party.encode(__typed__.owner),
    receivers: damlTypes.List(damlTypes.Party).encode(__typed__.receivers),
  };
}
,
  Archive: {
    template: function () { return exports.DisclosureRule; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.DisclosureRule);



exports.AcknowledgeAndLock = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({policyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).decoder, }); }),
  encode: function (__typed__) {
  return {
    policyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).encode(__typed__.policyCid),
  };
}
,
};



exports.NotifyPayer = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:NotifyPayer',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, referralDetails: Main_RuleTypes.RuleParameters.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer: damlTypes.Party.encode(__typed__.payer),
    patient: damlTypes.Party.encode(__typed__.patient),
    provider: damlTypes.Party.encode(__typed__.provider),
    referralDetails: Main_RuleTypes.RuleParameters.encode(__typed__.referralDetails),
  };
}
,
  Archive: {
    template: function () { return exports.NotifyPayer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcknowledgeAndLock: {
    template: function () { return exports.NotifyPayer; },
    choiceName: 'AcknowledgeAndLock',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcknowledgeAndLock.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcknowledgeAndLock.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Policy.InsurancePolicy), damlTypes.ContractId(exports.NotifyPatient)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Policy.InsurancePolicy), damlTypes.ContractId(exports.NotifyPatient)).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.NotifyPayer);



exports.EvaluateReferral = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({networkContractCid: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).decoder, }); }),
  encode: function (__typed__) {
  return {
    networkContractCid: damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).encode(__typed__.networkContractCid),
  };
}
,
};



exports.ReferralRequest = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:ReferralRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, receiver: damlTypes.Party.decoder, policy: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, encounterDetails: Main_Types.EncounterDetails.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    provider: damlTypes.Party.encode(__typed__.provider),
    receiver: damlTypes.Party.encode(__typed__.receiver),
    policy: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.policy),
    encounterDetails: Main_Types.EncounterDetails.encode(__typed__.encounterDetails),
  };
}
,
  Archive: {
    template: function () { return exports.ReferralRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  EvaluateReferral: {
    template: function () { return exports.ReferralRequest; },
    choiceName: 'EvaluateReferral',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.EvaluateReferral.decoder; }),
    argumentEncode: function (__typed__) { return exports.EvaluateReferral.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.ContractId(Main_Referral.FailedReferral), pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Referral.Referral), damlTypes.ContractId(exports.ReferralDetails))).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Either(damlTypes.ContractId(Main_Referral.FailedReferral), pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Referral.Referral), damlTypes.ContractId(exports.ReferralDetails))).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ReferralRequest);



exports.RejectNetworkContractRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({reason: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    reason: damlTypes.Text.encode(__typed__.reason),
  };
}
,
};



exports.AcceptNetworkContractRequest = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({payerCid: damlTypes.ContractId(Main_Payer.Payer).decoder, feeSchedule: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.Numeric(10)).decoder, }); }),
  encode: function (__typed__) {
  return {
    payerCid: damlTypes.ContractId(Main_Payer.Payer).encode(__typed__.payerCid),
    feeSchedule: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.Numeric(10)).encode(__typed__.feeSchedule),
  };
}
,
};



exports.ProviderRequestsPayer = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:ProviderRequestsPayer',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, providerName: damlTypes.Text.decoder, demographics: Main_Types.ProviderDemographics.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer: damlTypes.Party.encode(__typed__.payer),
    provider: damlTypes.Party.encode(__typed__.provider),
    providerName: damlTypes.Text.encode(__typed__.providerName),
    demographics: Main_Types.ProviderDemographics.encode(__typed__.demographics),
  };
}
,
  Archive: {
    template: function () { return exports.ProviderRequestsPayer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptNetworkContractRequest: {
    template: function () { return exports.ProviderRequestsPayer; },
    choiceName: 'AcceptNetworkContractRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptNetworkContractRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptNetworkContractRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Main_NetworkContract.ProviderNetworkContract).encode(__typed__); },
  },
  RejectNetworkContractRequest: {
    template: function () { return exports.ProviderRequestsPayer; },
    choiceName: 'RejectNetworkContractRequest',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RejectNetworkContractRequest.decoder; }),
    argumentEncode: function (__typed__) { return exports.RejectNetworkContractRequest.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Main_NetworkContract.PayerRejectsNetworkContract).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Main_NetworkContract.PayerRejectsNetworkContract).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ProviderRequestsPayer);



exports.CreateReferral = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({receiver: damlTypes.Party.decoder, policy: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, encounterId: damlTypes.Text.decoder, procedureCode: Main_Types.ProcedureCode.decoder, diagnosisCode: Main_Types.DiagnosisCode.decoder, siteServiceCode: damlTypes.Text.decoder, appointmentPriority: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    receiver: damlTypes.Party.encode(__typed__.receiver),
    policy: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.policy),
    encounterId: damlTypes.Text.encode(__typed__.encounterId),
    procedureCode: Main_Types.ProcedureCode.encode(__typed__.procedureCode),
    diagnosisCode: Main_Types.DiagnosisCode.encode(__typed__.diagnosisCode),
    siteServiceCode: damlTypes.Text.encode(__typed__.siteServiceCode),
    appointmentPriority: damlTypes.Text.encode(__typed__.appointmentPriority),
  };
}
,
};



exports.RequestNetworkContract = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({payer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    payer: damlTypes.Party.encode(__typed__.payer),
  };
}
,
};



exports.Provider = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:Provider',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, providerName: damlTypes.Text.decoder, demographics: Main_Types.ProviderDemographics.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    provider: damlTypes.Party.encode(__typed__.provider),
    providerName: damlTypes.Text.encode(__typed__.providerName),
    demographics: Main_Types.ProviderDemographics.encode(__typed__.demographics),
  };
}
,
  Archive: {
    template: function () { return exports.Provider; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RequestNetworkContract: {
    template: function () { return exports.Provider; },
    choiceName: 'RequestNetworkContract',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestNetworkContract.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestNetworkContract.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ProviderRequestsPayer).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ProviderRequestsPayer).encode(__typed__); },
  },
  CreateReferral: {
    template: function () { return exports.Provider; },
    choiceName: 'CreateReferral',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateReferral.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateReferral.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.ReferralRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.ReferralRequest).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.Provider);



exports.AcceptProviderInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({providerName: damlTypes.Text.decoder, demographics: Main_Types.ProviderDemographics.decoder, }); }),
  encode: function (__typed__) {
  return {
    providerName: damlTypes.Text.encode(__typed__.providerName),
    demographics: Main_Types.ProviderDemographics.encode(__typed__.demographics),
  };
}
,
};



exports.ProviderInvitation = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Provider:ProviderInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    provider: damlTypes.Party.encode(__typed__.provider),
  };
}
,
  Archive: {
    template: function () { return exports.ProviderInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptProviderInvitation: {
    template: function () { return exports.ProviderInvitation; },
    choiceName: 'AcceptProviderInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptProviderInvitation.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptProviderInvitation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Provider).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Provider).encode(__typed__); },
  },
};


damlTypes.registerTemplate(exports.ProviderInvitation);

