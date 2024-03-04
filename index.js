require('dotenv').config()
const exp = require('constants')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
// const Items = require('./items')
const userAccount = require('./models/User.js')
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(mongoURI)

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')


// const testItem = {
//     id: "001",
//     name: "Sword",
//     class: "Weapon",
//     img: "http://img.pokemondb.net/artwork/bulbasaur.jpg",
//     price: 100,
//     power: 200
// }

// const createItem = async (tItem) => {
//     try {
//         const items = await Items.create(tItem)
//     } catch (error) {
//         console.log(error)
//     } finally {

//     }
// }

// createItem(testItem)

app.get('/home', (req, res) => {
    res.render('index.ejs', {

    })
})

app.use('/market', require('./controllers/userController.js'))



// app.get('/market', (req, res) => {
//     res.render('market.ejs', {
//         Items: items
//     })
// })

app.get('/account', (req, res) => {
    res.render('account.ejs', {

    })
})

app.get('/delete', (req, res) => {
    res.render('deleteacc.ejs', {

    })
})

app.post('/account', (req, res) => {
    const newAccount = {
        username: req.body.username,
        password: req.body.password,
        gold: 3000,
        inventory: [],
    }
    userAccount.push(newAccount)
    console.log(userAccount)
    res.redirect('/home')
})

app.listen(port, () => {
    console.log('Server Running')
})