const { Router } = require('express');

const { login } = require('./controllers/login');
const { createUser } = require('./controllers/users');
const { getProducts } = require('./controllers/products');

const { loginSchema } = require('./validations/loginSchema');
const { createUserSchema } = require('./validations/userSchema');

const validateRequest = require('./middlewares/validateRequest');

const routes = Router();

routes.get('/products', getProducts);

routes.post('/login', validateRequest(loginSchema), login);
routes.post('/create-user', validateRequest(createUserSchema), createUser);

module.exports = routes;
