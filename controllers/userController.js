const User = require('../models/user')
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

module.exports = {
    getHomePage,
    getAccountPage,
    deletePage,
    newPassword,
    newAccpage,
    accSuperUpgrade
}

