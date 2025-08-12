require('dotenv').config()
const app = require('./src/app')
const connectToDB = require('./src/db/db')


connectToDB()
app.listen(3000, ()=>{
     console.log('server is running...');     
})