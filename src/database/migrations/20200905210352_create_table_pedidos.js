exports.up = async (knex) =>
  knex.schema.createTable("pedidos", (table) => {
    table.increments("id");
    table.string("cliente", 50).notNullable();
    table.integer("quantidade").notNullable();
    table
      .integer("prato_id")
      .references("pratos.id")
      .notNullable()
      .onDelete("CASCADE");
    table
      .integer("status_id")
      .references("status.id")
      .notNullable()
      .onDelete("CASCADE");
  });

exports.down = async (knex) => knex.schema.dropTable("pedidos");
