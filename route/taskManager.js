const express = require("express");
const router = express.Router();
const {createNewTask,getTaskForUser,updateTaskStatus,removeTask,updateTaskDetails} = require("../handler/taskManager")
router.post(
    "/getTaskList",
    (request, response, next) => {
        if (!request.body.creatorId)
            return response.status(202).send({ data: "please provide valid User Detail" });
        next();
    },
    async function (request, response) {
        const req = request.body;
        try {
            const { creatorId } = req;
            getTaskForUser(creatorId).then((taskList)=>{
                if(taskList){
                    return response.status(200).send({ data: taskList });
                } else {
                    return response.status(201).send({ data: "Task Not Found" });
                }
            }).catch((err)=>{
                return response.status(201).send({ data: "Task Not Found" });
            })
        } catch (ex) {
            response.status(500).send(ex);
        }
    }
);

router.post(
    "/createNewTask",
    (request, response, next) => {
        // if (!request.body.creatorId)
        //     return response.status(202).send({ data: "please provide valid User Detail" });
        next();
    },
    async function (request, response) {
        const req = request.body;
        try {
            const { creatorId } = req;
            createNewTask(req).then((isCreated)=>{
                if(isCreated){
                    return response.status(200).send({ data: "Created" });
                } else {
                    return response.status(201).send({ data: "Failed to create new task" });
                }
            }).catch((err)=>{
                return response.status(201).send({ data: "Failed to create new task" });
            })
        } catch (ex) {
            response.status(500).send(ex);
        }
    }
);
router.post(
    "/updateTaskStatus",
    (request, response, next) => {
        // if (!request.body.creatorId)
        //     return response.status(202).send({ data: "please provide valid User Detail" });
        next();
    },
    async function (request, response) {
        const req = request.body;
        try {
            const { creatorId } = req;
            updateTaskStatus(req.taskId,req.currentStatus).then((isUpdated)=>{
                if(isUpdated){
                    return response.status(200).send({ data: "Updated" });
                } else {
                    return response.status(201).send({ data: "Failed to Updated" });
                }
            }).catch((err)=>{
                return response.status(201).send({ data: "Failed to Updated" });
            })
        } catch (ex) {
            response.status(500).send(ex);
        }
    }
);
router.post(
    "/removeTask",
    (request, response, next) => {
        // if (!request.body.creatorId)
        //     return response.status(202).send({ data: "please provide valid User Detail" });
        next();
    },
    async function (request, response) {
        const req = request.body;
        try {
            const { taskId } = req;
            console.log(taskId)
            removeTask(taskId).then((isDeleted)=>{
                if(isDeleted){
                    return response.status(200).send({ data: "Deleted" });
                } else {
                    return response.status(201).send({ data: "Failed to Delete" });
                }
            }).catch((err)=>{
                return response.status(201).send({ data: "Failed to Delete" });
            })
        } catch (ex) {
            response.status(500).send(ex);
        }
    }
);

router.post(
    "/updateTaskDetails",
    (request, response, next) => {
        // if (!request.body.creatorId)
        //     return response.status(202).send({ data: "please provide valid User Detail" });
        next();
    },
    async function (request, response) {
        const req = request.body;
        try {
            updateTaskDetails(req).then((isDeleted)=>{
                if(isDeleted){
                    return response.status(200).send({ data: "Updated" });
                } else {
                    return response.status(201).send({ data: "Failed to Update" });
                }
            }).catch((err)=>{
                return response.status(201).send({ data: "Failed to Update" });
            })
        } catch (ex) {
            response.status(500).send(ex);
        }
    }
);
module.exports = router
