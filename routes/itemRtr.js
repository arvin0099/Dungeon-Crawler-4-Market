const router = require("express").Router()
const itemsController = require('../controllers/itemController')

router.get('/create-item', itemsController.createMarketItems)

router.get('/items/edit/:itemId', itemsController.editItem)

router.get('/item-list', itemsController.editItemList)

router.post('/create-new/', itemsController.createItem)

router.put('/items/edit/:itemId', itemsController.editItemfin)

router.delete('/items/delete/:itemId', itemsController.deleteItem)

module.exports = router