import { Request, Response } from 'express';
import { createProductSchema } from "../validations/product.validation"


const products = [
    {
        id: 1,
        name: 'Iphone 15 Pro',
        price: 20000000,
    },
    {
        id: 2,
        name: 'Iphone 11',
        price: 6500000,
    },
    {
        id: 3,
        name: 'Samsung Galaxy S23 Ultra',
        price: 25000000
    }
]

export const createProduct = (req: Request, res: Response) => {
    const { error, value } = createProductSchema(req.body)
    if (error) {
        return res.status(422).json(
            {
                status: false,
                statusCode: 422,
                message: error
            })
    }
    products.push(value)
    return res.status(200).json(
        {
            status: true,
            statusCode: 200,
            data: value
        })
}

export const getProduct = (req: Request, res: Response) => {
    const { name } = req.params

    if (name) {
        const filterProduct = products.filter(product => {
            if (product.name === name) {
                return product
            }
        })
        if (filterProduct.length === 0) {
            return res.status(404).json(
                {
                    status: false,
                    statusCode: 404,
                    message: 'Product not found'
                })
        }
        return res.status(200).json(
            {
                status: true,
                statusCode: 200,
                data: filterProduct[0]
            }
        )
    }
    res.status(200).json(
        {
            status: true,
            statusCode: 200,
            data: products
        })
}