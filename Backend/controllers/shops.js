// We import the Model to communicate with the Database
const { default: shop } = require('../models/shop')
const prd = require('../models/shop')

async function getAllshop(req,res) {
    const allprdct = await shop.find()
    res.json(allprdct)
}

async function addshop(req,res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // Tweet.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    prd.create(req.body)
    .then(newshop => res.json(newshop))
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

async function updateshop(req, res) {
    try {
    // await Tweet.findOne({ _id: ... })
    let updatedshop = await Tweet.findByIdAndUpdate(
        req.params._id,
        req.body //form body
        // {content: req.body.content}
    )
        res.status(200).json({message: 'shop updated Successfully!'})
    // res.json(updatedTweet)
    } catch (err) {
        res.json(err)
    }
}


async function deleteshop(req,res) {
    try {
        await shop.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'shop Deleted Successfully'})
    } catch (err) {
        res.json(err)
    }
}


async function getshop(req,res) {
    try {
        const shop = await shop.findById(req.params._id)
        res.json(tweet)
    } catch (err) {
        res.json(err)
    }
}

// Exporting/Sharing our functions
module.exports = {
    getAllshop,
    getshop,
    addshop,
    updateshop,
    deleteshop
}