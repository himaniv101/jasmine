const config = require('../../config/jwtConfig');
const jwt = require('jsonwebtoken');
const token=require('../../auth/verifyToken');

describe('auth testing',()=>{
    it('verify token method',(done)=>{
        var req={
            headers:'x-access-token'
        }
        var res = {
            status:() =>{}
        }
      //  token(req,res,{});
        done();
    })
})