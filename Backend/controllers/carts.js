// We import the Model to communicate with the Database
const { default: cart } = require('../models/cart')
const prd = require('../models/cart')

async function getAllcart(req,res) {
    const allprdct = await cart.find()
    res.json(allprdct)
}

async function addcart(req,res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    prd.create(req.body)
    .then(newcart => res.json(newcart))
    .catch(err => res.json(err))
    
    // Method 2
    // let newTweet = await Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // Method 1
    // let newTweet = new Tweet(
    //     name: req.body.name
    //     content: req.body.content
    // )
    // await newTweet.save()
}

async function updatecart(req, res) {
    try {
    // await Tweet.findOne({ _id: ... })
    let updatedcart = await Tweet.findByIdAndUpdate(
        req.params._id,
        req.body //form body
        // {content: req.body.content}
    )
        res.status(200).json({message: 'cart updated Successfully!'})
    // res.json(updatedTweet)
    } catch (err) {
        res.json(err)
    }
}


async function deletecart(req,res) {
    try {
        await cart.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'cart Deleted Successfully'})
    } catch (err) {
        res.json(err)
    }
}


async function getcart(req,res) {
    try {
        const cart = await cart.findById(req.params._id)
        res.json(tweet)
    } catch (err) {
        res.json(err)
    }
}

// Exporting/Sharing our functions
module.exports = {
    getAllcart,
    getcart,
    addcart,
    updatecart,
    deletecart
}