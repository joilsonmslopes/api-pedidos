
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pratos').del()
    .then(function () {
      // Inserts seed entries
      return knex('pratos').insert([
        {nome: "Feijoada Pequena", serve_pessoas: 1, valor: 20.90},
        {nome: "Feijoada Média", serve_pessoas: 2, valor: 25.90},
        {nome: "Feijoada Grande", serve_pessoas: 1, valor: 30.90},
        {nome: "Macarrão a Bolonhesa", serve_pessoas: 1, valor: 21.90},
      ]);
    });
};
