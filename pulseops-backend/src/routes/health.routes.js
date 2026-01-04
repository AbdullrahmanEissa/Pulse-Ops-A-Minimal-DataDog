const router = require('express').Router()
const controller = require('../controllers/health.controller')

router.get('/health', controller.getHealth)
router.get('/incidents', controller.getIncidents)

module.exports = router
