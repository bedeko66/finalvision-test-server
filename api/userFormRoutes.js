const express = require('express');
const usrOps = require('../db/userDataOps');

const usrFormRouter = express.Router();


usrFormRouter.get("/all", async (req, res) => {
    try {
        const allUsrData = await usrOps.getAllData();
        res.status(200).json({ allUsrData });
        
    } catch (error) {
        console.log(error);
    }
});

usrFormRouter.post("/save", async (req, res) => {
    try {
  
        const result = usrOps.validateUserForm(req.body.payload);
        if ( result.error ) {
            res.status(400).send(result.error.details[0].message);
            return;
        }

        const usrData = await usrOps.saveUsrData(req.body.payload);
        res.status(201).json({ id: usrData[0] });
    } catch (error) {
        console.log(error);
    }
});


module.exports = usrFormRouter;

