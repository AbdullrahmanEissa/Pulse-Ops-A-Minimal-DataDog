require('dotenv').config()
const app = require('./app')
require('./jobs/healthCheck.job')

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`)
})
