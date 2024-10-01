const Joi = require('joi');

function validateUser(user) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        username: Joi.string().min(3).max(50).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().email().required()
    });

    return schema.validate(user);
}
function validateLogInDetails(user){
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    });
    return schema.validate(user);
}

module.exports = {validateUser,validateLogInDetails};