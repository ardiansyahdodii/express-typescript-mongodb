import express, { Application, Request, Response } from 'express';

const app: Application = express()
const port: number = 9000

app.get('/', (req:Request, res:Response) => {
    res.status(200).json({ message: 'Express Typescript' })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})