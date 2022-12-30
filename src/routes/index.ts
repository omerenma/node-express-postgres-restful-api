import express, {Request, Response} from 'express'
import students from './api/students'
import teachers from './api/teachers'
const router = express.Router()


router.get('/', (req:Request, res:Response) => {
    res.send("Hello World!")
})
router.use('/students', students)
router.use('/teachers', teachers)
export default router