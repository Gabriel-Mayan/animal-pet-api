exports.up = async function (knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id');
    table.string('fullName', 255).notNullable();
    table.string('userName', 30).unique().notNullable();
    table.string('email', 255).notNullable();
    table.string('password', 255).notNullable();
    table.string('phone', 20).notNullable();
    table.string('address', 255).notNullable();
    table.string('userType', 15).notNullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('updatedAt').nullable();
    table.timestamp('deletedAt').nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
