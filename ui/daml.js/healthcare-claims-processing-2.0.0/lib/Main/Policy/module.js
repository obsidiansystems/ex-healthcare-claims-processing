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

var pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7 = require('@daml.js/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7');
var pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14 = require('@daml.js/52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14');
var pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662 = require('@daml.js/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662');

var Main_Procedure = require('../../Main/Procedure/module');
var Main_Types = require('../../Main/Types/module');


exports.Disclose = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({newReceiver: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    newReceiver: damlTypes.Party.encode(__typed__.newReceiver),
  };
}
,
};
exports.meta.types.Disclose = {
    tag: 'recordOf', 
    items: {
      newReceiver: damlTypesMeta.Party,
    }
  }
;



exports.DisclosedPolicy = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Policy:DisclosedPolicy',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, receivers: damlTypes.List(damlTypes.Party).decoder, patientName: damlTypes.Text.decoder, insuranceID: damlTypes.Text.decoder, policyType: Main_Types.PolicyType.decoder, annualDeductible: damlTypes.Numeric(10).decoder, currentDeductible: damlTypes.Numeric(10).decoder, procedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.ContractId(Main_Procedure.Procedure)).decoder, policyEndDate: damlTypes.Date.decoder, isPolicyInGoodStanding: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer: damlTypes.Party.encode(__typed__.payer),
    patient: damlTypes.Party.encode(__typed__.patient),
    receivers: damlTypes.List(damlTypes.Party).encode(__typed__.receivers),
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
  Archive: {
    template: function () { return exports.DisclosedPolicy; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  Disclose: {
    template: function () { return exports.DisclosedPolicy; },
    choiceName: 'Disclose',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.Disclose.decoder; }),
    argumentEncode: function (__typed__) { return exports.Disclose.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.DisclosedPolicy).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.DisclosedPolicy).encode(__typed__); },
  },
};
exports.meta.templates.DisclosedPolicy = {
  template: exports.DisclosedPolicy,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
    Disclose: {
      argument: exports.meta.types.Disclose,
      result: damlTypesMeta.ContractId(exports.meta.types.DisclosedPolicy),
    },
  },
};


damlTypes.registerTemplate(exports.DisclosedPolicy);



exports.DisclosePolicy = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({receivers: damlTypes.List(damlTypes.Party).decoder, }); }),
  encode: function (__typed__) {
  return {
    receivers: damlTypes.List(damlTypes.Party).encode(__typed__.receivers),
  };
}
,
};
exports.meta.types.DisclosePolicy = {
    tag: 'recordOf', 
    items: {
      receivers: damlTypesMeta.List(damlTypesMeta.Party),
    }
  }
;



exports.UpdatePolicyOnTreatmentCompletion = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({patientResponsibility: damlTypes.Numeric(10).decoder, procedureCode: Main_Types.ProcedureCode.decoder, }); }),
  encode: function (__typed__) {
  return {
    patientResponsibility: damlTypes.Numeric(10).encode(__typed__.patientResponsibility),
    procedureCode: Main_Types.ProcedureCode.encode(__typed__.procedureCode),
  };
}
,
};
exports.meta.types.UpdatePolicyOnTreatmentCompletion = {
    tag: 'recordOf', 
    items: {
      patientResponsibility: damlTypesMeta.Numeric(10),
      procedureCode: Main_Types.meta.types.ProcedureCode,
    }
  }
;



exports.UnlockProcedureOnAppointmentCancellation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({procedureCode: Main_Types.ProcedureCode.decoder, }); }),
  encode: function (__typed__) {
  return {
    procedureCode: Main_Types.ProcedureCode.encode(__typed__.procedureCode),
  };
}
,
};
exports.meta.types.UnlockProcedureOnAppointmentCancellation = {
    tag: 'recordOf', 
    items: {
      procedureCode: Main_Types.meta.types.ProcedureCode,
    }
  }
;



