
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('departamentos').del()
    .then(function () {
      // Inserts seed entries
      return knex('departamentos').insert([
        {idDepto: 1, nomeDepto: 'Adaptadores'},
        {idDepto: 2, nomeDepto: 'Ferramentas'},
        {idDepto: 3, nomeDepto: 'Eletronicos'},
        {idDepto: 4, nomeDepto: 'Casa'},
        {idDepto: 5, nomeDepto: 'Acessorios'},
        {idDepto: 6, nomeDepto: 'Moveis'},
        {idDepto: 7, nomeDepto: 'Tablets e Celulares'},
        {idDepto: 8, nomeDepto: 'Games'},
        {idDepto: 9, nomeDepto: 'Informatica'},
      ]);
    });
};
