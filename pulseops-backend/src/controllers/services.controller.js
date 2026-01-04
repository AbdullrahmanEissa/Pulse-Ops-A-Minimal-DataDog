const registry = require('../services/registry.service')

exports.createService = (req, res) => {
  const service = registry.add(req.body)
  res.status(201).json(service)
}

exports.getServices = (req, res) => {
  res.json(registry.getAll())
}
