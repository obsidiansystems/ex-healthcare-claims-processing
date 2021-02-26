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

var Main_Payer = require('../../Main/Payer/module');
var Main_Policy = require('../../Main/Policy/module');
var Main_Procedure = require('../../Main/Procedure/module');
var Main_Types = require('../../Main/Types/module');


exports.NotifyPatientOfPCPAcceptance = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:NotifyPatientOfPCPAcceptance',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, demographics: Main_Types.PatientDemographics.decoder, providerID: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    patient: damlTypes.Party.encode(__typed__.patient),
    provider: damlTypes.Party.encode(__typed__.provider),
    demographics: Main_Types.PatientDemographics.encode(__typed__.demographics),
    providerID: damlTypes.Text.encode(__typed__.providerID),
  };
}
,
  Archive: {
    template: function () { return exports.NotifyPatientOfPCPAcceptance; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};
exports.meta.templates.NotifyPatientOfPCPAcceptance = {
  template: exports.NotifyPatientOfPCPAcceptance,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
  },
};


damlTypes.registerTemplate(exports.NotifyPatientOfPCPAcceptance);



exports.AcceptPatient = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({providerID: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    providerID: damlTypes.Text.encode(__typed__.providerID),
  };
}
,
};
exports.meta.types.AcceptPatient = {
    tag: 'recordOf', 
    items: {
      providerID: damlTypesMeta.Text,
    }
  }
;



exports.PrimaryCareProviderRequest = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:PrimaryCareProviderRequest',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, provider: damlTypes.Party.decoder, demographics: Main_Types.PatientDemographics.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    patient: damlTypes.Party.encode(__typed__.patient),
    provider: damlTypes.Party.encode(__typed__.provider),
    demographics: Main_Types.PatientDemographics.encode(__typed__.demographics),
  };
}
,
  Archive: {
    template: function () { return exports.PrimaryCareProviderRequest; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptPatient: {
    template: function () { return exports.PrimaryCareProviderRequest; },
    choiceName: 'AcceptPatient',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptPatient.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptPatient.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.NotifyPatientOfPCPAcceptance).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.NotifyPatientOfPCPAcceptance).encode(__typed__); },
  },
};
exports.meta.templates.PrimaryCareProviderRequest = {
  template: exports.PrimaryCareProviderRequest,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
    AcceptPatient: {
      argument: exports.meta.types.AcceptPatient,
      result: damlTypesMeta.ContractId(exports.meta.types.NotifyPatientOfPCPAcceptance),
    },
  },
};


damlTypes.registerTemplate(exports.PrimaryCareProviderRequest);



exports.NotifyPatientOfPayerAcceptance = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:NotifyPatientOfPayerAcceptance',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, insuranceID: damlTypes.Text.decoder, policyType: Main_Types.PolicyType.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer: damlTypes.Party.encode(__typed__.payer),
    patient: damlTypes.Party.encode(__typed__.patient),
    insuranceID: damlTypes.Text.encode(__typed__.insuranceID),
    policyType: Main_Types.PolicyType.encode(__typed__.policyType),
  };
}
,
  Archive: {
    template: function () { return exports.NotifyPatientOfPayerAcceptance; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
};
exports.meta.templates.NotifyPatientOfPayerAcceptance = {
  template: exports.NotifyPatientOfPayerAcceptance,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
  },
};


damlTypes.registerTemplate(exports.NotifyPatientOfPayerAcceptance);



exports.AcceptMember = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({payerCid: damlTypes.ContractId(Main_Payer.Payer).decoder, insuranceID: damlTypes.Text.decoder, undisclosedProcedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.ContractId(Main_Procedure.Procedure)).decoder, }); }),
  encode: function (__typed__) {
  return {
    payerCid: damlTypes.ContractId(Main_Payer.Payer).encode(__typed__.payerCid),
    insuranceID: damlTypes.Text.encode(__typed__.insuranceID),
    undisclosedProcedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.Map(Main_Types.ProcedureCode, damlTypes.ContractId(Main_Procedure.Procedure)).encode(__typed__.undisclosedProcedureList),
  };
}
,
};
exports.meta.types.AcceptMember = {
    tag: 'recordOf', 
    items: {
      payerCid: damlTypesMeta.ContractId(Main_Payer.meta.types.Payer),
      insuranceID: damlTypesMeta.Text,
      undisclosedProcedureList: pkg52af8c65ac2c4b3d61637558935d2b0a92369ec4da39978a29f90a5f738f3e14.DA.Next.Map.meta.types.Map(Main_Types.meta.types.ProcedureCode, damlTypesMeta.ContractId(Main_Procedure.meta.types.Procedure)),
    }
  }
;



