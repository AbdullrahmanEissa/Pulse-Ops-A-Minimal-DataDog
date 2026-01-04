const router = require('express').Router()
const controller = require('../controllers/services.controller')

router.post('/', controller.createService)
router.get('/', controller.getServices)

module.exports = router
