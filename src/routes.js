const express = require('express');

const VictimsController = require('./controllers/VictimsController');

const routes = express.Router();

const victimsController = new VictimsController();

routes.get('/victims', victimsController.index);
routes.get('/victims/:id', victimsController.show);
routes.post('/victims', victimsController.create);
routes.delete('/victims/:id', victimsController.delete);

module.exports = routes;
