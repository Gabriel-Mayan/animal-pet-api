const yup = require('yup');
const { testPasswords, testLogin } = require('../../tests/_tests');

const loginSchema = yup.object().shape({
  userName: yup
    .string()
    .strict()
    .required()
    .test('equal', 'Usuario não encontrado', async (userName) => {
      const test = await testLogin(userName);
      return test;
    }),

  password: yup
    .string()
    .strict()
    .required()
    .test('equal', 'Senha Inválida', (pwd) => testPasswords(pwd)),
});

module.exports = {
  loginSchema,
};
