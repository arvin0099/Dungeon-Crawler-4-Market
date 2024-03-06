const router = require("express").Router()
const userController = require('../controllers/userController')

router.get('/account', userController.getAccountPage)
router.get('/delete', userController.deletePage)
router.post('/new-account', userController.newPassword)

module.exports = router