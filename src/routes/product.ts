import { Router, Request, Response, NextFunction } from 'express';

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
    res.status(200).json(
        {
            status: true,
            statusCode: 200,
            data: req.body
        })
})