const { getInfoPaginated } = require('../helpers/handleKnex');

const getProducts = (request, response) => {
  try {
    const { page, pageSize } = request.params;

    const conditions = { deletedAt: false };
    const products = getInfoPaginated('products', conditions, page, pageSize);

    return response.status(200).json(products);
  } catch (error) {
    return response.status(400).json('Não existem produtos em estoque');
  }
};

module.exports = { getProducts };
