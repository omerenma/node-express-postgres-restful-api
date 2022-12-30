import express, { Request, Response } from 'express'
const teachers = express.Router();

teachers.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Teachers route')
})
export default teachers