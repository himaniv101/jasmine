// // const loginUser=require('../../routes/loginUser');
// const userController=require('../../controllers/userController');
// const pReadingModels = require('../../sequelize')
// const { sequelize } = require('../../sequelize')
// const nodeMailer = require('nodemailer');
// let Validator = require('validatorjs');



// describe('UserController test',()=>{
//     it('resetPassword',(done)=>{
//         var spy = spyOn(pReadingModels.user_model, 'findOne')
//         var req = {
//             body: {
//                 passcode: 12345,
//                 password:"test123",
//                 active_flag:1
//             },
//         }
      
//         var res = {
//             json: () => { }
//         }

//         var result = Promise.resolve([{
//             "password":"test123",
//              save: () => { }

//         }])

//         spy.andReturn(result)
//         userController.resetPassword(req, res, {})
//         spy.plan().then((data) => {
//             expect(data[0].password).toBe(req.body.password)
            
//         })
//         done();

//     });
//     it('forgetPassword',(done)=>{
//         var spy = spyOn(pReadingModels.user_model, 'findOne');
      
//         var req = {
//             body: {
//                 email:"test@gmail.com"
//             },
//         }
//         let transporter = nodeMailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 465,
//             secure: true,
//             auth: {
//               user:'test@mail.com',
//               pass: '34567454543'
//             }
//           })
//           var spy1=spyOn(transporter,'sendMail')
//         var res = {
//             json: () => { }
//         }

//         var result = Promise.resolve("test")

//         spy.andReturn(result)
//         userController.forgetPassword(req, res, {})
//         spy.plan().then((data) => {
//             expect(data).toBe("test")
//             //done()
//         })
//         spy1.andReturn(result)
//         userController.forgetPassword(req,res,{})
//         spy1.plan().then((data)=>{
//             expect(data).toBe('test')
//             //done();
//         })
//         transporter.sendMail('meassge',()=>{})
//         done();
//     });

//     // it('signup method',(done)=>{
//     //    // var spy=spyOn(hospital_model,'findOne')
//     //    var schema=pReadingModels.user_model
//     //     var reqData={
//     //         body:{
//     //             first_name:"",
//     //             last_name:"",
//     //             email:"test@mail.com",
//     //             username:"test",
//     //             password:"test123",
//     //             hospital_name:"",
//     //             hospital_branch_name:""
//     //         }
//     //     }
//     //     let rules = {
//     //         username: 'required',
//     //         password: 'required',
//     //         email: 'required|email'
//     //       }
//     //       var res = {
//     //         status:{
//     //             json:()=>{}
//     //         }
//     //     }
//     //     var schema={
//     //         findOne:()=>{}
//     //     }

//     //     var result = Promise.resolve("test")
//     //     let validation = new Validator(reqData, rules);
//     //  //   var spy=spyOn(schema,'fincOne')
//     //   //  spy.andReturn(result)
//     //     userController.signup(reqData, res, {})
//     //     //spy.plan().then((data) => {
//     //       //  expect(data).toBe("test")
//     //         //done()
//     //     //})
//     //    done();

//     // });
//     it('login',(done)=>{
//         var spy = spyOn(pReadingModels.user_model, 'findOne')
//         var req = {
//             body: {
//                 username: "testuser",
//                 password:"1234"
//             },
//         }
      
//         var res = {
//             json: () => { }
//         }

//         var result = Promise.resolve({})

//         spy.andReturn(result)
//         userController.login(req, res, {})
//         spy.plan().then((data) => {
//             expect(data).toBe("test")
            
//         })
//         done();

//     });
  
// })