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

var DemoOnboardScenario_NetworkContracts = require('../../DemoOnboardScenario/NetworkContracts/module');
var Main_Patient = require('../../Main/Patient/module');
var Main_Policy = require('../../Main/Policy/module');


exports.InsurancePoliciesDataEntry4 = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({patientRole: damlTypes.ContractId(Main_Patient.Patient).decoder, disclosedPolicyCid1: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, disclosedPolicyCid2: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, disclosedPolicyCid3: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, disclosedPolicyCid4: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, originalPolicyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).decoder, }); }),
  encode: function (__typed__) {
  return {
    patientRole: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patientRole),
    disclosedPolicyCid1: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.disclosedPolicyCid1),
    disclosedPolicyCid2: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.disclosedPolicyCid2),
    disclosedPolicyCid3: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.disclosedPolicyCid3),
    disclosedPolicyCid4: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.disclosedPolicyCid4),
    originalPolicyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).encode(__typed__.originalPolicyCid),
  };
}
,
};
exports.meta.types.InsurancePoliciesDataEntry4 = {
    tag: 'recordOf', 
    items: {
      patientRole: damlTypesMeta.ContractId(Main_Patient.meta.types.Patient),
      disclosedPolicyCid1: damlTypesMeta.ContractId(Main_Policy.meta.types.DisclosedPolicy),
      disclosedPolicyCid2: damlTypesMeta.ContractId(Main_Policy.meta.types.DisclosedPolicy),
      disclosedPolicyCid3: damlTypesMeta.ContractId(Main_Policy.meta.types.DisclosedPolicy),
      disclosedPolicyCid4: damlTypesMeta.ContractId(Main_Policy.meta.types.DisclosedPolicy),
      originalPolicyCid: damlTypesMeta.ContractId(Main_Policy.meta.types.InsurancePolicy),
    }
  }
;



exports.InsurancePoliciesDataEntry3 = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({patientRole: damlTypes.ContractId(Main_Patient.Patient).decoder, disclosedPolicyCid1: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, disclosedPolicyCid2: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, disclosedPolicyCid3: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, originalPolicyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).decoder, }); }),
  encode: function (__typed__) {
  return {
    patientRole: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patientRole),
    disclosedPolicyCid1: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.disclosedPolicyCid1),
    disclosedPolicyCid2: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.disclosedPolicyCid2),
    disclosedPolicyCid3: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.disclosedPolicyCid3),
    originalPolicyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).encode(__typed__.originalPolicyCid),
  };
}
,
};
exports.meta.types.InsurancePoliciesDataEntry3 = {
    tag: 'recordOf', 
    items: {
      patientRole: damlTypesMeta.ContractId(Main_Patient.meta.types.Patient),
      disclosedPolicyCid1: damlTypesMeta.ContractId(Main_Policy.meta.types.DisclosedPolicy),
      disclosedPolicyCid2: damlTypesMeta.ContractId(Main_Policy.meta.types.DisclosedPolicy),
      disclosedPolicyCid3: damlTypesMeta.ContractId(Main_Policy.meta.types.DisclosedPolicy),
      originalPolicyCid: damlTypesMeta.ContractId(Main_Policy.meta.types.InsurancePolicy),
    }
  }
;



exports.InsurancePoliciesDataEntry1 = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({patientRole: damlTypes.ContractId(Main_Patient.Patient).decoder, disclosedPolicyCid1: damlTypes.ContractId(Main_Policy.DisclosedPolicy).decoder, originalPolicyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).decoder, }); }),
  encode: function (__typed__) {
  return {
    patientRole: damlTypes.ContractId(Main_Patient.Patient).encode(__typed__.patientRole),
    disclosedPolicyCid1: damlTypes.ContractId(Main_Policy.DisclosedPolicy).encode(__typed__.disclosedPolicyCid1),
    originalPolicyCid: damlTypes.ContractId(Main_Policy.InsurancePolicy).encode(__typed__.originalPolicyCid),
  };
}
,
};
exports.meta.types.InsurancePoliciesDataEntry1 = {
    tag: 'recordOf', 
    items: {
      patientRole: damlTypesMeta.ContractId(Main_Patient.meta.types.Patient),
      disclosedPolicyCid1: damlTypesMeta.ContractId(Main_Policy.meta.types.DisclosedPolicy),
      originalPolicyCid: damlTypesMeta.ContractId(Main_Policy.meta.types.InsurancePolicy),
    }
  }
;



exports.InsurancePoliciesData = {
  decoder: damlTypes.lazyMemo(function () { return jtv.object({networkContracts: DemoOnboardScenario_NetworkContracts.NetworkContractSet.decoder, patient1: exports.InsurancePoliciesDataEntry4.decoder, patient2: exports.InsurancePoliciesDataEntry3.decoder, patient3: exports.InsurancePoliciesDataEntry3.decoder, patient4: exports.InsurancePoliciesDataEntry3.decoder, patient5: exports.InsurancePoliciesDataEntry3.decoder, patient6: exports.InsurancePoliciesDataEntry3.decoder, patient7: exports.InsurancePoliciesDataEntry3.decoder, patient8: exports.InsurancePoliciesDataEntry1.decoder, patient9: exports.InsurancePoliciesDataEntry1.decoder, patient10: exports.InsurancePoliciesDataEntry1.decoder, }); }),
  encode: function (__typed__) {
  return {
    networkContracts: DemoOnboardScenario_NetworkContracts.NetworkContractSet.encode(__typed__.networkContracts),
    patient1: exports.InsurancePoliciesDataEntry4.encode(__typed__.patient1),
    patient2: exports.InsurancePoliciesDataEntry3.encode(__typed__.patient2),
    patient3: exports.InsurancePoliciesDataEntry3.encode(__typed__.patient3),
    patient4: exports.InsurancePoliciesDataEntry3.encode(__typed__.patient4),
    patient5: exports.InsurancePoliciesDataEntry3.encode(__typed__.patient5),
    patient6: exports.InsurancePoliciesDataEntry3.encode(__typed__.patient6),
    patient7: exports.InsurancePoliciesDataEntry3.encode(__typed__.patient7),
    patient8: exports.InsurancePoliciesDataEntry1.encode(__typed__.patient8),
    patient9: exports.InsurancePoliciesDataEntry1.encode(__typed__.patient9),
    patient10: exports.InsurancePoliciesDataEntry1.encode(__typed__.patient10),
  };
}
,
};
exports.meta.types.InsurancePoliciesData = {
    tag: 'recordOf', 
    items: {
      networkContracts: DemoOnboardScenario_NetworkContracts.meta.types.NetworkContractSet,
      patient1: exports.meta.types.InsurancePoliciesDataEntry4,
      patient2: exports.meta.types.InsurancePoliciesDataEntry3,
      patient3: exports.meta.types.InsurancePoliciesDataEntry3,
      patient4: exports.meta.types.InsurancePoliciesDataEntry3,
      patient5: exports.meta.types.InsurancePoliciesDataEntry3,
      patient6: exports.meta.types.InsurancePoliciesDataEntry3,
      patient7: exports.meta.types.InsurancePoliciesDataEntry3,
      patient8: exports.meta.types.InsurancePoliciesDataEntry1,
      patient9: exports.meta.types.InsurancePoliciesDataEntry1,
      patient10: exports.meta.types.InsurancePoliciesDataEntry1,
    }
  }
;

