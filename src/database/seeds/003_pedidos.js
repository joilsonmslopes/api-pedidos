
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('pedidos').del()
    .then(function () {
      // Inserts seed entries
      return knex('pedidos').insert([
        {cliente: 'João', quantidade: 1, prato_id: 1, status_id: 1},
        {cliente: 'Pedro', quantidade: 1, prato_id: 2, status_id: 2}
      ]);
    });
};
