require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const session = require('express-session')


const mongoURI = process.env.MONGODB_URI

mongoose.connect(mongoURI)
const db = mongoose.connection

db.on('connected', () => console.log(`Connceted to MongoDB at ${db.host}:${db.port}`))
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
    console.log('Connected successfully to MongoDB')
})

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.use(
    session({
      secret: process.env.SECRET,
      resave: false,
      saveUninitialized: false
    })
)
  

const marketRouter = require('./routes/marketRtr')
const homeRouter = require('./routes/homeRtr')
const accRouter = require('./routes/accountRtr')
const itemRouter = require('./routes/itemRtr')
const sessionsController = require('./routes/sessionRtr')


// added /market here before and had me scratching my head on how to fix it, chatGPT wasn't of any help in terms of functionality it there wasn't an error I was just going to the wrong address.
app.use('/', sessionsController)
app.use('/', marketRouter)
app.use('/', homeRouter)
app.use('/', accRouter)
app.use('/', itemRouter)

app.listen(PORT, () => {
    console.log('Server Running')
})