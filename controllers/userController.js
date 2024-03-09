const {User, Review} = require('../models/user')
const Items = require('../models/items')
const bcrypt = require('bcrypt')

const newPassword = async (req, res) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        const newUser = await User.create(req.body)
        console.log(newUser)
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
}

const accSuperUpgrade = async (req, res) => {
    try {
        const userId = req.session.currentUser._id
        const updatedUser = await User.findByIdAndUpdate(userId, 
            { $set: { superUser: true } },
            //I didn't know that you need this thing below to get an update immediately
            { new: true }
            )
        req.session.currentUser = updatedUser
        res.redirect('/account')
    } catch (error) {
        console.log(error)
    }
}

const getHomePage = async (req, res) => {
    try {
        res.render('index.ejs', {currentUser: req.session.currentUser})
    } catch (error) {
        console.log('test', error)
    }
}

const getAccountPage = async (req, res) => {
    try {
        res.render('account.ejs', {currentUser: req.session.currentUser})
    } catch (error) {
        console.log('test', error)
    }
}

const deletePage = async (req, res) => {
    try {
        res.render('deleteacc.ejs', {currentUser: req.session.currentUser})
    } catch (error) {
        console.log(error)
    }
}

const newAccpage = async (req, res) => {
    try {
        res.render('newacc.ejs', {currentUser: req.session.currentUser})
    } catch (error) {
        console.log(error)
    }
}

const postReview = async (req, res) => {
    try {
        const itemId = req.body.item;
        await Review.create(req.body)
        // await currentUser.save()
        // req.session.currentUser = currentUser
        res.redirect(`/item/${itemId}`)
    } catch (error) {
        console.log(error)
    }
}

const editReview = async (req, res) => {
    try {
        const userId = req.params.userId
        const revId = req.params.revId
        const itemId = req.params.itemId
        const items = await Items.findById(itemId)
        const review = await Review.find()
        const user = await User.find({})
        res.render('editreview.ejs', {itemId,items,userId,revId, review ,user , currentUser: req.session.currentUser})
    } catch (error) {
        console.log(error)
    }
}

const editRevF = async (req, res) => {
    try {
        const { revId, itemId } = req.params
        const updatedRev = await Review.findByIdAndUpdate(
            revId, 
            { $set: { text: req.body.text } },
            { new: true })
        res.redirect(`/item/${itemId}`)
    } catch (error) {
        console.log(error)
    }
}


const deleteReview = async (req, res) => {
    try {
        const { revId, itemId } = req.params
        await Review.findByIdAndDelete(revId)
        res.redirect(`/item/${itemId}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getHomePage,
    getAccountPage,
    deletePage,
    newPassword,
    newAccpage,
    accSuperUpgrade,
    deleteReview,
    editReview,
    postReview,
    editRevF
}
