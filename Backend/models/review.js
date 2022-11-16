const mongoose = require('mongoose')

const Schema = mongoose.Schema
//Creating our review Schema
const reviewModel = new Schema({
    name: {type: String, required: true},
    content: {type: String, required: true}
}, {
    timestamps: true
})
//Storing our Schema as a model
const review = mongoose.model('review', reviewModel)
// Exporting our Model 
module.exports = review;


