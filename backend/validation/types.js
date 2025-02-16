const zod = require("zod");

const adminSignupValidation = zod.object({
    username:zod.string().email({message: "username is incorrect"}),
    password:zod.string().min(8,{message: "Password is incorrect"})
})

const userSignupValidation = zod.object({
    username:zod.string().email({message: "username is incorrect"}),
    password:zod.string().min(8,{message: "Password is incorrect"}),
    phoneNo:zod.string().min(10).max(10)
})

const signinValidation = zod.object({
    username:zod.string().email({message: "username is incorrect"}),
    password:zod.string().min(8,{message: "Password is incorrect"})
})

module.exports = {
    userSignupValidation,
    adminSignupValidation,
    signinValidation
}