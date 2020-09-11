exports.up = async (knex) =>
  knex.schema.createTable("status", (table) => {
    table.increments("id");
    table.string("nome").notNullable();
  });

exports.down = async (knex) => knex.schema.dropTable("status");
