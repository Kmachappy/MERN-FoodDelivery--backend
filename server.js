require('dotenv').config()
const { PORT = 3001 } = process.env
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

//Database connection
require('./config/database')


app.listen(PORT, ()=>console.log(`listening on port ${PORT}`) )