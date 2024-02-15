import { Request, Response } from 'express';
import { createProductSchema, updateProductSchema } from "../validations/product.validation"
import { addProductToDB, getProductFromDB, getProductById, updateProductById } from '../services/product.service';
import { v4 as uuidv4 } from 'uuid';

// const products = [
//     {
//         id: 1,
//         name: 'Iphone 15 Pro',
//         price: 20000000,
//     },
//     {
//         id: 2,
//         name: 'Iphone 11',
//         price: 6500000,
//     },
//     {
//         id: 3,
//         name: 'Samsung Galaxy S23 Ultra',
//         price: 25000000
//     }
// ]

export const createProduct = async (req: Request, res: Response) => {
    req.body.product_id = uuidv4()
    const { error, value } = createProductSchema(req.body)
    if (error) {
        return res.status(422).json(
            {
                status: false,
                statusCode: 422,
                message: error
            })
    }
    try {
        await addProductToDB(value)
        return res.status(201).json(
            {
                status: true,
                statusCode: 201,
                message: 'Product created'
            })
    } catch (error) {
        return res.status(500).json(
            {
                status: false,
                statusCode: 500,
                message: error
            })
    }
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params

    if (id) {
        const product : any = await getProductById(id)
        if (product) {
            return res.status(200).send(
                {
                    status: true,
                    statusCode: 200,
                    data: product
                })
        }
        else {
            return res.status(404).send(
                {
                    status: true,
                    statusCode: 404,
                    message: 'Product not found'
                })
        }
    }
    else {
        const products: any = await getProductFromDB()
        return res.status(200).send(
            {
                status: true,
                statusCode: 200,
                data: products
            })
    }

}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const { error, value } = updateProductSchema(req.body)

    if (error) {
        return res.status(422).json(
            {
                status: false,
                statusCode: 422,
                message: error
            })
    }
    try {
        // console.log(value)
        await updateProductById(id, value)
        return res.status(200).json(
            {
                status: true,
                statusCode: 200,
                message: 'Product updated'
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                status: false,
                statusCode: 500,
                message: error
            }
        )
    }
}