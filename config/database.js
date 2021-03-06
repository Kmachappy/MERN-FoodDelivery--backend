const mongoose = require('mongoose')
const DATABASE_URL = process.env.DATABASE_URL

mongoose.connect(DATABASE_URL)

const db = mongoose.connection

db
.on('error', err => console.log(`this is the error ${err}`))
.on('connected', ()=>console.log(`Mongo DB Connected to ${db.name} at ${db.host}:${db.port}`))
.on('disconnected',()=>console.log(`Mongo DB Disconnected`))