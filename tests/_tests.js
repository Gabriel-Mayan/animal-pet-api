const knex = require('../knexfile');

const testDuplicatedUsers = async (userName) => {
  const usuario = await knex('users').where({ userName }).first();
  return usuario;
};

const testDuplicatedProducts = async (productName) => {
  const usuario = await knex('products').where({ productName }).first();
  return usuario;
};
const testPasswords = async (password) => {
  const regExTests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!|@|#|$|%|&|*|(|)|-|_|+|=|^]/];
  const passwordTest = regExTests.map((validate) => validate.test(password));
  return passwordTest.every((pwd) => pwd);
};

const testUserNameEqualAdminName = async (userName) => {
  const test = userName === process.env.SUPER_ADMIN_USERNAME;
  return test;
};

module.exports = {
 testDuplicatedUsers, testPasswords, testDuplicatedProducts, testUserNameEqualAdminName,
};
