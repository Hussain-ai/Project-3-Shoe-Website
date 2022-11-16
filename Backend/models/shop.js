const mongoose = require('mongoose')

const schema = mongoose.Schema

const shops = new schema({
    name: {type: String, required: true},
    desc: {type: String, required: true},
    price: {type: String, required: true},
    size: [String],
    category: {type: String, required: true},
    img: {type: String, required: true},
    reviews: {type: String, required: false},
    //Associate the tweet model
    userid: [{
        type: schema.Types.ObjectId,
        ref: 'User'
        }]
}, {
    timestamps: true
})

const shop = mongoose.model('shop', shops)

module.exports = shop