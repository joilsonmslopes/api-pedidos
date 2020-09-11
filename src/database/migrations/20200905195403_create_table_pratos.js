exports.up = async (knex) =>
  knex.schema.createTable("pratos", (table) => {
    table.increments("id");
    table.string("nome", 30).unique().notNullable();
    table.integer("serve_pessoas").notNullable();
    table.float("valor").notNullable();
  });

exports.down = async (knex) => knex.schema.dropTable("pratos");
