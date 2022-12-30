import express, { Request, Response } from 'express'
import { UserStore } from '../../models/users'

const router = express.Router()

router.get('/', async (_req: Request, res: Response) => {
    try {
        const users = new UserStore()
        const result = await users.index()
        res.status(200).send(result)
        
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/:id', async(req:Request, res:Response) => {
    try {
        const { id } = req.params
        const user = new UserStore()
        const result = await user.getUserById(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req: Request, res: Response) => {
    try {
        const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            sex: req.body.sex,
            age: req.body.age
        }
        const user = new UserStore()
        const result = await user.create(data)
        res.status(200).send(result)
        

    } catch (error) {
        res.status(400).send(error)
    }
})


router.put('/:id', async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(id)
        const user = new UserStore();
        const result = await user.upate(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.delete('/:id', async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(id)
        const user = new UserStore();
        const result = await user.delete(id)
        res.status(200).send(result)
    } catch (error) {
        res.status(400).send(error)
    }
})


export default router