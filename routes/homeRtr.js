const router = require("express").Router()
const itemsController = require('../controllers/userController')

router.get('/', itemsController.getHomePage)

module.exports = router