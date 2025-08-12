const express = require('express')
const authRoute = require('./routes/auth.routes')

const app = express()
app.use(express.json())


app.use('/auth', authRoute)



module.exports = app