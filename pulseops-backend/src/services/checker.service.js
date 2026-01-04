const axios = require('axios')
const registry = require('./registry.service')
const incidents = require('./incident.service')

exports.run = async () => {
  for (const service of registry.getAll()) {
    const start = Date.now()
    try {
      await axios.get(service.url, { timeout: service.timeout })
      const latency = Date.now() - start

      const newStatus = latency > service.timeout ? 'DEGRADED' : 'UP'

      if (service.status !== newStatus) {
        incidents.create(service, newStatus, 'Status change detected')
      }

      service.status = newStatus
      service.lastChecked = new Date().toISOString()
    } catch (err) {
      if (service.status !== 'DOWN') {
        incidents.create(service, 'DOWN', err.message)
      }
      service.status = 'DOWN'
      service.lastChecked = new Date().toISOString()
    }
  }
}
