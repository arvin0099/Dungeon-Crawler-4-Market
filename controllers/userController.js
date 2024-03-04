const express = require('express')
const app = express()
const Items = require('../models/items')

app.get('/market', (req, res) => {
    res.render('market.ejs')
})


module.exports = app