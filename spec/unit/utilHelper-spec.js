const util=require('../../helper/util');

describe('Util Helper',()=>{
    it('getRefferalInitiationStatusId test',(done)=>{
        expect(util.getRefferalInitiationStatusId('Request Initiation')).toBe(1);
        expect(util.getRefferalInitiationStatusId('Pending Initiation')).toBe(2);
        expect(util.getRefferalInitiationStatusId('Accept Initiation')).toBe(3);
        expect(util.getRefferalInitiationStatusId( 'Active' )).toBe(4);
        done();
    })
    it('getRequesterType test',(done)=>{
        expect(util.getRequesterType( 'Referral Doctor' )).toBe(5);
        expect(util.getRequesterType('Hospital')).toBe(2);
        done();
    });
    it('generatePasscode test',(done)=>{
        util.generatePasscode();
        done();
    })
    it('getStaffPermission test',(done)=>{
        let result={
            dataEntry_review_permission:'1'
        }
        let permissionResult={
            active_flag:'1'
        };
        var ans_1=util.getStaffPermission(1,result,permissionResult);
        expect(util.getStaffPermission(1,result,permissionResult)).toBe(ans_1)
        let result_1={
            scoreGenerate:'1'
        }
        let permissionResult_1={
            active_flag:'1'
        };
        var ans_2=util.getStaffPermission(1,result_1,permissionResult_1);
        expect(util.getStaffPermission(1,result_1,permissionResult_1)).toBe(ans_2)
        done();
    })
    // it('getStaffPermissionId test',(done)=>{
    //     var dataEntry_review_permission={}
    //     var ans_1=util.getStaffPermissionId(dataEntry_review_permission);
    //     expect(util.getStaffPermissionId(dataEntry_review_permission)).toBe(ans_1)
    //     // let result_1={
    //     //     scoreGenerate:'1'
    //     // }
    //     // let permissionResult_1={
    //     //     active_flag:'1'
    //     // };
    //     // var ans_2=util.getStaffPermission(1,result_1,permissionResult_1);
    //     // expect(util.getStaffPermission(1,result_1,permissionResult_1)).toBe(ans_2)
    //     // done();
    // })
})