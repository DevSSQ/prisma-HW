import express from 'express'
import MovieRouter from './routes/movie.route'


import 'dotenv/config'
import { connectDB } from './config/db'
const app = express();

//config
connectDB();

app.use(express.json());
app.use('/movie', MovieRouter)
 const api_key = process.env.PORT
console.log(api_key)


app.listen(api_key, () => {
    console.log(`Server is running on port ${api_key}`)
});