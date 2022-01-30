const yup = require('yup');
const { testDuplicatedProducts } = require('./_tests');

const createProductSchema = yup.object().shape({
  productName: yup
    .string()
    .strict()
    .required()
    .test('equal', 'Já existe um produto cadastrado com esse nome', async (productName) => {
      const product = await testDuplicatedProducts(productName);
      return !product;
    }),

  description: yup
    .string()
    .strict()
    .required(),

  price: yup
    .number()
    .strict()
    .positive()
    .required(),

  estoque: yup
    .number()
    .strict()
    .positive(),

  image: yup
    .string()
    .strict()
    .url(),
});

module.exports = {
  createProductSchema,
};
