const router = require("express").Router()
const sessionController = require('../controllers/sessions')

router.get('/new', sessionController.newSession)
router.post('/new', sessionController.createSession)
router.delete('/new', sessionController.deleteSession)

module.exports = router