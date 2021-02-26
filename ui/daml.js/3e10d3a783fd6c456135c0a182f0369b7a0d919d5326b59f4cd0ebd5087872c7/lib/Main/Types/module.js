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


exports.EncounterDetails = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({patient: damlTypes.Party.decoder, encounterId: damlTypes.Text.decoder, procedureCode: exports.ProcedureCode.decoder, diagnosisCode: exports.DiagnosisCode.decoder, allowedAmount: damlTypes.Optional(damlTypes.Numeric(10)).decoder, coPay: damlTypes.Optional(damlTypes.Numeric(10)).decoder, patientResponsibility: damlTypes.Optional(damlTypes.Numeric(10)).decoder, siteServiceCode: damlTypes.Text.decoder, appointmentPriority: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    patient: damlTypes.Party.encode(__typed__.patient),
    encounterId: damlTypes.Text.encode(__typed__.encounterId),
    procedureCode: exports.ProcedureCode.encode(__typed__.procedureCode),
    diagnosisCode: exports.DiagnosisCode.encode(__typed__.diagnosisCode),
    allowedAmount: damlTypes.Optional(damlTypes.Numeric(10)).encode(__typed__.allowedAmount),
    coPay: damlTypes.Optional(damlTypes.Numeric(10)).encode(__typed__.coPay),
    patientResponsibility: damlTypes.Optional(damlTypes.Numeric(10)).encode(__typed__.patientResponsibility),
    siteServiceCode: damlTypes.Text.encode(__typed__.siteServiceCode),
    appointmentPriority: damlTypes.Text.encode(__typed__.appointmentPriority),
  };
}
,
};



exports.DiagnosisCode = {
  Fracture_of_scaphoid_bone_right_wrist_S62_001: 'Fracture_of_scaphoid_bone_right_wrist_S62_001',
  Closed_fracture_of_scaphoid_bone_right_wrist_S62_001A: 'Closed_fracture_of_scaphoid_bone_right_wrist_S62_001A',
  Open_fracture_of_scaphoid_bone_right_wrist_S62_001B: 'Open_fracture_of_scaphoid_bone_right_wrist_S62_001B',
  Fracture_of_scaphoid_bone_left_wrist_S62_002: 'Fracture_of_scaphoid_bone_left_wrist_S62_002',
  Closed_fracture_of_scaphoid_bone_left_wrist_S62_002A: 'Closed_fracture_of_scaphoid_bone_left_wrist_S62_002A',
  Open_fracture_of_scaphoid_bone_left_wrist_S62_002B: 'Open_fracture_of_scaphoid_bone_left_wrist_S62_002B',
  Fracture_of_scaphoid_bone_unspecified_S62_009: 'Fracture_of_scaphoid_bone_unspecified_S62_009',
  Closed_fracture_of_scaphoid_bone_unspecified_S62_009A: 'Closed_fracture_of_scaphoid_bone_unspecified_S62_009A',
  Open_fracture_of_scaphoid_bone_unspecified_S62_009B: 'Open_fracture_of_scaphoid_bone_unspecified_S62_009B',
  Pain_in_right_arm_M79_601: 'Pain_in_right_arm_M79_601',
  Pain_in_left_arm_M79_602: 'Pain_in_left_arm_M79_602',
  Pain_in_arm_unspecified_M79_603: 'Pain_in_arm_unspecified_M79_603',
  keys: ['Fracture_of_scaphoid_bone_right_wrist_S62_001','Closed_fracture_of_scaphoid_bone_right_wrist_S62_001A','Open_fracture_of_scaphoid_bone_right_wrist_S62_001B','Fracture_of_scaphoid_bone_left_wrist_S62_002','Closed_fracture_of_scaphoid_bone_left_wrist_S62_002A','Open_fracture_of_scaphoid_bone_left_wrist_S62_002B','Fracture_of_scaphoid_bone_unspecified_S62_009','Closed_fracture_of_scaphoid_bone_unspecified_S62_009A','Open_fracture_of_scaphoid_bone_unspecified_S62_009B','Pain_in_right_arm_M79_601','Pain_in_left_arm_M79_602','Pain_in_arm_unspecified_M79_603',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.DiagnosisCode.Fracture_of_scaphoid_bone_right_wrist_S62_001), jtv.constant(exports.DiagnosisCode.Closed_fracture_of_scaphoid_bone_right_wrist_S62_001A), jtv.constant(exports.DiagnosisCode.Open_fracture_of_scaphoid_bone_right_wrist_S62_001B), jtv.constant(exports.DiagnosisCode.Fracture_of_scaphoid_bone_left_wrist_S62_002), jtv.constant(exports.DiagnosisCode.Closed_fracture_of_scaphoid_bone_left_wrist_S62_002A), jtv.constant(exports.DiagnosisCode.Open_fracture_of_scaphoid_bone_left_wrist_S62_002B), jtv.constant(exports.DiagnosisCode.Fracture_of_scaphoid_bone_unspecified_S62_009), jtv.constant(exports.DiagnosisCode.Closed_fracture_of_scaphoid_bone_unspecified_S62_009A), jtv.constant(exports.DiagnosisCode.Open_fracture_of_scaphoid_bone_unspecified_S62_009B), jtv.constant(exports.DiagnosisCode.Pain_in_right_arm_M79_601), jtv.constant(exports.DiagnosisCode.Pain_in_left_arm_M79_602), jtv.constant(exports.DiagnosisCode.Pain_in_arm_unspecified_M79_603)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.ProcedureCode = {
  Preventative_Care: 'Preventative_Care',
  Physicals: 'Physicals',
  Sick_Visits: 'Sick_Visits',
  X_Ray_Wrist_2_Views: 'X_Ray_Wrist_2_Views',
  X_Ray_Wrist_3_Views: 'X_Ray_Wrist_3_Views',
  keys: ['Preventative_Care','Physicals','Sick_Visits','X_Ray_Wrist_2_Views','X_Ray_Wrist_3_Views',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.ProcedureCode.Preventative_Care), jtv.constant(exports.ProcedureCode.Physicals), jtv.constant(exports.ProcedureCode.Sick_Visits), jtv.constant(exports.ProcedureCode.X_Ray_Wrist_2_Views), jtv.constant(exports.ProcedureCode.X_Ray_Wrist_3_Views)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.PolicyType = {
  Gold: 'Gold',
  Bronze: 'Bronze',
  keys: ['Gold','Bronze',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.PolicyType.Gold), jtv.constant(exports.PolicyType.Bronze)); }),
  encode: function (__typed__) { return __typed__; },
};



