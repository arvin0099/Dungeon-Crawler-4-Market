const router = require("express").Router()
const itemsController = require('../controllers/itemController')

router.get('/market', itemsController.getMarketItems)

module.exports = router