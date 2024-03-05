const router = require("express").Router()
const itemsController = require('../controllers/userController')

router.get('/home', itemsController.getHomePage)

module.exports = router