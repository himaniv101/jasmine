const pReadingModels = require('../../sequelize')
const patientController = require('../../controllers/patientController')
const { sequelize } = require('../../sequelize')

describe('hospitalBranchController', () => {

    it("updateBabyProfileByStudyId test", (done) => {
        var spy = spyOn(pReadingModels.general_model, 'findAll')
        var spy2  = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve([{
            record_type:"test",
            save: ()=>{
                return Promise.resolve("test")
            }
        }])
        var result2 = Promise.resolve("test")

        spy.andReturn(result)
        spy2.andReturn(result2)
        patientController.updateBabyProfileByStudyId(req, res, {})
        spy.plan().then((data) => {
            data.save().then((dt)=>{
                expect(dt).toBe("test")
                done()
            })
        })
        spy2.plan().then((data) => {
            expect(data).toBe("test")
            done()
            
        })

    });

    it("updateMotherProfileByStudyId test", (done) => {
        var spy = spyOn(pReadingModels.maternal_model, 'findAll')
        var spy2  = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve([{
            record_type:"test",
            save: ()=>{
                return Promise.resolve("test")
            }
        }])
        var result2 = Promise.resolve("test")

        spy.andReturn(result)
        spy2.andReturn(result2)
        patientController.updateMotherProfileByStudyId(req, res, {})
        spy.plan().then((data) => {
            data.save().then((dt)=>{
                expect(dt).toBe("test")
                done()
            })
        })
        spy2.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it("savePatientModels test", (done) => {
        var spy = spyOn(pReadingModels.patient_model, 'findOne')
        var spy2  = spyOn(pReadingModels.baby_investigation_model, 'create')
        var req = {
            "body": {
                "name": "test",
                "baby_appears":{
                    study_id:1
                },
                "baby_resp":{
                    "baby_respiratory_support":'{"test":"test"}'
                }
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162,
                sUserId:123
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve(Promise.resolve("test"))
        var result2 = Promise.resolve({
            "updated_by":555,
        })

        spy.andReturn(result2)
        spy2.andReturn(result)
        patientController.savePatientModels(req, res, {})
        spy2.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        spy.plan().then((data) => {
            expect(data.updated_by).toBe(555)
            done()
        })
    });

    it("getBabyAppearsModel test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        patientController.getBabyAppearsModel(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it("getBabyRespModel test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        patientController.getBabyRespModel(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it("getBabyCVModel test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        patientController.getBabyCVModel(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it("getBabyCNSModel test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        patientController.getBabyCNSModel(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it("getBabyGITModel test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        patientController.getBabyGITModel(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it("getBabyInvestigationModel test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        patientController.getBabyInvestigationModel(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it("getBabyAntibioticModel test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        patientController.getBabyAntibioticModel(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it("getBabyFinalModel test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        patientController.getBabyFinalModel(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    });

    it("getReadingIdByStudyId test", (done) => {
        var spy = spyOn(pReadingModels.baby_appear_model, 'findAll')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        var spy2 = spyOn(res,'json')
        
        var result = Promise.resolve([])

        spy.andReturn(result)
        patientController.getReadingIdByStudyId(req, res, {})
        spy.plan().then((data) => {
            expect(spy2.wasCalled).toBe(true)
            done()
        })
        spy.reset()
        spy2.reset()
        result = Promise.resolve([{
            reading:123
        }])
        spy.andReturn(result)
        patientController.getReadingIdByStudyId(req, res, {})
        spy.plan().then((data) => {
            expect(spy2.wasCalled).toBe(true)
            done()
        })
    });

    it("searchReadingIdByStudyIdAndMrn test", (done) => {
        var spy = spyOn(pReadingModels.basic_model, 'findAll')
        var spy2 = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123
        }])

        spy.andReturn(result)
        spy2.andReturn(Promise.resolve([1,2,3]))

        patientController.searchReadingIdByStudyIdAndMrn(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            done()
        })
        
        
    });

    it("getPatientModels test", (done) => {
        var spy = spyOn(pReadingModels.baby_appear_model, 'findAll')
        var spy2 = spyOn(pReadingModels.baby_resp_model, 'findAll')
        var spy3 = spyOn(pReadingModels.baby_cv_model, 'findAll')
        var spy4 = spyOn(pReadingModels.baby_cns_model, 'findAll')
        var spy5 = spyOn(pReadingModels.baby_git_model, 'findAll')
        var spy6 = spyOn(pReadingModels.baby_investigation_model, 'findAll')
        var spy7 = spyOn(pReadingModels.baby_antibiotic_model, 'findAll')
        var spy8 = spyOn(pReadingModels.baby_final_model, 'findAll')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162,
                studyId:123
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123
        }])

        spy.andReturn(result)
        spy2.andReturn(result)
        spy3.andReturn(result)
        spy4.andReturn(result)
        spy5.andReturn(result)
        spy6.andReturn(result)
        spy7.andReturn(result)
        spy8.andReturn(result)

        patientController.getPatientModels(req, res, {})
        expect(spy.wasCalled).toBe(true)
        expect(spy2.wasCalled).toBe(true)
        expect(spy3.wasCalled).toBe(true)
        expect(spy4.wasCalled).toBe(true)
        expect(spy5.wasCalled).toBe(true)
        expect(spy6.wasCalled).toBe(true)
        expect(spy7.wasCalled).toBe(true)
        expect(spy8.wasCalled).toBe(true)
        done()
    });

    it("updateBabyAppearsModel test", (done) => {
        var spy = spyOn(pReadingModels.baby_appear_model, 'findAll')
        var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }])

        var result2 = Promise.resolve({
            updated_by:123,
            save:()=>{
                return Promise.resolve("test")
            }
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        patientController.updateBabyAppearsModel(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            data[0].save().then((dt)=>{
                expect(dt).toBe("test")
            })
            done()
        })
        
        
    });

    it("updateBabyRespModel test", (done) => {
        var spy = spyOn(pReadingModels.baby_resp_model, 'findAll')
        var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                baby_respiratory_support:'{"test":"test"}',
                name: "test",
                groaning:"as",
                save:()=>{
                    return Promise.resolve("test")
                }
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            groaning:"as",
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }])

        var result2 = Promise.resolve({
            updated_by:123,
            save:()=>{
                return Promise.resolve("test")
            }
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        patientController.updateBabyRespModel(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            data[0].save().then((dt)=>{
                expect(dt).toBe("test")
            })
            done()
        })
    });

    it("updateBabyCVModel test", (done) => {
        var spy = spyOn(pReadingModels.baby_cv_model, 'findAll')
        var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }])

        var result2 = Promise.resolve({
            updated_by:123,
            save:()=>{
                return Promise.resolve("test")
            }
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        patientController.updateBabyCVModel(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            done()
        })
    });

    it("updateBabyCNSModel test", (done) => {
        var spy = spyOn(pReadingModels.baby_cns_model, 'findAll')
        var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }])

        var result2 = Promise.resolve({
            updated_by:123,
            save:()=>{
                return Promise.resolve("test")
            }
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        patientController.updateBabyCNSModel(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            done()
        })
    });

    it("updateBabyGITModel test", (done) => {
        var spy = spyOn(pReadingModels.baby_git_model, 'findAll')
        var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }])

        var result2 = Promise.resolve({
            updated_by:123,
            save:()=>{
                return Promise.resolve("test")
            }
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        patientController.updateBabyGITModel(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            done()
        })
    });

    it("updateBabyInvestigationModel test", (done) => {
        var spy = spyOn(pReadingModels.baby_investigation_model, 'findAll')
        var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }])

        var result2 = Promise.resolve({
            updated_by:123,
            save:()=>{
                return Promise.resolve("test")
            }
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        patientController.updateBabyInvestigationModel(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            done()
        })
    });

    it("updateBabyAntibioticModel test", (done) => {
        var spy = spyOn(pReadingModels.baby_antibiotic_model, 'findAll')
        var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }])

        var result2 = Promise.resolve({
            updated_by:123,
            save:()=>{
                return Promise.resolve("test")
            }
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        patientController.updateBabyAntibioticModel(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            done()
        })
    });

    it("updateBabyFinalModel test", (done) => {
        var spy = spyOn(pReadingModels.baby_final_model, 'findAll')
        var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }])

        var result2 = Promise.resolve({
            updated_by:123,
            save:()=>{
                return Promise.resolve("test")
            }
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        patientController.updateBabyFinalModel(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            done()
        })
    });

    it("generateReport test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([{
            time_of_reading_hours:null,
            time_of_reading_minute:null,
            reading_time:"test",
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }])

        spy.andReturn(result)

        patientController.generateReport(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].studyId).toBe(123)
            done()
        })
    });

    it("saveBabyMedicalRecord test", (done) => {
        var spy = spyOn(pReadingModels.basic_model, 'findAll')
        var spy2 = spyOn(pReadingModels.basic_model, 'create')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        
        var result = Promise.resolve([])
        var result2 = Promise.resolve(null)

        spy.andReturn(result)
        spy2.andReturn(result2)

        patientController.saveBabyMedicalRecord(req, res, {})
        spy.plan().then((data) => {
            expect(spy2.wasCalled).toBe(true)
            done()
        })
        done()
    });

    it("getBabyMedicalRecord test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162,
                start:0,
                end:1
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var resSpy = spyOn(res,'json')
        
        var result = [{
            time_of_reading_hours:null,
            time_of_reading_minute:null,
            reading_time:"test",
            studyId:123,
            user_type_id:4,
            updated_by:"test",
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve("test")
            }
        }]

        spy.andReturn(result)

        patientController.getBabyMedicalRecord(req, res, {})
        expect(spy.wasCalled).toBe(true)
        done()
    });

    it("updateBabyMedicalRecord test", (done) => {
        var spy = spyOn(pReadingModels.basic_model, 'findOne')
        // var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test",
                babyName:"test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162,
                start:0,
                end:1
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }

        var resSpy = spyOn(res,'json')
        
        var result = Promise.resolve({
            time_of_reading_hours:null,
            time_of_reading_minute:null,
            reading_time:"test",
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            save:()=>{
                return Promise.resolve({
                    baby_name:"test",
                    active_flag:1
                })
            }
        })

        spy.andReturn(result)
        resSpy.andReturn({})
        
        patientController.updateBabyMedicalRecord(req, res, {})
        
        spy.plan().then((data) => {
            expect(resSpy.wasCalled).toBe(true)
            done()
        })
        done()
    });

    it("babyMedicalRecordCount test", (done) => {
        var spy = spyOn(sequelize, 'query')
        // var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { }
        }
        var resSpy = spyOn(res,'json')
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            total:5,
            save:()=>{
                return Promise.resolve("test")
            }
        }])
        spy.andReturn(result)
        // resSpy.andReturn({})
        patientController.babyMedicalRecordCount(req, res, {})
        expect(spy.wasCalled).toBe(true)
        done()
    });

    it("scoreGeneratedReport test", (done) => {
        var spy = spyOn(sequelize, 'query')
        // var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162,
                start:0,
                end:1
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { },
            setHeader: () => { },
        }
        var resSpy = spyOn(res,'setHeader')
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            time_of_reading_hours:null,
            time_of_reading_minute:null,
            total:5,
            save:()=>{
                return Promise.resolve("test")
            }
        }])
        spy.andReturn(result)
        patientController.scoreGeneratedReport(req, res, {})
        expect(spy.wasCalled).toBe(true)
        done()
    });

    it("getGeneratedScrore test", (done) => {
        var spy = spyOn(sequelize, 'query')
        // var spy2 = spyOn(pReadingModels.patient_model, 'findOne')
        var req = {
            body: {
                name: "test"
            },
            params: {
                id:123,
                hospitalId: 92,
                hospitalBranchRoleId: 162,
                start:0,
                end:1
            },
            query: {
                searchText: "test"
            }
        }

        var res = {
            json: () => { },
            setHeader: () => { },
        }
        var resSpy = spyOn(res,'json')
        
        var result = Promise.resolve([{
            studyId:123,
            id:123,
            baby_medical_record_number:123,
            time_of_reading_hours:null,
            time_of_reading_minute:null,
            total:5,
            save:()=>{
                return Promise.resolve("test")
            }
        }])
        spy.andReturn(result)
        patientController.getGeneratedScrore(req, res, {})
        expect(spy.wasCalled).toBe(true)
        done()
    });
})