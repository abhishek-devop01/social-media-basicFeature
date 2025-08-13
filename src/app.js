const express = require('express')
const cookieParser = require('cookie-parser')
const authRoute = require('./routes/auth.routes')

const app = express()
app.use(express.json())
app.use(cookieParser())


app.use('/api/auth', authRoute)



module.exports = app