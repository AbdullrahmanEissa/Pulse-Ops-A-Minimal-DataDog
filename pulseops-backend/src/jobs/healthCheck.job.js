const checker = require('../services/checker.service')

setInterval(() => {
  checker.run()
}, 10000)
