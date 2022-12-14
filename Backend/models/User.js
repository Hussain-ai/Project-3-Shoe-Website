const mongoose = require('mongoose')

const schema = mongoose.Schema


const UserModel = new schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    //Associate the tweet model
    product: [{
        type: schema.Types.ObjectId,
        ref: 'shop' 
        }]
}, {
    timestamps: true
})


//const User = mongoose.model('User', userschema)

const User = mongoose.model('User', UserModel)

module.exports = User   