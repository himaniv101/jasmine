const enumConst = require('../helper/enum')
//const server = require('../server')

exports.getStaffPermission =(permissionId,result,permissionResult) =>{
console.log ('permissionResult :' ,permissionResult) 

    switch(permissionId){
        case 1 :result.dataEntry_review_permission=permissionResult.active_flag
                return result
        break
        case 2 :result.scoreGenerate=permissionResult.active_flag
                return result
        break
    }
}


exports.getStaffPermissionId =(permission) =>{

    console.log("permission :",permission )

    switch(permission){
        case dataEntry_review_permission :
                return 1
        break
        case scoreGenerate :
                return 2
        break
    }
}

exports.getRefferalInitiationStatusId =(status) =>{

    switch(status){
        case 'Request Initiation' :
                return 1
        break
        case 'Pending Initiation' :
                return 2
        break
        case 'Accept Initiation' :
                return 3
        break
        case 'Active' :
            return 4
        break
    }
}

exports.getRequesterType =(type) =>{

    switch(type){
        case 'Referral Doctor' :
                return 5
        break
        case 'Hospital' :
                return 2
        break
    }
}

exports.generatePasscode =()=>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

 /*
exports.portDecider = ()=>{
    var be_port = server.port
    var fe_port;
    switch (be_port) {
        case 8080:
            fe_port = ":"+4200
            break;z
        case 8081:
            fe_port = ''
            break;
        case 8082:
            fe_port = ":"+4300
            break;
    }
    return fe_port;
}*/