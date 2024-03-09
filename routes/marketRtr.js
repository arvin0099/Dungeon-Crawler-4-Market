const router = require("express").Router()
const itemsController = require('../controllers/itemController')

router.get('/market', itemsController.getMarketItems)
router.get('/item/:itemId', itemsController.getItemInfo)

module.exports = router