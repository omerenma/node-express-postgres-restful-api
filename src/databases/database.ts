import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

const {
    POSTGRES_HOST,
    POSTGRES_DB ,
    POSTGRES_USER ,
    POSTGRES_PASSWORD 
} = process.env

const client = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    
})

export default client


// import dotenv from 'dotenv'
// import { Pool } from 'pg'
// let client:any;
// dotenv.config()

// const {
//     POSTGRES_HOST,
//     POSTGRES_DB ,
//     POSTGRES_USER ,
//     POSTGRES_PASSWORD 
// } = process.env

// if (process.env.ENV === 'test') {
//     client = new Pool({
//         host: "localhost",
//         database: 'postgres',
//         user: 'postgres',
//         password:'omerenma1'

//     })
// }

// if (process.env.ENV === 'dev') {
//     client = new Pool({
//         host: POSTGRES_HOST,
//         database: POSTGRES_DB,
//         user: POSTGRES_USER,
//         password: POSTGRES_PASSWORD,
//     })
    
// }

// export default client