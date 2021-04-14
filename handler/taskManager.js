const db = require("../model");
const { Op  } = db.Sequelize;
const { sequelize } = db;
const {
    taskMaster,
    users
} = db;

const createNewTask = (taskDetails)=>{
    return new Promise((resolve)=>{
        taskMaster.create(taskDetails).then((isCreated)=>{
            if(isCreated){
                return resolve(true)
            } else {
                return resolve(false)
            }
        }).catch((err)=>{
            return resolve(false)
        })
    })
}
const getTaskForUser = (memberId) =>{
    return new Promise((resolve)=>{
        let condition = {
            TaskCreator: { [Op.eq]: memberId },
        };
        taskMaster.findAll({where:condition}).then((taskData)=>{
            if(taskData){
                return resolve(taskData)
            } else {
                return resolve(false)
            }
        }).catch((err)=>{
            console.log(err)
            return resolve(false)
        })
    })
}

const updateTaskStatus = (taskId,currentStatus) =>{
    return new Promise((resolve)=>{
        let condition = {
            TaskId: { [Op.eq]: taskId },
        };
        let updateValue = currentStatus == "0"?"1":"0";
        taskMaster.update({IsCompleted:updateValue},{where:condition}).then((isUpdated)=>{
            if(isUpdated){
                return resolve(true)
            } else {
                return resolve(false)
            }
        }).catch((err)=>{
            console.log(err)
            return resolve(false)
        })
    })
}
const removeTask = (taskId) =>{
    return new Promise((resolve)=>{
        let condition = {
            TaskId: { [Op.eq]: taskId },
        };
        // let updateValue = currentStatus == "0"?"1":"0";
        taskMaster.destroy({where:condition}).then((isDeleted)=>{
            console.log(isDeleted)
            if(isDeleted){
                return resolve(true)
            } else {
                return resolve(false)
            }
        }).catch((err)=>{
            console.log(err)
            return resolve(false)
        })
    })
}

const updateTaskDetails = (taskDetailObj) =>{
    return new Promise((resolve)=>{
        let condition = {
            TaskId: { [Op.eq]: taskDetailObj.taskId },
        };
        taskMaster.update({...taskDetailObj},{where:condition}).then((isUpdated)=>{
            console.log(isUpdated)
            if(isUpdated){
                return resolve(true)
            } else {
                return resolve(false)
            }
        }).catch((err)=>{
            console.log(err)
            return resolve(false)
        })
    })
}

module.exports = {
    createNewTask,
    getTaskForUser,
    updateTaskStatus,
    removeTask,
    updateTaskDetails
}
