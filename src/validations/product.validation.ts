import Joi from 'joi'
import ProductType from '../types/product.types'


export const createProductSchema = (payload : ProductType) =>{
    const schema = Joi.object({
        product_id: Joi.string().id().required(),
        name: Joi.string().required(),
        price: Joi.number().allow('', null),
        variant: Joi.string().allow('', null)
    })

    return schema.validate(payload)
}