exports.RequestPayerForPolicy = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:RequestPayerForPolicy',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, payer: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, policyType: Main_Types.PolicyType.decoder, patientName: damlTypes.Text.decoder, demographics: Main_Types.PatientDemographics.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    payer: damlTypes.Party.encode(__typed__.payer),
    patient: damlTypes.Party.encode(__typed__.patient),
    policyType: Main_Types.PolicyType.encode(__typed__.policyType),
    patientName: damlTypes.Text.encode(__typed__.patientName),
    demographics: Main_Types.PatientDemographics.encode(__typed__.demographics),
  };
}
,
  Archive: {
    template: function () { return exports.RequestPayerForPolicy; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptMember: {
    template: function () { return exports.RequestPayerForPolicy; },
    choiceName: 'AcceptMember',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptMember.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptMember.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Policy.InsurancePolicy), damlTypes.ContractId(exports.NotifyPatientOfPayerAcceptance)).decoder; }),
    resultEncode: function (__typed__) { return pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.Tuple2(damlTypes.ContractId(Main_Policy.InsurancePolicy), damlTypes.ContractId(exports.NotifyPatientOfPayerAcceptance)).encode(__typed__); },
  },
};
exports.meta.templates.RequestPayerForPolicy = {
  template: exports.RequestPayerForPolicy,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
    AcceptMember: {
      argument: exports.meta.types.AcceptMember,
      result: pkg40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7.DA.Types.meta.types.Tuple2(damlTypesMeta.ContractId(Main_Policy.meta.types.InsurancePolicy), damlTypesMeta.ContractId(exports.meta.types.NotifyPatientOfPayerAcceptance)),
    },
  },
};


damlTypes.registerTemplate(exports.RequestPayerForPolicy);



exports.SetPrimaryCareProvider = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({notifyCid: damlTypes.ContractId(exports.NotifyPatientOfPCPAcceptance).decoder, }); }),
  encode: function (__typed__) {
  return {
    notifyCid: damlTypes.ContractId(exports.NotifyPatientOfPCPAcceptance).encode(__typed__.notifyCid),
  };
}
,
};
exports.meta.types.SetPrimaryCareProvider = {
    tag: 'recordOf', 
    items: {
      notifyCid: damlTypesMeta.ContractId(exports.meta.types.NotifyPatientOfPCPAcceptance),
    }
  }
;



exports.RequestPrimaryCareProvider = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({primaryCareProvider: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    primaryCareProvider: damlTypes.Party.encode(__typed__.primaryCareProvider),
  };
}
,
};
exports.meta.types.RequestPrimaryCareProvider = {
    tag: 'recordOf', 
    items: {
      primaryCareProvider: damlTypesMeta.Party,
    }
  }
;



exports.SetInsurancePolicy = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({notifyCid: damlTypes.ContractId(exports.NotifyPatientOfPayerAcceptance).decoder, }); }),
  encode: function (__typed__) {
  return {
    notifyCid: damlTypes.ContractId(exports.NotifyPatientOfPayerAcceptance).encode(__typed__.notifyCid),
  };
}
,
};
exports.meta.types.SetInsurancePolicy = {
    tag: 'recordOf', 
    items: {
      notifyCid: damlTypesMeta.ContractId(exports.meta.types.NotifyPatientOfPayerAcceptance),
    }
  }
;



exports.RequestInsurancePolicy = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({payer: damlTypes.Party.decoder, policyType: Main_Types.PolicyType.decoder, }); }),
  encode: function (__typed__) {
  return {
    payer: damlTypes.Party.encode(__typed__.payer),
    policyType: Main_Types.PolicyType.encode(__typed__.policyType),
  };
}
,
};
exports.meta.types.RequestInsurancePolicy = {
    tag: 'recordOf', 
    items: {
      payer: damlTypesMeta.Party,
      policyType: Main_Types.meta.types.PolicyType,
    }
  }
;



