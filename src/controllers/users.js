const { insertInfo } = require('../helpers/handleKnex');
const { clearUserObject } = require('../helpers/utils');
const { generateToken } = require('../helpers/handleToken');
const { encryptPassword } = require('../helpers/handlePassword');

const createUser = async (requst, response) => {
  const {
    userName, phone, email, password, fullName, address,
  } = requst.body;

  const encryptedPassword = await encryptPassword(password);

  const newUser = await insertInfo('users', {
    userName, phone, email, password: encryptedPassword, fullName, address, userType: 'User',
  });

  if (!newUser) {
    return response.status(400).json('Não foi possível cadastrar o usuario');
  }

  const user = clearUserObject(newUser);
  const message = 'Usuario cadastrado com sucesso!';
  const token = await generateToken({ id: newUser.id, userName, userType: newUser.userType });

  return response.status(200).json({ message, token, user });
};

module.exports = { createUser };
