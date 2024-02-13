import { Router, Request, Response, NextFunction } from 'express';
import { createProductSchema } from "../validation/product.validation"

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json(
        {
            status: true,
            statusCode: 200,
            data: [
                {
                    id: 1,
                    name: 'Iphone 15 Pro',
                    price: 20000000,
                },
                {
                    id: 2,
                    name: 'Iphone 11',
                    price: 6500000,
                }
            ]
        })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = createProductSchema(req.body)
    if (error) {
        return res.status(422).json(
            {
                status: false,
                statusCode: 422,
                message: error
            })
    }
    return res.status(200).json(
        {
            status: true,
            statusCode: 200,
            data: value
        })
})