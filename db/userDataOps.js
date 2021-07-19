const knex = require('../knexfile');
const Joi = require('joi');

function saveUsrData(usrData) {
    return knex("uform_data").insert(usrData);   
}

function getAllData() {
    return knex("uform_data").select("*");
}

function validateUserForm(usrFormData) {
    const schema = Joi.object({
        firstname: Joi.string().min(1).required(),
        surname: Joi.string().min(2).required(),
        email: Joi.string().email().required(),
        phone:Joi.string().length(10).pattern(/^[0-9]+$/).required(),
        gender: Joi.string(),
        birthdate: Joi.date().max('1-1-2004').iso().required(),
        comments: Joi.string()
    })

    return schema.validate(usrFormData);
}

module.exports = {
    saveUsrData,
    getAllData,
    validateUserForm
};