require('dotenv').config()
const { PORT = 3001 } = process.env
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { v4 :uuidv4 } = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

//models
const User = require('./models/user')
const Restaurant = require('./models/restaurants')

const app = express()

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())


//Database connection
require('./config/database')



app.get('/', (req,res)=>{
    res.send('hello world')
})

// iduces

app.get("/")


app.post('/signup', async(req,res)=>{
    const {email, password} = req.body
    console.log(req.body)
    
    const generateUserId = uuidv4()
    const hashedPassword = await bcrypt.hash(password,10)
    // console.log(hashedPassword)

    try {
        const existingUser = User.findOne({ email })
        console.log(existingUser)
        // if(existingUser){
            // return res.status(409).send('User already exists. Please login')
        // }
        const emailToLower = email.toLowerCase()
        const data = {
            user_id: generateUserId,
            email: emailToLower,
            password: hashedPassword,
        }
        const insertedUser = await User.create(data)

        const token = jwt.sign(insertedUser, emailToLower,{
            expiresIn: 60*24,
        })
        res.status(201).json({ token, userId: generateUserId, email: emailToLower })
        
    } catch (error) {
        console.log(error)
    }

})



app.get('/restaurants',(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})


app.listen(PORT, ()=>console.log(`listening on port ${PORT}`) )