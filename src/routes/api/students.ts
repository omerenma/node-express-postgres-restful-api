import express, {Request, Response} from 'express'
const students  = express.Router()

students.get('/', (req: Request, res: Response) => {
    res.send("Welcome to students route")
})
export default students