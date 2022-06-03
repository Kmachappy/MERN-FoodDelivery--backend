const mongoose = require('mongoose')


const paymentSchema = new mongoose.Schema({
    require: false,
    cardType: { type: String, required: true },
    cardNumber: { type: Number, required: true },
    expiration: { type: Number,  require: true},
    cvv: { type: Number, required: true },
    paymentName: { type: String, required: true }
})


const userSchema = new mongoose.Schema({
    user_id: String,
    name: { type: String},
    password: { type: String},
    email: { type: String },
    phone: { type: String, match:/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/ },
    address: { type: String  },
    city: { type: String },
    zip: { type: String },
    payment: [paymentSchema],
    image: {type: String}

})

module.exports = mongoose.model("User", userSchema)