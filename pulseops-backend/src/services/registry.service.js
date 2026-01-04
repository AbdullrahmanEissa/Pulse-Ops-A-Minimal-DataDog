const services = []

exports.add = (data) => {
  const service = {
    id: Date.now().toString(),
    name: data.name,
    url: data.url,
    interval: data.interval || 10000,
    timeout: data.timeout || 3000,
    status: 'UNKNOWN',
    lastChecked: null
  }

  services.push(service)
  return service
}

exports.getAll = () => services

