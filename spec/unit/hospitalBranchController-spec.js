const pReadingModels = require('../../sequelize')
const hospitalBranchController = require('../../controllers/hospitalBranchController')
const { sequelize } = require('../../sequelize')




describe('hospitalBranchController', () => {

    it("getHopitalBranchRoles test", (done) => {
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
        hospitalBranchController.getHopitalBranchRoles(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    });

    it("removeRole test", (done) => {
        var spy = spyOn(pReadingModels.hospital_branch_roles_model, 'findByPk')
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
        var result = Promise.resolve({
            destroy: () => {
                return Promise.resolve("test")
            }
        })
        spy.andReturn(result)
        hospitalBranchController.removeRole(req, res, {})
        spy.plan().then((data) => {
            // expect(data).toBe("test")
            data.destroy().then((dt) => {
                expect(dt).toBe("test")
                done()
            })
        })

    });

    it("registerHospitalBranch test", (done) => {
        var spy = spyOn(pReadingModels.user_model, 'findAll')
        var spy1 = spyOn(pReadingModels.user_model, 'create')

        var req = {
            body: {
                name: "test",
                user_name:"testuser"
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
            "test": "test",
            m_hospitals_branch: {
                branch_name: "test"
            }
        }])

        spy.andReturn(result)
        hospitalBranchController.registerHospitalBranch(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].test).toBe("test")
            done()
        })

        var result2 = Promise.resolve({
            "test": "test"
        })

        spy.andReturn(result2)
        hospitalBranchController.registerHospitalBranch(req, res, {})
        spy.plan().then((data) => {
            expect(data.test).toBe("test")
            done()
        })
        spy1.andReturn(result3)
        var result3=Promise.resolve();
        spy.andReturn(result3)
        spy.plan().then((data)=>{
            expect(spy1.wasCalled).toBe(true)
        })
    });

    it("getHospitalBranches test", (done) => {
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
        var req1 = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
            query: {
                searchText: "null"
            }
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")
        spy.andReturn(result)
        hospitalBranchController.getHospitalBranches(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        hospitalBranchController.getHospitalBranches(req1, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    });


    it("addRole test", (done) => {
        var spy = spyOn(pReadingModels.role_model, 'findAll')
        var spy1=spyOn(pReadingModels.hospital_branch_roles_model,'findAll')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve(["test"])
        spy.andReturn(result)
        spy1.andReturn(result)
        hospitalBranchController.addRole(req, res, {})
        spy.plan().then((data) => {
            expect(data[0]).toBe("test")
            expect(spy1.wasCalled).toBe(true)
            done()
        })

        var result2 = Promise.resolve([])
        spy.andReturn(result2)
        spy1.andReturn(result2)
        hospitalBranchController.addRole(req, res, {})
        spy.plan().then((data) => {
            expect(data.length).toBe(0)
            expect(spy1.wasCalled).toBe(true)
            done()
        })

    });

    it("updateHospitalBrancheRoles test", (done) => {
        var spy = spyOn(pReadingModels.hospital_branch_roles_model, 'findByPk')
        var spy1=spyOn(pReadingModels.role_model,'create')
        var spy2=spyOn(pReadingModels.hospital_branch_roles_model,'create')
        var req = {
            body: {
                name: "test",
                role:"doctor"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")

        spy.andReturn(result)
        spy1.andReturn(result)
        spy2.andReturn(result)

        hospitalBranchController.updateHospitalBrancheRoles(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        spy1.plan().then((data) => {
            expect(data).toBe("test")
            expect(spy2.wasCalled).toBe(true);
            done()
        })


    });

    it("addSpeciality test", (done) => {
        var spy = spyOn(pReadingModels.speciality_model, 'findAll')
        var spy1=spyOn(pReadingModels.hospital_branch_speciality_model,'findAll')

        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchRoleId: 162
            },
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve([{
                id: 123,
                save: () => {
                   return Promise.resolve("test")
                 }
        }])
        var result3=Promise.resolve('test')
        spy.andReturn(result)
        spy1.andReturn(result3)
        
        hospitalBranchController.addSpeciality(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].id).toBe(123)
            expect(spy1.wasCalled).toBe(true)
            done()
        })

        var result2 = Promise.resolve([])
        spy.andReturn(result2)
        hospitalBranchController.addSpeciality(req, res, {})
        spy.plan().then((data) => {
            expect(data.length).toBe(0)
            done()
        })


    });


    it("getHopitalBranchspecialities test", (done) => {
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
        hospitalBranchController.getHopitalBranchspecialities(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    });

    it("removeSpeciality test", (done) => {
        var spy = spyOn(pReadingModels.hospital_branch_speciality_model, 'findByPk')
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
        var result = Promise.resolve({
            destroy: () => {
                return Promise.resolve("test")
            }
        })
        spy.andReturn(result)
        hospitalBranchController.removeSpeciality(req, res, {})
        spy.plan().then((data) => {
            // expect(data).toBe("test")
            data.destroy().then((dt) => {
                expect(dt).toBe("test")
                done()
            })
        })

    });


    it("updateHospitalBrancheSpecialities test", (done) => {
        var spy = spyOn(pReadingModels.hospital_branch_speciality_model, 'findByPk')
        var spy1=spyOn(pReadingModels.speciality_model,'create')
        var spy2=spyOn(pReadingModels.hospital_branch_speciality_model,'create')
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
        spy1.andReturn(result)
        spy2.andReturn(result)

        hospitalBranchController.updateHospitalBrancheSpecialities(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        spy1.plan().then((data) => {
            expect(data).toBe("test")
            expect(spy3.wasCalled).toBe(true)
            done()
        })
    });

    it("getHopitalBranchProfile test", (done) => {
        var spy = spyOn(sequelize, 'query')
        var req = {
            body: {
                name: "test"
            },
            params: {
                hospitalId: 92,
                hospitalBranchId: 162
            },
        }

        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")
        spy.andReturn(result)
        hospitalBranchController.getHopitalBranchProfile(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    });

    it("updateHopitalBranchProfile test", (done) => {
        var spy = spyOn(pReadingModels.hospital_branch_model, 'findByPk')
        var spy2 = spyOn(pReadingModels.user_model, 'findByPk')
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
        var result = Promise.resolve({
            save: () => {
                return Promise.resolve("test")
            }
        })

        var result2 = Promise.resolve({
            user_id:123,
            save: () => {
                return Promise.resolve("test")
            }
        })

        spy.andReturn(result)
        spy2.andReturn(result2)

        hospitalBranchController.updateHopitalBranchProfile(req, res, {})

        spy.plan().then((data) => {
            data.save().then((dt) => {
                expect(dt).toBe("test")
            })
            done()
        })
        spy2.plan().then((data)=>{
            expect(data.user_id).toBe(123)
            
            done()
        })

    });

})