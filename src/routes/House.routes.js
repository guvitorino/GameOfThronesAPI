const routes = require('express').Router()

const HousesController = require('../controllers/HousesController')

routes.get('/', HousesController.show)

module.exports = routes
