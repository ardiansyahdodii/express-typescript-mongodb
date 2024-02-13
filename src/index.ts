import express, { Application } from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import { routes } from './routes';

const app: Application = express()
const port: number = 9000

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())

app.use(cors())

// app.get('/', (req:Request, res:Response) => {
//     res.status(200).json({ message: 'Express Typescript' })
// })
routes(app)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})