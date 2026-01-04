const registry = require('../services/registry.service')
const incidents = require('../services/incident.service')

exports.getHealth = (req, res) => {
  res.json(registry.getAll())
}

exports.getIncidents = (req, res) => {
  res.json(incidents.getAll())
}
