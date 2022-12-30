import express, { Request, Response } from 'express'
import { User, UserStore } from '../models/users'


const getUsers =  async (_req: Request, res: Response) => {
    try {
        const users = new UserStore()
        const result = await users.index()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(500).json(error)
    }
}

const getUserById = async(req:Request, res:Response) => {
    try {
        const { id } = req.params
        const user = new UserStore()
        const result = await user.getUserById(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const addUser = async (req: Request, res: Response) => {
    try {
        const data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            sex: req.body.sex,
            age: req.body.age
        }
        const user = new UserStore()
        const result = await user.create(data)
        res.status(200).json(result)
        

    } catch (error) {
        res.status(400).json(error)
    }
}

const editUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(id)
        const user = new UserStore();
        const result = await user.upate(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteUser = async(req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(id)
        const user = new UserStore();
        const result = await user.delete(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const usersRoutes = (app: express.Application) => {
    app.get('/users', getUsers);
    app.get('/user/:id', getUserById)
    app.post('/user', addUser)
    app.put('/user/:id', editUser)
    app.delete('/user/:id', deleteUser)
}

export default usersRoutes