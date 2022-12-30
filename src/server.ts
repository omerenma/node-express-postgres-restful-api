const express = require('express')
import cors from 'cors'
import router from "./routes/index";
import indexRouter from './routes/api/index'
import usersRoutes from '../src/handlers/users'
const app = express();

// Whitelisting allowed domains for cors

const corsOptions = {
    origin: 'http://localhost:5000/somedomain.com',
    optionsSiccessStatus:200
}
app.use(cors(corsOptions))
app.use(express.json())
// app.use("/api/v1", router)
// app.use('/api/v1/index', indexRouter)
usersRoutes(app)

const port = 4000;
app.listen(port, () => {
    console.log('Express server listening on port 4000')
})