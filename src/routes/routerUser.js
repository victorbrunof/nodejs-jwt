const express = require('express')
const Router = express.Router()
const controllerUser = require('../controllers/controllersUser')

Router.post('/auth/login', controllerUser.login)
Router.post('/auth/register', controllerUser.register)
Router.get('/auth/getUser', controllerUser.getUsers)
Router.get('/auth', controllerUser.check)
Router.get('/privateRoute/:id', controllerUser.checkAuth)

module.exports = Router