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

const testFullName = async (fullName) => {
  const regExTests = [/[0-9]/, /[!|@|#|$|%|&|*|(|)|-|_|+|=|^]/];
  const fullNameTest = regExTests.map((validate) => validate.test(fullName));
  return fullNameTest.every((name) => !name);
};

const testUserNameEqualAdminName = async (userName) => {
  const test = userName === process.env.SUPER_ADMIN_USERNAME;
  return !test;
};

const testLogin = async (userName) => {
  const usuario = await findOneBy('users', { userName });
  const testUser = !(!usuario || usuario.deletedAt);
  return testUser;
};

module.exports = {
  testLogin,
  testFullName,
  testPasswords,
  testDuplicatedUsers,
  testDuplicatedProducts,
  testUserNameEqualAdminName,
};
