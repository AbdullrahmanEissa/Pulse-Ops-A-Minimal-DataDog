const incidents = []

exports.create = (service, status, reason) => {
  incidents.push({
    serviceId: service.id,
    serviceName: service.name,
    status,
    reason,
    timestamp: new Date().toISOString()
  })
}

exports.getAll = () => incidents
