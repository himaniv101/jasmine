const HospitalStaffController = require('../../controllers/hospitalStaffController')
const pReadingModels = require('../../sequelize')
const { sequelize } = require('../../sequelize');
const multer = require('multer');


describe('Hospital Staff Controlloer', () => {
    it('getHospitalStaffRoles method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                name: 'test'
            },
            params: {
                hospitalId: 92
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getHospitalStaffRoles(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getHospitalStaffSpecialities method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                name: 'test'
            },
            params: {
                hospitalId: 92
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getHospitalStaffSpecialities(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getHospitalBranchesByHospitalId method', () => {
        var spy = spyOn(pReadingModels.hospital_branch_model, 'findAll');
        var req = {
            body: {
                name: 'test'
            },
            params: {
                hospitalId: 92
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getHospitalBranchesByHospitalId(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    // it('downloadFile method', () => {
    //     var spy = spyOn(pReadingModels.referral_files_model, 'findAll');
    //     var req = {
    //         body: {
    //             name: 'test'
    //         },
    //         params: {
    //             fileId: 92
    //         }
    //     }
    //     var res = {
    //         json: () => { }
    //     }

    //     var result = Promise.resolve("test")

    //     spy.andReturn(result)
    //     HospitalStaffController.downloadFile(req, res, {})
    //     spy.plan().then((data) => {
    //         expect(data).toBe("test")
    //         done()
    //     })

    // })
    it('addStaff method', () => {
        var spy = spyOn(pReadingModels.user_model, 'findAll')
        var spy1 = spyOn(pReadingModels.user_model, 'create')
        var req = {
            body: {
                contactNumber: 1234567890,
                username: "test",
                email: "test@mail.com"
            }
        }
        var res = {
            json: () => { }
        }
        var result = Promise.resolve(["test"])
        spy.andReturn(result)
        HospitalStaffController.addStaff(req, res, {})
        spy.plan().then((data) => {
            expect(data.length).toBe(1)
            done()
        })

        var result1 = Promise.resolve([])
        spy.andReturn(result1)
        spy1.andReturn(result)

        HospitalStaffController.addStaff(req, res, {})
        spy.plan().then((data) => {
            expect(data.length).toBe(0)
            done()
        })


    })
    it('getStaffs method', () => {
        var spy = spyOn(sequelize, 'query');
        var spy_1 = spyOn(pReadingModels.hospital_staff_model, 'findAll')
        var req = {
            body: {
                end: '123456789'
            },
            params: {
                hospitalStaffFlag: 0
            },
            query: {
                searchText: "null"
            }
        }
        var req1 = {
            body: {
                end: '123456789'
            },
            params: {
                hospitalStaffFlag: 0
            },
            query: {
                searchText: "test"
            }
        }
        var req2 = {
            body: {
                end: '123456789'
            },
            params: {
                hospitalStaffFlag: 1
            },
            query: {
                searchText: "test"
            }
        }
        var req4 = {
            body: {
                end: '123456789'
            },
            params: {
                hospitalStaffFlag: 1
            },
            query: {
                searchText: "null"
            }
        }
        var res = {
            json: () => { }
        }
        var result = Promise.resolve({
            permission_id: "null",
            length: 1,
            dataEntry_review_permission: 0
        })
        spy_1.andReturn(result)
        spy.andReturn(result)
        HospitalStaffController.getStaffs(req, res, {})
        spy.plan().then((data) => {
            expect(data[2].dataEntry_review_permission).toBe(0)
            expect(spy_1.wasCalled).toBe(true)
            done()
        })
        HospitalStaffController.getStaffs(req1, res, {})
        spy.plan().then((data) => {
            expect(data[2].dataEntry_review_permission).toBe(0)
            expect(spy_1.wasCalled).toBe(true)
            done()
        })
        HospitalStaffController.getStaffs(req2, res, {})
        spy.plan().then((data) => {
            expect(data[2].dataEntry_review_permission).toBe(0)
            expect(spy_1.wasCalled).toBe(true)
            done()
        })
        HospitalStaffController.getStaffs(req4, res, {})
        spy.plan().then((data) => {
            expect(data[2].dataEntry_review_permission).toBe(0)
            expect(spy_1.wasCalled).toBe(true)
            done()
        })
        //  done();
    })
    it('getStaffCount method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                end: '123456789'
            },
            params: {
                hospitalStaffFlag: 0
            },
            query: {
                searchText: "null"
            }
        }
        var req1 = {
            body: {
                end: '123456789'
            },
            params: {
                hospitalStaffFlag: 0
            },
            query: {
                searchText: "test"
            }
        }
        var req2 = {
            body: {
                end: '123456789'
            },
            params: {
                hospitalStaffFlag: 1
            },
            query: {
                searchText: "test"
            }
        }
        var req4 = {
            body: {
                end: '123456789'
            },
            params: {
                hospitalStaffFlag: 1
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
        HospitalStaffController.getStaffCount(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        HospitalStaffController.getStaffCount(req1, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        HospitalStaffController.getStaffCount(req2, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        HospitalStaffController.getStaffCount(req4, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('updateStaff method', () => {
        var spy = spyOn(pReadingModels.hospital_staff_model, 'findAll');
        var spy1 = spyOn(pReadingModels.staff_model, 'findByPk');
        var req = {
            body: {
                contactNumber: '123456789',
                status: 2,
                firstName: "testfirst",
                lastName: 'testLast',
                speciality: "doctosr",
                assignRole: "doc",
                branch: 1,
                reportTo: "rrrs"
            },
            params: {
                hospitalId: 92,
                staffId: 12
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve([{
            "active_flag": 1
        }])
        spy.andReturn(result)
        spy1.andReturn(result)
        HospitalStaffController.updateStaff(req, res, {})
        spy.plan().then((data) => {
            expect(data[0].active_flag).notEqualsTo(req.body.status)
            done()
        })
        spy1.plan().then((data) => {
            done()
        })

    })
    it('updateStaffPermission method', () => {
        var spy = spyOn(pReadingModels.hospital_staff_model, 'findAll')
        var req = {
            body: {
                hospital_branch_id: 1,
                staff_id: 101,
                dataEntry_review_permission: 1,
                scoreGenerate: 1
            }
        }
        var res = {
            json: () => { }
        }
        var result = Promise.resolve()
        spy.andReturn(result)
        HospitalStaffController.updateStaffPermission(req, res, {})
        spy.plan().then((data) => {
            done()
        })
      

    })
    it('addReferralDoctor method', () => {
        var spy = spyOn(pReadingModels.user_model, 'findAll');
        var req = {
            body: {
                email: 'test@mail.com',
                contactNumber: 1223546546,
                staff_id: 12
            },
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.addReferralDoctor(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
    })
    it('getReferralOpinion method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                email: 'test@mail.com',
            },
            params: {
                studyId: 1
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getReferralOpinion(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('sendReferralOpinion method', () => {
        var spy = spyOn(pReadingModels.referral_opinion_model, 'create');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                staffReffHospId: 1
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.sendReferralOpinion(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getReferralDetail method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                start: 1,
                end: 10,
                referralId: 101
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getReferralDetail(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('acceptRequest method', () => {
        var spy = spyOn(pReadingModels.referral_hospitals_model, 'findAll');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                passcode: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.acceptRequest(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getStaffBranches method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                staffId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getStaffBranches(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getReferralDashBoardDetail method', () => {
        var spy = spyOn(pReadingModels.referral_hospitals_model, 'findAll');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                referralId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getReferralDashBoardDetail(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getDashBoardDetail method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                staffId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getDashBoardDetail(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getRefferalSpeciality method', () => {
        var spy = spyOn(pReadingModels.speciality_model, 'findAll');
        var req = {
            body: {
                opinion: 'takecare',
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getRefferalSpeciality(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getBranchStaff method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                hospitalBranchId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getBranchStaff(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getStaffReferral method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                staffId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getStaffReferral(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getConnectedStaff method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                staffId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getConnectedStaff(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getReferralConnectedStaff method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                referralId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getReferralConnectedStaff(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getRefferalStaff method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                userId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getRefferalStaff(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getStaffForMessageCenter method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            body: {
                opinion: 'takecare',
                prescription: "medicine"
            },
            params: {
                userId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getStaffForMessageCenter(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('updateRefferalInitiationStatus method', () => {
        var spy = spyOn(pReadingModels.referral_hospitals_model, 'create');
        var spy1 = spyOn(pReadingModels.referral_hospitals_model, 'findByPk')
        var req = {
            body: {
                requesterType: 'takecare',
                hospitalActionStatus: "1",
                referralActionStatus: "1",
                previousStatus: "1"
            },
            params: {
                hospitalId: 1,
                referralId: 12
            }
        }
        var req1 = {
            body: {
                requesterType: 'takecare',
                hospitalActionStatus: "1",
                referralActionStatus: "1",
                previousStatus: "2"
            },
            params: {
                hospitalId: 1,
                referralId: 12
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        spy1.andReturn(result)
        HospitalStaffController.updateRefferalInitiationStatus(req, res, {})
        HospitalStaffController.updateRefferalInitiationStatus(req1, res, {})
        expect(spy1.wasCalled).toBe(true)

    })
    it('getReferralHospitalCount method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            query: {
                searchText: 'takecare',
            }
        }
        var req1 = {
            query: {
                searchText: "null",
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getReferralHospitalCount(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        HospitalStaffController.getReferralHospitalCount(req1, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getReferralHospital method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            query: {
                searchText: 'takecare',
            },
            params: {
                end: 10,
                start: 1
            }
        }
        var req1 = {
            query: {
                searchText: "null",
            },
            params: {
                end: 10,
                start: 1
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getReferralHospital(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        HospitalStaffController.getReferralHospital(req1, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getReferralProfile method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            params: {
                referralId: 1,
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getReferralProfile(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getReferralDoctorCount method', () => {
        var spy = spyOn(sequelize, 'query');
        var req = {
            params: {
                referralId: 1,
            },
            query: {
                searchText: "null"
            }
        }
        var req1 = {
            params: {
                referralId: 1,
            },
            query: {
                searchText: "text"
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getReferralDoctorCount(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })
        HospitalStaffController.getReferralDoctorCount(req1, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('registerReferralDoctor method', () => {
        var spy = spyOn(pReadingModels.user_model, 'findAll');
        var req = {
            body: {
                contact_number: 'takecare',
                email_address: "medicine",
                user_name: "test"
            },
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.registerReferralDoctor(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getReferralDoctor method', () => {
        var spy = spyOn(pReadingModels.user_model, 'findAll');
        var req = {
            body: {
                contact_number: 'takecare',
                email_address: "medicine",
                user_name: "test"
            },
            params: {
                end: 10,
                start: 1,
                hospitalId: 10,
                hospitalBranchId: 12
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
        HospitalStaffController.getReferralDoctor(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('getStaffProfile method', () => {
        var spy = spyOn(pReadingModels.user_model, 'findAll');
        var req = {
            params: {
                staffId: 1
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.getStaffProfile(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })
    it('updateStaffProfile method', () => {
        var spy = spyOn(pReadingModels.staff_model, 'findByPk')
        var spy1 = spyOn(pReadingModels.user_model, 'findByPk')

        var req = {
            body: {
                firstName: "testfirst",
                lastName: "testlast"
            },
            params: {
                staffId: 1
            }
        }
        var res = {
            json: () => { }
        }
        var result = Promise.resolve("test")

        spy.andReturn(result)

        HospitalStaffController.updateStaffProfile(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            //   expect(spy1.wasCalled).toBe(true)
            done()
        })
      

    })
    it('updateReferralProfile method', () => {
        var spy = spyOn(pReadingModels.referral_doctor_model, 'findByPk');
        var req = {
            body: {
                firstName: 'test',
                lastName: "testlast"
            },
            params: {
                referralId: 92
            }
        }
        var res = {
            json: () => { }
        }

        var result = Promise.resolve("test")

        spy.andReturn(result)
        HospitalStaffController.updateReferralProfile(req, res, {})
        spy.plan().then((data) => {
            expect(data).toBe("test")
            done()
        })

    })

})