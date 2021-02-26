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
var damlTypesMeta = require('@daml/types-meta');
/* eslint-disable-next-line no-unused-vars */
var damlLedger = require('@daml/ledger');
exports.meta={types: Object.create(null), templates: Object.create(null)};

var pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14 = require('@daml.js/52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Main_Policy = require('../../Main/Policy/module');
var Main_Procedure = require('../../Main/Procedure/module');
var Main_Types = require('../../Main/Types/module');


exports.CreateInsurancePolicy = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({patient: damlTypes.Party.decoder, patientName: damlTypes.Text.decoder, insuranceID: damlTypes.Text.decoder, policyType: Main_Types.PolicyType.decoder, annualDeductible: damlTypes.Numeric(10).decoder, currentDeductible: damlTypes.Numeric(10).decoder, procedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.ContractId(Main_Procedure.Procedure)).decoder, policyEndDate: damlTypes.Date.decoder, isPolicyInGoodStanding: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    patient: damlTypes.Party.encode(__typed__.patient),
    patientName: damlTypes.Text.encode(__typed__.patientName),
    insuranceID: damlTypes.Text.encode(__typed__.insuranceID),
    policyType: Main_Types.PolicyType.encode(__typed__.policyType),
    annualDeductible: damlTypes.Numeric(10).encode(__typed__.annualDeductible),
    currentDeductible: damlTypes.Numeric(10).encode(__typed__.currentDeductible),
    procedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.ContractId(Main_Procedure.Procedure)).encode(__typed__.procedureList),
    policyEndDate: damlTypes.Date.encode(__typed__.policyEndDate),
    isPolicyInGoodStanding: damlTypes.Bool.encode(__typed__.isPolicyInGoodStanding),
  };
}
,
};
exports.meta.types.CreateInsurancePolicy = {
    tag: 'recordOf', 
    items: {
      patient: damlTypesMeta.Party,
      patientName: damlTypesMeta.Text,
      insuranceID: damlTypesMeta.Text,
      policyType: Main_Types.meta.types.PolicyType,
      annualDeductible: damlTypesMeta.Numeric(10),
      currentDeductible: damlTypesMeta.Numeric(10),
      procedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.meta.types.Map(Main_Types.meta.types.ProcedureCode, damlTypesMeta.ContractId(Main_Procedure.meta.types.Procedure)),
      policyEndDate: damlTypesMeta.Date,
      isPolicyInGoodStanding: damlTypesMeta.Bool,
    }
  }
;



exports.Payer = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Payer:Payer',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, payerName: damlTypes.Text.decoder, demographics: Main_Types.PayerDemographics.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer: damlTypes.Party.encode(__typed__.payer),
    payerName: damlTypes.Text.encode(__typed__.payerName),
    demographics: Main_Types.PayerDemographics.encode(__typed__.demographics),
  };
}
,
  Archive: {
    template: function () { return exports.Payer; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  CreateInsurancePolicy: {
    template: function () { return exports.Payer; },
    choiceName: 'CreateInsurancePolicy',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.CreateInsurancePolicy.decoder; }),
    argumentEncode: function (__typed__) { return exports.CreateInsurancePolicy.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(Main_Policy.InsurancePolicy).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(Main_Policy.InsurancePolicy).encode(__typed__); },
  },
};
exports.meta.templates.Payer = {
  template: exports.Payer,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
    CreateInsurancePolicy: {
      argument: exports.meta.types.CreateInsurancePolicy,
      result: damlTypesMeta.ContractId(Main_Policy.meta.types.InsurancePolicy),
    },
  },
};


damlTypes.registerTemplate(exports.Payer);



exports.AcceptPayerInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({payerName: damlTypes.Text.decoder, demographics: Main_Types.PayerDemographics.decoder, }); }),
  encode: function (__typed__) {
  return {
    payerName: damlTypes.Text.encode(__typed__.payerName),
    demographics: Main_Types.PayerDemographics.encode(__typed__.demographics),
  };
}
,
};
exports.meta.types.AcceptPayerInvitation = {
    tag: 'recordOf', 
    items: {
      payerName: damlTypesMeta.Text,
      demographics: Main_Types.meta.types.PayerDemographics,
    }
  }
;



exports.PayerInvitation = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Payer:PayerInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer: damlTypes.Party.encode(__typed__.payer),
  };
}
,
  AcceptPayerInvitation: {
    template: function () { return exports.PayerInvitation; },
    choiceName: 'AcceptPayerInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptPayerInvitation.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptPayerInvitation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Payer).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Payer).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.PayerInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};
exports.meta.templates.PayerInvitation = {
  template: exports.PayerInvitation,
  choices: {
    AcceptPayerInvitation: {
      argument: exports.meta.types.AcceptPayerInvitation,
      result: damlTypesMeta.ContractId(exports.meta.types.Payer),
    },
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
  },
};


damlTypes.registerTemplate(exports.PayerInvitation);

