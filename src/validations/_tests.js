const knex = require('../../knexfile');

const testDuplicatedUsers = async (userName) => {
  const usuario = await knex('usuarios').where({ userName }).first();
  return usuario;
};

const testDuplicatedProducts = async (productName) => {
  const usuario = await knex('produtos').where({ productName }).first();
  return usuario;
};

const testPasswords = async (password) => {
  const regExTests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!|@|#|$|%|&|*|(|)|-|_|+|=|^]/];
  const passwordTest = regExTests.map((validate) => validate.test(password));
  return passwordTest.every((pwd) => pwd);
};

module.exports = { testDuplicatedUsers, testPasswords, testDuplicatedProducts };
