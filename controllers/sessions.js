const bcrypt = require('bcrypt')
const User = require('../models/user.js')

//Sources: Lesson
const newSession = async (req, res) => {
    try {
        res.render('index.ejs', {currentUser: req.session.currentUser}) 
    } catch (error) {
        console.log(error)
    }
}

const createSession = async (req, res) => {
    try {
        const foundUser = await User.findOne({ username: req.body.username })
        if (!foundUser) {
            res.send('<a  href="/">Username/Password not found - Click me to go back</a>')
        } else if (bcrypt.compareSync(req.body.password, foundUser.password)) {
            req.session.currentUser = foundUser
            res.redirect('/')
        } else {
            res.send('<a href="/">Username/Password not found - Click me to go back</a>')
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteSession = async (req, res) => {
    req.session.destroy(() => {
      res.redirect('/')
    })
  }

module.exports = {
    newSession,
    createSession,
    deleteSession    
}
