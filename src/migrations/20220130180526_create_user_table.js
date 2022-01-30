exports.up = async function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id');
    table.string('fullName', 255).notNullable();
    table.string('userName', 30).unique().notNullable();
    table.string('email', 255).unique().notNullable();
    table.string('password', 255).notNullable();
    table.string('phone', 20).notNullable();
    table.string('address', 255).notNullable();
    table.date('createdAt').notNullable();
    table.date('updatedAt').nullable();
    table.date('deletedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
