import Joi from "joi"
import UserType from "../types/user.types"

export const registerUserSchema = (payload : UserType) =>{
    const schema = Joi.object({
        user_id: Joi.string().id().required(),
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().allow('', null)
    })

    return schema.validate(payload)
}