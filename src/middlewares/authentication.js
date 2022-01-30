const { validateToken } = require('../helpers/handleToken');
const { clearUserObject } = require('../helpers/utils');
const { findOneBy } = require('../helpers/handleKnex');

const authentication = async (request, response, next) => {
  try {
    const { authorization } = request.headers;

    if (!authorization) {
      return response.status(400).json('Você não possui autorização para prosseguir.');
    }

    const token = authorization.replace('Bearer', '').trim();
    const tokenInfo = await validateToken(token);

    const { id, userName, userType } = tokenInfo;

    const user = await findOneBy('users', { id, userName, userType });

    if (!user) {
      return response.status(404).json('Token inválido');
    }

    const userData = clearUserObject(user);
    request.user = userData;
    next();
  } catch (error) {
    return response.status(400).json('Auth Error');
  }
};

module.exports = authentication;
