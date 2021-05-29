const routes = require('express').Router()

const houseRoutes = require('../routes/House.routes')
const lordsRoutes = require('../routes/Lords.routes')

routes.use('/', houseRoutes)
routes.use('/lord', lordsRoutes)

module.exports = routes
