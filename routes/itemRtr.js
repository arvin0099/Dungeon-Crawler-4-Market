const router = require("express").Router()
const itemsController = require('../controllers/itemController')

router.get('/create-item', itemsController.createMarketItems)

router.post('/create-new/', itemsController.createItem)

module.exports = router