const { findOneBy } = require('../src/helpers/handleKnex');

const testDuplicatedUsers = async (userName) => {
  const usuario = await findOneBy('users', { userName });
  return usuario;
};

const testDuplicatedProducts = async (productName) => {
  const produtos = await findOneBy('products', { productName });
  return produtos;
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
