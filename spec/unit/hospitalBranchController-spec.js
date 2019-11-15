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

    });


    it("addRole test", (done) => {
        var spy = spyOn(pReadingModels.role_model, 'findAll')
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
        var result = Promise.resolve(["test"])
        spy.andReturn(result)
        hospitalBranchController.addRole(req, res, {})
        spy.plan().then((data) => {
            expect(data[0]).toBe("test")
            done()
        })

        var result2 = Promise.resolve([])
        spy.andReturn(result2)
        hospitalBranchController.addRole(req, res, {})
        spy.plan().then((data) => {
            expect(data.length).toBe(0)
            done()
        })

    });

    it("updateHospitalBrancheRoles test", (done) => {
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
        var result = Promise.resolve("test")
        spy.andReturn(result)
        hospitalBranchController.updateHospitalBrancheRoles(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })


    });

    it("addSpeciality test", (done) => {
        var spy = spyOn(pReadingModels.speciality_model, 'findAll')
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
        var result = Promise.resolve(["test"])
        spy.andReturn(result)
        hospitalBranchController.addSpeciality(req, res, {})
        spy.plan().then((data) => {
            expect(data[0]).toBe("test")
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
        hospitalBranchController.updateHospitalBrancheSpecialities(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
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