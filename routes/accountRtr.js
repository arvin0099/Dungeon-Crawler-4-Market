const router = require("express").Router()
const itemsController = require('../controllers/userController')

router.get('/account', itemsController.getAccountPage)
router.get('/delete', itemsController.deletePage)

module.exports = router