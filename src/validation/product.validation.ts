import Joi from 'joi'

interface ProductInterface {
    id: number
    name: string
    price: number
}

export const createProductSchema = (payload : ProductInterface) =>{
    const schema = Joi.object({
        name: Joi.string().required(),
        price: Joi.number().allow('', null),
    })

    return schema.validate(payload)
}