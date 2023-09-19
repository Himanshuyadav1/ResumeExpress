const express = require('express');
const route = express.Router();
//Import controls
const homeController = require('../controllers/homeController');
const servicesController = require('../controllers/servicesController');
const skillsController = require('../controllers/skillsController');
const contactController = require('../controllers/contactController');

// Routes for resume
route.get('/', homeController)
route.get('/services', servicesController)
route.get('/skills', skillsController)
route.get('/contact', contactController)

module.exports = route;