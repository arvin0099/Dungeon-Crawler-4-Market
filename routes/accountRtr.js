const router = require("express").Router()
const itemsController = require('../controllers/userController')

router.get('/account', itemsController.getAccountPage)

module.exports = router