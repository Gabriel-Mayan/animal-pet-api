exports.up = async function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.uuid('id');
    table.string('productName', 255).unique().notNullable();
    table.text('description').notNullable();
    table.integer('price').notNullable();
    table.integer('estoque').defaultTo(0).notNullable();
    table.string('image', 20).nullable();
    table.date('createdAt').notNullable();
    table.date('updatedAt').nullable();
    table.date('deletedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('products');
};
