const router = require("express").Router()
const itemsController = require('../controllers/itemController')
const isAuthenticated = require('../controllers/authController')

router.use(isAuthenticated)

router.get('/create-item', itemsController.createMarketItems)
router.get('/items/edit/:itemId', itemsController.editItem)
router.get('/item-list', itemsController.editItemList)
router.get('/inventory', itemsController.getInventory)
router.post('/create-new/', itemsController.createItem)
router.post('/market', itemsController.buyItem)
router.put('/items/edit/:itemId', itemsController.editItemfin)
router.delete('/items/delete/:itemId', itemsController.deleteItem)


module.exports = router