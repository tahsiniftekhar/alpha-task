const router = require("express").Router()
const { checkToken } = require("../../auth/token_validation")
const { addUserValidation } = require("../../validation/user.validation")
const { 
    createUser,
    login
} = require("./user.controller")


router.post("/", addUserValidation, createUser)
router.post("/login", login)

module.exports = router