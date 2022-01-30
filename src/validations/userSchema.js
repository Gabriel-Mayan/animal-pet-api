const yup = require('yup');
const { testDuplicatedUsers, testPasswords, testUserNameEqualAdminName } = require('../../tests/_tests');

const createUserSchema = yup.object().shape({
  userName: yup
    .string()
    .strict()
    .required()
    .test('equal', 'Nome de usuario inválido, escolha outro', (userName) => testUserNameEqualAdminName(userName))
    .test('equal', 'Nome de usuario invalido, escolha outro', async (userName) => {
      const user = await testDuplicatedUsers(userName);
      return !user;
    }),

  phone: yup
    .string()
    .strict()
    .required(),

  email: yup
    .string()
    .strict()
    .email()
    .required(),

  password: yup
    .string()
    .strict()
    .required()
    .test('equal', 'A senha deve conter caracteres maiusculos, minusculos e especiais', (pwd) => testPasswords(pwd)),

  confimPassword: yup
    .string()
    .strict()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords do not match'),

  fullName: yup
    .string()
    .strict()
    .required(),

  address: yup
    .string()
    .strict()
    .required(),
});

module.exports = {
  createUserSchema,
};
