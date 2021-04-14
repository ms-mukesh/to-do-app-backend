const express = require("express");
const router = express.Router();
const {checkLoginDetails,registerUser} = require("../handler/userAuth")
router.post(
    "/login",
    (request, response, next) => {
        if (!request.body.emailId)
            return response.status(202).send({ data: "please provide valid Email Id" });
        if (!request.body.password)
            return response.status(202).send({ data: "please provide valid Password" });

        next();
    },
    async function (request, response) {
        const req = request.body;
        try {
            const { emailId,password } = req;
            checkLoginDetails(emailId,password).then((isValid)=>{
                if(isValid){
                    return response.status(200).send({ data: isValid });
                } else {
                    return response.status(201).send({ data: "Invalid Login Details" });
                }
            }).catch((err)=>{
                return response.status(201).send({ data: "Invalid Login Details" });
            })
        } catch (ex) {
            response.status(500).send(ex);
        }
    }
);

router.post(
    "/register",
    (request, response, next) => {
        if (!request.body.Name)
            return response.status(202).send({ data: "please provide valid Name" });
        if (!request.body.Email)
            return response.status(202).send({ data: "please provide valid Email Id" });
        if (!request.body.Phone)
            return response.status(202).send({ data: "please provide valid Phone Number" });
        if (!request.body.Address)
            return response.status(202).send({ data: "please provide valid Address" });
        if (!request.body.Password)
            return response.status(202).send({ data: "please provide valid Password" });
        if (!request.body.Gender)
            return response.status(202).send({ data: "please provide valid Gender Details" });

        next();
    },
    async function (request, response) {
        const req = request.body;
        try {
            let obj = {
                Name:req.Name,
                Password:req.Password,
                Phone:req.Phone,
                Email:req.Email,
                Gender:req.Gender,
                Address:req.Address,
            }
            registerUser(obj).then((isCreated)=>{
                if(isCreated){
                    return response.status(200).send({ data: isCreated });
                } else {
                    return response.status(201).send({ data: "Failed to signup,May be This Email id is taken already" });
                }
            }).catch((err)=>{
                return response.status(201).send({ data: "Failed to signup,May be This Email id is taken already" });
            })
        } catch (ex) {
            response.status(500).send(ex);
        }
    }
);
module.exports = router
