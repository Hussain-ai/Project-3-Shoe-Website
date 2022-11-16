// We import the Model to communicate with the Database
const review = require('../models/review')

async function getAllreviews(req,res) {
    const allreviews = await review.find()
    res.json(allreviews)
}

async function createreview(req,res) {
    console.log('Req Body! ', req.body)
    // Method 3
    // review.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    review.create(req.body)
    .then(newreview => res.json(newreview))
    .catch(err => res.json(err))
    
    // Method 2
    // let newreview = await review.create({
    //     name: req.body.name,
    //     content: req.body.content
    // })
    // Method 1
    // let newreview = new review(
    //     name: req.body.name
    //     content: req.body.content
    // )
    // await newreview.save()
}

async function updatereview(req, res) {
    try {
    // await review.findOne({ _id: ... })
    let updatedreview = await review.findByIdAndUpdate(
        req.params._id,
        req.body //form body
        // {content: req.body.content}
    )
        res.status(200).json({message: 'review updated Successfully!'})
    // res.json(updatedreview)
    } catch (err) {
        res.json(err)
    }
}


async function deletereview(req,res) {
    try {
        await review.findByIdAndDelete(
            req.params._id
        )
        res.json({message: 'review Deleted Successfully'})
    } catch (err) {
        res.json(err)
    }
}


async function getreview(req,res) {
    try {
        const review = await review.findById(req.params._id)
        res.json(review)
    } catch (err) {
        res.json(err)
    }
}

// Exporting/Sharing our functions
module.exports = {
    getAllreviews,
    getreview,
    createreview,
    updatereview,
    deletereview
}




