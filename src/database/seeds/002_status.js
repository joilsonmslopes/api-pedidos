
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('status').del()
    .then(function () {
      // Inserts seed entries
      return knex('status').insert([
        {nome: 'Início'},
        {nome: 'Executando'},
        {nome: 'Pronto'},
        {nome: 'Entregue'}
      ]);
    });
};
