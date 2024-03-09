const {User, Review} = require('../models/user')
const Items = require('../models/items')

const getMarketItems = async (req, res) => {
    try {
        const items = await Items.find({})
        res.render('market.ejs', {
            items,
            currentUser: req.session.currentUser
        })
        } catch (error) {
            console.log('test', error)
        }
}

const getInventory = async (req, res) => {
    try {
        const items = await Items.find({})
        res.render('inventory.ejs', {
            items,
            currentUser: req.session.currentUser
        })
    } catch (error) {
        console.log(error)
    }
}

const createMarketItems = async (req, res) => {
    try {
        res.render('new.ejs', {currentUser: req.session.currentUser})
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
        res.render('edit.ejs', {items, currentUser: req.session.currentUser})
    } catch (error) {
        console.log(error)
    }
}

const editItemList = async (req, res) => {
    try {
        const items = await Items.find({})
        res.render('itemList.ejs', {
            items,
            currentUser: req.session.currentUser})
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

const deleteItem = async (req, res) => {
    try {
        await Items.findByIdAndDelete(req.params.itemId)
        res.redirect('/item-list')
    } catch (error) {
        console.log(error)
    }
}

//this code was so hard for me took some research and chatGPT to debug
const buyItem = async (req, res) => {
    try {
        const itemName = req.body.itemName
        const currentUserId = req.session.currentUser._id
        const item = await Items.findOne({ name: itemName })
        const currentUser = await User.findById(currentUserId)

        if (item) {
            if (currentUser.gold >= item.price) {
                //got this code below
                const inventoryItem = currentUser.inventory.find((invItem) => invItem.itemName === itemName)
                //end code
                if (inventoryItem) {
                    inventoryItem.itemCount += 1
                } else {
                    currentUser.inventory.push({ itemName: itemName, itemCount: 1 })
                }
                currentUser.gold -= item.price
                //Previously I have bugs without the codes below, the code below helped me save to my DB and update as soon as I click buy
                await currentUser.save()
                req.session.currentUser = currentUser
                return res.redirect('/market')
            } else {
                console.log('not enough gold')
            } 
        } else {
            console.log('item not found')
        }
    } catch (error) {
        console.log(error)
    }
}

const getItemInfo = async (req, res) => {
    try {
        const itemId = req.params.itemId;
        const items = await Items.findById(itemId)
        const review = await Review.find({})
        const user = await User.find({})
        res.render('iteminfo.ejs', {itemId,items, review ,user , currentUser: req.session.currentUser})
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
    editItemfin,
    deleteItem,
    getInventory,
    buyItem,
    getItemInfo
}