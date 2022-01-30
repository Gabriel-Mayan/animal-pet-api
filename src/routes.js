const { Router } = require('express');

const routes = Router();

routes.get('/', (_, response) => response.status(200).json({ message: 'hi 😎' }));

module.exports = routes;
