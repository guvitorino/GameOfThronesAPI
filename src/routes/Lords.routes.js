const routes = require('express').Router()
const { celebrate, Segments, Joi } = require('celebrate')
const LordsController = require('../controllers/LordsController')

routes.get('/', LordsController.show)

routes.post('/', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    seasons: Joi.array().items(Joi.string())
  })
}), LordsController.create)

module.exports = routes