exports.Patient = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:Patient',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, patientName: damlTypes.Text.decoder, demographics: Main_Types.PatientDemographics.decoder, insuranceID: damlTypes.Optional(damlTypes.Text).decoder, primaryCareProviderID: damlTypes.Optional(damlTypes.Text).decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    patient: damlTypes.Party.encode(__typed__.patient),
    patientName: damlTypes.Text.encode(__typed__.patientName),
    demographics: Main_Types.PatientDemographics.encode(__typed__.demographics),
    insuranceID: damlTypes.Optional(damlTypes.Text).encode(__typed__.insuranceID),
    primaryCareProviderID: damlTypes.Optional(damlTypes.Text).encode(__typed__.primaryCareProviderID),
  };
}
,
  Archive: {
    template: function () { return exports.Patient; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  RequestInsurancePolicy: {
    template: function () { return exports.Patient; },
    choiceName: 'RequestInsurancePolicy',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestInsurancePolicy.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestInsurancePolicy.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.RequestPayerForPolicy).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.RequestPayerForPolicy).encode(__typed__); },
  },
  SetInsurancePolicy: {
    template: function () { return exports.Patient; },
    choiceName: 'SetInsurancePolicy',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SetInsurancePolicy.decoder; }),
    argumentEncode: function (__typed__) { return exports.SetInsurancePolicy.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Patient).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Patient).encode(__typed__); },
  },
  RequestPrimaryCareProvider: {
    template: function () { return exports.Patient; },
    choiceName: 'RequestPrimaryCareProvider',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.RequestPrimaryCareProvider.decoder; }),
    argumentEncode: function (__typed__) { return exports.RequestPrimaryCareProvider.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.PrimaryCareProviderRequest).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.PrimaryCareProviderRequest).encode(__typed__); },
  },
  SetPrimaryCareProvider: {
    template: function () { return exports.Patient; },
    choiceName: 'SetPrimaryCareProvider',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.SetPrimaryCareProvider.decoder; }),
    argumentEncode: function (__typed__) { return exports.SetPrimaryCareProvider.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Patient).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Patient).encode(__typed__); },
  },
};
exports.meta.templates.Patient = {
  template: exports.Patient,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
    RequestInsurancePolicy: {
      argument: exports.meta.types.RequestInsurancePolicy,
      result: damlTypesMeta.ContractId(exports.meta.types.RequestPayerForPolicy),
    },
    SetInsurancePolicy: {
      argument: exports.meta.types.SetInsurancePolicy,
      result: damlTypesMeta.ContractId(exports.meta.types.Patient),
    },
    RequestPrimaryCareProvider: {
      argument: exports.meta.types.RequestPrimaryCareProvider,
      result: damlTypesMeta.ContractId(exports.meta.types.PrimaryCareProviderRequest),
    },
    SetPrimaryCareProvider: {
      argument: exports.meta.types.SetPrimaryCareProvider,
      result: damlTypesMeta.ContractId(exports.meta.types.Patient),
    },
  },
};


damlTypes.registerTemplate(exports.Patient);



exports.AcceptPatientInvitation = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({patientName: damlTypes.Text.decoder, demographics: Main_Types.PatientDemographics.decoder, }); }),
  encode: function (__typed__) {
  return {
    patientName: damlTypes.Text.encode(__typed__.patientName),
    demographics: Main_Types.PatientDemographics.encode(__typed__.demographics),
  };
}
,
};
exports.meta.types.AcceptPatientInvitation = {
    tag: 'recordOf', 
    items: {
      patientName: damlTypesMeta.Text,
      demographics: Main_Types.meta.types.PatientDemographics,
    }
  }
;



exports.PatientInvitation = {
  templateId: '3e10d3a783fd6c456135c0a182f0369b7a0d919d5326b59f4cd0ebd5087872c7:Main.Patient:PatientInvitation',
  keyDecoder: damlTypes.lazyMemo(function () { return jtv.constant(undefined); }),
  keyEncode: function () { throw 'EncodeError'; },
  decoder: damlTypes.lazyMemo(function () { return jtv.object({operator: damlTypes.Party.decoder, patient: damlTypes.Party.decoder, }); }),
  encode: function (__typed__) {
  return {
    operator: damlTypes.Party.encode(__typed__.operator),
    patient: damlTypes.Party.encode(__typed__.patient),
  };
}
,
  Archive: {
    template: function () { return exports.PatientInvitation; },
    choiceName: 'Archive',
    argumentDecoder: damlTypes.lazyMemo(function () { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.decoder; }),
    argumentEncode: function (__typed__) { return pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.Archive.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.Unit.decoder; }),
    resultEncode: function (__typed__) { return damlTypes.Unit.encode(__typed__); },
  },
  AcceptPatientInvitation: {
    template: function () { return exports.PatientInvitation; },
    choiceName: 'AcceptPatientInvitation',
    argumentDecoder: damlTypes.lazyMemo(function () { return exports.AcceptPatientInvitation.decoder; }),
    argumentEncode: function (__typed__) { return exports.AcceptPatientInvitation.encode(__typed__); },
    resultDecoder: damlTypes.lazyMemo(function () { return damlTypes.ContractId(exports.Patient).decoder; }),
    resultEncode: function (__typed__) { return damlTypes.ContractId(exports.Patient).encode(__typed__); },
  },
};
exports.meta.templates.PatientInvitation = {
  template: exports.PatientInvitation,
  choices: {
    Archive: {
      argument: pkgd14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662.DA.Internal.Template.meta.types.Archive,
      result: damlTypesMeta.Unit,
    },
    AcceptPatientInvitation: {
      argument: exports.meta.types.AcceptPatientInvitation,
      result: damlTypesMeta.ContractId(exports.meta.types.Patient),
    },
  },
};


damlTypes.registerTemplate(exports.PatientInvitation);

