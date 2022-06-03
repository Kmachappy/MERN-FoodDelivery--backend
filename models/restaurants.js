const { mongo } = require("mongoose")
const mongoose = require("mongoose")

const menuSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    price: Number, 
    
})

const restaurantSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    state: String,
    zip: Number,
    phone: { type: String, match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    required: true },
    menu: [menuSchema]
})


module.exports = mongoose.model("Restaurants", restaurantSchema)