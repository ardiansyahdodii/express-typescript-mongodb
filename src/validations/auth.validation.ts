import Joi from "joi"
import UserType from "../types/user.types"

export const registerUserValidation = (payload : UserType) =>{
    const schema = Joi.object({
        user_id: Joi.string().id().required(),
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().allow('', null)
    })

    return schema.validate(payload)
}

export const createSessionValidation = (payload : UserType) =>{
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })

    return schema.validate(payload)
}