const routes = require('express').Router()
const { celebrate, Segments, Joi } = require('celebrate')

const HousesController = require('../controllers/HousesController')

routes.get('/', HousesController.show)

routes.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    region: Joi.string().required(),
    foundation_year: Joi.string().required(),
    current_lord: Joi.string().uuid()
  })
}), HousesController.create)

module.exports = routes
