const router = require("express").Router()
const userController = require('../controllers/userController')
const isAuthenticated = require('../controllers/authController')


router.get('/account', userController.getAccountPage)
router.get('/delete', userController.deletePage)
router.get('/new-account', userController.newAccpage)
router.post('/new-account', userController.newPassword)
router.use(isAuthenticated)
router.post('/upgrade-account', userController.accSuperUpgrade)

module.exports = router