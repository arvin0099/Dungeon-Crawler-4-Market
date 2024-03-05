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
        await Items.create(req.body)
        res.redirect('/create-item')
    } catch (error) {
        console.log(error)
    }
}

const editItem = async (req, res) => {
    try {
        const items = await Items.findById(req.params.itemId)
        res.render('edit.ejs', {items})
    } catch (error) {
        console.log(error)
    }
}

const editItemList = async (req, res) => {
    try {
        const items = await Items.find({})
        res.render('itemList.ejs', {items})
    } catch (error) {
        console.log(error)
    }
}

const editItemfin = async (req, res) => {
    try {
        await Items.findByIdAndUpdate(req.params.itemId, req.body)
        res.redirect('/item-list')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getMarketItems,
    createMarketItems,
    createItem,
    editItem,
    editItemList,
    editItemfin
}