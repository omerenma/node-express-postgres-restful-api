import Client from "../databases/database";

export type User = {
    id?: Number;
    first_name: string;
    last_name: string;
    sex: string;
    age:Number
}

export class UserStore {
    async index(): Promise<User[]>{
        try {
            const connection = await Client.connect()
            const query = 'SELECT * FROM users';
            const result = await connection.query(query)
            return result.rows
    
    } catch (err) {
    throw new Error(`Cannot get users ${err}`)
 }

    }
    async getUserById(id:string): Promise<User[]>{
        try {
            const connetion = await Client.connect()
            const query = 'SELECT * FROM users WHERE id=($1)'
            const result = await connetion.query(query, [id])
            connetion.release()
            return result.rows[0]

        } catch (err) {
                throw new Error(`Cannot get users ${err}`)

        }
    }
    async create(user: User): Promise<User>{
        try {
            const query = 'INSERT INTO users (first_name, last_name, sex, age) VALUES ($1, $2, $3, $4) RETURNING * '
            const connetion = await Client.connect()
            const result = await connetion.query(query, [user.first_name, user.last_name, user.sex, user.age])
            const response = result.rows[0]
            connetion.release()
            return response
            
        } catch (err) {
            throw new Error(`Cannot get users ${err}`)

        }
    }
    async upate(id: string): Promise<User> {
        try {
            const query = 'UPDATE users SET '
            // @ts-ignore: Unreachable code error
            const connection = await Client.connect()

            const result = await connection.query(query, [id])

            const response = result.rows[0]

            connection.release()

            return response
        } catch (err) {
            throw new Error(`Could not delete book ${id}. Error: ${err}`)
        }
    }
    async delete(id: string): Promise<User> {
        try {
            const query = 'DELETE FROM users WHERE id=($1)'
            // @ts-ignore: Unreachable code error
            const connection = await Client.connect()

            const result = await connection.query(query, [id])

            const response = result.rows[0]

            connection.release()

            return response
        } catch (err) {
            throw new Error(`Could not delete book ${id}. Error: ${err}`)
        }
    }

}



