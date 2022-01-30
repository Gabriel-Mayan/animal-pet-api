const knex = require('../../knexfile');

const findOneBy = async (table, conditons) => {
  await knex(table).where(conditons).first();
};

module.exports = { findOneBy };
