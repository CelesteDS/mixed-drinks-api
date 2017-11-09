const routes = require('express').Router();
const bodyParser = require('body-parser');
const ingredients = require('./ingredients');
const cocktails = require('./cocktails');

routes.use(bodyParser.json());
routes.use(bodyParser.urlencoded({ extended: true }));

routes.use('/api/ingredients', ingredients);
routes.use('/api/cocktails', cocktails);

routes.

module.exports = routes;
