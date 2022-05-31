const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL)

mongoose.connection
.on('error', err => console.log(`this is the error ${err}`))
.on('connected', ()=>console.log(`Mongo DB Connected`))
.on('disconnected',()=>console.log(`Mongo DB Disconnected`))