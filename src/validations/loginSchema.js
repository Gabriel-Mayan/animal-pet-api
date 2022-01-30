const yup = require('yup');
const { testPasswords, testLogin } = require('../../tests/index');

const loginSchema = yup.object().shape({
  userName: yup
    .string()
    .strict()
    .required()
    .test('equal', 'Login ou senha invalidos', async (userName) => {
      const test = await testLogin(userName);
      return test;
    }),

  password: yup
    .string()
    .strict()
    .required()
    .test('equal', 'Login ou senha invalidos', (pwd) => testPasswords(pwd)),
});

module.exports = {
  loginSchema,
};
