const joi = require("@hapi/joi")

const schema = {
    user: joi.object({
        email: joi.string().max(100).required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),       
    })
};

module.exports = schema