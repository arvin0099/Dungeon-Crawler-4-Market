require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const methodOverride = require('method-override')
const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('Connected successfully to MongoDB')
})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

const marketRouter = require('./routes/marketRtr')
const homeRouter = require('./routes/homeRtr')
const accRouter = require('./routes/accountRtr')
const itemRouter = require('./routes/itemRtr')
// added /market here before and had me scratching my head on how to fix it chatGPT wasn't of any help.
app.use('/', marketRouter)
app.use('/', homeRouter)
app.use('/', accRouter)
app.use('/', itemRouter)

// app.post('/account', (req, res) => {
//     const newAccount = {
//         username: req.body.username,
//         password: req.body.password,
//         gold: 3000,
//         inventory: [],
//     }
//     userAccount.push(newAccount)
//     console.log(userAccount)
//     res.redirect('/home')
// })

app.listen(port, () => {
    console.log('Server Running')
})