const knex = require('../services/knex');

const findOneBy = async (table, conditons) => {
  const info = await knex(table).where(conditons).first();
  return info;
};

const insertInfo = async (table, values) => {
  const insertedInfo = await knex(table).insert(values).returning('*');
  return insertedInfo;
};

module.exports = { findOneBy, insertInfo };
