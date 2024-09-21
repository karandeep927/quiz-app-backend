const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())



const questionRoute = require('./routes/questionRoutes')
const userRoutes = require('./routes/userRoutes')

app.get('/',(req,res)=>res.send('working'))

app.use("/api/v1/questions",questionRoute)
app.use("/api/v1/user",userRoutes);

module.exports = app