exports.LockProcedureOnAppointmentCreation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({procedureCode: Main_Types.ProcedureCode.decoder, }); }),
  encode: function (__typed__) {
  return {
    procedureCode: Main_Types.ProcedureCode.encode(__typed__.procedureCode),
  };
}
,
};
exports.meta.types.LockProcedureOnAppointmentCreation = {
    tag: 'recordOf', 
    items: {
      procedureCode: Main_Types.meta.types.ProcedureCode,
    }
  }
;



exports.InsurancePolicy = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Policy:InsurancePolicy',
  keyDecoder: damlTypes.lazyMemo(function () { return damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Party, damlTypes.Party, damlTypes.Party).decoder; }); }),
  keyEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple3(damlTypes.Party, damlTypes.Party, damlTypes.Party).encode(__typed__); },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, patientName: damlTypes.Text.decoder, insuranceID: damlTypes.Text.decoder, policyType: Main_Types.PolicyType.decoder, annualDeductible: damlTypes.Numeric(10).decoder, currentDeductible: damlTypes.Numeric(10).decoder, procedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.ContractId(Main_Procedure.Procedure)).decoder, policyEndDate: damlTypes.Date.decoder, isPolicyInGoodStanding: damlTypes.Bool.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer: damlTypes.Party.encode(__typed__.payer),
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
  LockProcedureOnAppointmentCreation: {
    template: function () { return exports.InsurancePolicy; },
    choiceName: 'LockProcedureOnAppointmentCreation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.LockProcedureOnAppointmentCreation.decoder; }),
    argumentEncode: function (__typed__) { return exports.LockProcedureOnAppointmentCreation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.InsurancePolicy).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.InsurancePolicy).encode(__typed__); },
  },
  UnlockProcedureOnAppointmentCancellation: {
    template: function () { return exports.InsurancePolicy; },
    choiceName: 'UnlockProcedureOnAppointmentCancellation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UnlockProcedureOnAppointmentCancellation.decoder; }),
    argumentEncode: function (__typed__) { return exports.UnlockProcedureOnAppointmentCancellation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.InsurancePolicy).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.InsurancePolicy).encode(__typed__); },
  },
  UpdatePolicyOnTreatmentCompletion: {
    template: function () { return exports.InsurancePolicy; },
    choiceName: 'UpdatePolicyOnTreatmentCompletion',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.UpdatePolicyOnTreatmentCompletion.decoder; }),
    argumentEncode: function (__typed__) { return exports.UpdatePolicyOnTreatmentCompletion.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.InsurancePolicy).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.InsurancePolicy).encode(__typed__); },
  },
  DisclosePolicy: {
    template: function () { return exports.InsurancePolicy; },
    choiceName: 'DisclosePolicy',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.DisclosePolicy.decoder; }),
    argumentEncode: function (__typed__) { return exports.DisclosePolicy.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.DisclosedPolicy).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.DisclosedPolicy).encode(__typed__); },
  },
  Archive: {
    template: function () { return exports.InsurancePolicy; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};
exports.meta.templates.InsurancePolicy = {
  template: exports.InsurancePolicy,
  choices: {
    LockProcedureOnAppointmentCreation: {
      argument: exports.meta.types.LockProcedureOnAppointmentCreation,
      result: damlTypesMeta.ContractId(exports.meta.types.InsurancePolicy),
    },
    UnlockProcedureOnAppointmentCancellation: {
      argument: exports.meta.types.UnlockProcedureOnAppointmentCancellation,
      result: damlTypesMeta.ContractId(exports.meta.types.InsurancePolicy),
    },
    UpdatePolicyOnTreatmentCompletion: {
      argument: exports.meta.types.UpdatePolicyOnTreatmentCompletion,
      result: damlTypesMeta.ContractId(exports.meta.types.InsurancePolicy),
    },
    DisclosePolicy: {
      argument: exports.meta.types.DisclosePolicy,
      result: damlTypesMeta.ContractId(exports.meta.types.DisclosedPolicy),
    },
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
  },
};


damlTypes.registerTemplate(exports.InsurancePolicy);

