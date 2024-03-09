const router = require("express").Router()
const userController = require('../controllers/userController')
const isAuthenticated = require('../controllers/authController')


router.get('/account', userController.getAccountPage)
router.get('/delete', userController.deletePage)
router.get('/new-account', userController.newAccpage)
router.post('/new-account', userController.newPassword)
router.use(isAuthenticated)
router.get('/review/:userId/:revId/:itemId', userController.editReview)
router.put('/rev/edit/:revId/:itemId', userController.editRevF)
router.delete('/rev/delete/:revId/:itemId', userController.deleteReview)
router.post('/upgrade-account', userController.accSuperUpgrade)
router.post('/new-post/', userController.postReview)

module.exports = router