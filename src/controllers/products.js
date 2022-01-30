const { getInfoPaginated } = require('../helpers/handleKnex');

const getProducts = (request, response) => {
  const { page, pageSize } = request.params;

  const conditions = { deletedAt: false };
  const products = getInfoPaginated('products', conditions, page, pageSize);

  return response.status(200).json(products);
};

module.exports = { getProducts };
