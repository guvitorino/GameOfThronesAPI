require('dotenv/config')
const winston = require('winston')

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'all.json' })
  ]
})

module.exports = logger
