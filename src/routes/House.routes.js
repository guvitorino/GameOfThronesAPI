const routes = require('express').Router()
const { celebrate, Segments, Joi } = require('celebrate')

const HousesController = require('../controllers/HousesController')

routes.get('/list', HousesController.show)

routes.get('/search', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    name: Joi.string(),
    id: Joi.string().uuid()
  })
}), HousesController.search)

routes.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    region: Joi.string().required(),
    foundation_year: Joi.string().required(),
    current_lord: Joi.string().uuid()
  })
}), HousesController.create)

module.exports = routes
