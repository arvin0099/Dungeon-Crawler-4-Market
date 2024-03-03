const exp = require('constants')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const items = require('./models/items.js')
const methodOverride = require('method-override')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

app.get('/home', (req, res) => {
    res.render('index.ejs', {

    })
})

app.get('/market', (req, res) => {
    res.render('market.ejs', {
        items: items
    })
})

app.get('/account', (req, res) => {
    res.render('account.ejs', {

    })
})

app.get('/delete', (req, res) => {
    res.render('deleteacc.ejs', {

    })
})

app.listen(port, () => {
    console.log('Server Running')
})