exports.PayerDemographics = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({payerHIN: damlTypes.Text.decoder, payerTaxID: damlTypes.Text.decoder, payerBankDFINumber: damlTypes.Text.decoder, payerBankAccountNumber: damlTypes.Text.decoder, payerAddressFirstLine: damlTypes.Text.decoder, payerAddressSecondLine: damlTypes.Text.decoder, payerCity: damlTypes.Text.decoder, payerState: damlTypes.Text.decoder, payerZipCode: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    payerHIN: damlTypes.Text.encode(__typed__.payerHIN),
    payerTaxID: damlTypes.Text.encode(__typed__.payerTaxID),
    payerBankDFINumber: damlTypes.Text.encode(__typed__.payerBankDFINumber),
    payerBankAccountNumber: damlTypes.Text.encode(__typed__.payerBankAccountNumber),
    payerAddressFirstLine: damlTypes.Text.encode(__typed__.payerAddressFirstLine),
    payerAddressSecondLine: damlTypes.Text.encode(__typed__.payerAddressSecondLine),
    payerCity: damlTypes.Text.encode(__typed__.payerCity),
    payerState: damlTypes.Text.encode(__typed__.payerState),
    payerZipCode: damlTypes.Text.encode(__typed__.payerZipCode),
  };
}
,
};



exports.ProviderDemographics = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({providerHIN: damlTypes.Text.decoder, providerTaxID: damlTypes.Text.decoder, providerBankDFINumber: damlTypes.Text.decoder, providerBankAccountNumber: damlTypes.Text.decoder, providerType: exports.ProviderType.decoder, providerAddressFirstLine: damlTypes.Text.decoder, providerAddressSecondLine: damlTypes.Text.decoder, providerCity: damlTypes.Text.decoder, providerState: damlTypes.Text.decoder, providerZipCode: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    providerHIN: damlTypes.Text.encode(__typed__.providerHIN),
    providerTaxID: damlTypes.Text.encode(__typed__.providerTaxID),
    providerBankDFINumber: damlTypes.Text.encode(__typed__.providerBankDFINumber),
    providerBankAccountNumber: damlTypes.Text.encode(__typed__.providerBankAccountNumber),
    providerType: exports.ProviderType.encode(__typed__.providerType),
    providerAddressFirstLine: damlTypes.Text.encode(__typed__.providerAddressFirstLine),
    providerAddressSecondLine: damlTypes.Text.encode(__typed__.providerAddressSecondLine),
    providerCity: damlTypes.Text.encode(__typed__.providerCity),
    providerState: damlTypes.Text.encode(__typed__.providerState),
    providerZipCode: damlTypes.Text.encode(__typed__.providerZipCode),
  };
}
,
};



exports.PatientDemographics = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({patientGender: damlTypes.Text.decoder, patientSocialSecurityNumber: damlTypes.Text.decoder, patientDateOfBirth: damlTypes.Text.decoder, patientAddressLine1: damlTypes.Text.decoder, patientAddressLine2: damlTypes.Text.decoder, patientCity: damlTypes.Text.decoder, patientState: damlTypes.Text.decoder, patientZipCode: damlTypes.Text.decoder, }); }),
  encode: function (__typed__) {
  return {
    patientGender: damlTypes.Text.encode(__typed__.patientGender),
    patientSocialSecurityNumber: damlTypes.Text.encode(__typed__.patientSocialSecurityNumber),
    patientDateOfBirth: damlTypes.Text.encode(__typed__.patientDateOfBirth),
    patientAddressLine1: damlTypes.Text.encode(__typed__.patientAddressLine1),
    patientAddressLine2: damlTypes.Text.encode(__typed__.patientAddressLine2),
    patientCity: damlTypes.Text.encode(__typed__.patientCity),
    patientState: damlTypes.Text.encode(__typed__.patientState),
    patientZipCode: damlTypes.Text.encode(__typed__.patientZipCode),
  };
}
,
};



exports.ProviderType = {
  Primary: 'Primary',
  Specialist: 'Specialist',
  keys: ['Primary','Specialist',],
  decoder: damlTypes.lazyMemo(function () { return jtv.oneOf(jtv.constant(exports.ProviderType.Primary), jtv.constant(exports.ProviderType.Specialist)); }),
  encode: function (__typed__) { return __typed__; },
};

