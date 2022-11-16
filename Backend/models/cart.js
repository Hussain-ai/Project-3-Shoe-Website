const mongoose = require('mongoose')

const schema = mongoose.Schema


const carts = new schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    price: {type: String, required: true},
    size: [String],
    category: {type: String, required: true},
    img: [String],
    reviews: {type: String, required: false},
    //Associate the tweet model
    userid: [{
        type: schema.Types.ObjectId,
        ref: 'User'
        }]
}, {
    timestamps: true
})


const Prod = mongoose.model('cart', carts)

module.exports = Prod