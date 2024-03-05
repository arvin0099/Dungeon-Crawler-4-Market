const Items = require('../models/items')

const getMarketItems = async (req, res) => {
    try {
        const items = await Items.find({})
        res.render('market.ejs', {items})
        } catch (error) {
            console.log('test', error)
        }
}

const createMarketItems = async (req, res) => {
    try {
        res.render('new.ejs')
    } catch (error) {
        console.log('test', error)
    }
}

const createItem = async (req, res) => {
    try {
        const items = await Items.create(req.body)
        res.redirect('/create-item')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getMarketItems,
    createMarketItems,
    createItem
}