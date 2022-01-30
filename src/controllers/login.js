const { findOneBy } = require('../helpers/handleKnex');
const { clearUserObject } = require('../helpers/utils');
const { generateToken } = require('../helpers/handleToken');
const { comparePasswords } = require('../helpers/handlePassword');

async function login(request, response) {
  const { userName, password } = request.body;

  const registeredUser = await findOneBy('users', { userName });
  const verifiedPassword = await comparePasswords(password, registeredUser.password);

  if (!verifiedPassword) {
    return response.status(400).json('Usuário ou senha inválidos');
  }

  const user = clearUserObject(registeredUser);
  const token = await generateToken({ id: user.id, userName, userType: user.userType });

  return response.status(200).json({ user, token });
}

module.exports = { login };
