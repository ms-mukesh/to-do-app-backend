const db = require("../model");
const { Op  } = db.Sequelize;
const { sequelize } = db;
const {
 users
} = db;

const checkLoginDetails = (emaild,password) => {
    return new Promise((resolve) => {
        let condition = {
            Email: { [Op.eq]: emaild },
            Password: { [Op.eq]: password },
        };
        users.findOne({where:condition}).then((res)=>{
            if(res){
                return resolve(res)
            } else {
                return resolve(false)
            }
        }).catch((err)=>{
            return resolve(false)
        })
    });
};
const registerUser = (userDetailObj) =>{
    return new Promise((resolve)=>{
        let condition = {
            Email: { [Op.eq]: userDetailObj.Email },
        };
        users.findOne({where:condition}).then((isAlreadyAvailable)=>{
            if(isAlreadyAvailable){
                return resolve(false)
            } else {
                users.create(userDetailObj).then((isUserCreated)=>{
                    if(isUserCreated){
                        return resolve(isUserCreated)
                    } else {
                        return resolve(false)
                    }
                }).catch((err)=>{
                    return resolve(false)
                })
            }
        }).catch((err)=>{
            return resolve(false)
        })
    })
}
module.exports = {
    checkLoginDetails,
    registerUser
}
