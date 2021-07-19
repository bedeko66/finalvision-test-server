const express = require('express');
const apiRouter = express.Router();

const usrFormRouter = require('./userFormRoutes');

apiRouter.use("/user-form", usrFormRouter);

module.exports = apiRouter;