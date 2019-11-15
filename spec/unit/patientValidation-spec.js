const validation=require('../../validation/patientValidation');

describe('Patient Validation test',()=>{
    it('validate method',(done)=>{
        var method='savePatientModels'
        var result=validation.validate(method);
       // expect(validation.validate(method)).toBe(result);
        done();
    })
      it('validate method',(done)=>{
        var method='updateBabyAppearsModel'
        var result=validation.validate(method);
        done();
    })
    it('validate method',(done)=>{
        var method='updateBabyCVModel'
        var result=validation.validate(method);
        done();
    })
    it('validate method',(done)=>{
        var method='updateBabyCNSModel'
        var result=validation.validate(method);
        done();
    })
    it('validate method',(done)=>{
        var method='updateBabyGITModel'
        var result=validation.validate(method);
       // expect(validation.validate(method)).toBe(result);
        done();
    })
    it('validate method',(done)=>{
        var method='updateBabyAntibioticModel'
        var result=validation.validate(method);
        done();
    })
    it('validate method',(done)=>{
        var method='updateBabyFinalModel'
        var result=validation.validate(method);
        done();
    })
    it('validate method',(done)=>{
        var method='updateBabyInvestigationModel'
        var result=validation.validate(method);
        done();
    })
    it('validate method',(done)=>{
        var method='updateBabyRespModel'
        var result=validation.validate(method);
        done();
    })
})