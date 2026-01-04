const express = require('express')
const servicesRoutes = require('./routes/services.routes')
const healthRoutes = require('./routes/health.routes')

const app = express()
app.use(express.json())

app.use('/api/services', servicesRoutes)
app.use('/api', healthRoutes)

module.exports = app
