
exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists('produtos')
    .createTable('produtos', (table) => {
      table.increments('id').primary()
      table.specificType('codProduto', 'INT').notNullable().unique();
      table.specificType('descricao', 'VARCHAR(255)').notNullable();
      table.specificType('preco', 'FLOAT').notNullable();
      table.specificType('qtdProduto', 'INT').notNullable();
      table.specificType('disponivel', 'VARCHAR(3)').notNullable();
      table.specificType('emDestaque', 'VARCHAR(3)').notNullable();
      table.specificType('departamento', 'INT').notNullable()
      table.foreign('departamento').references('departamentos.idDepto');
    })
};

exports.down = function (knex) {
  return knex.schema.dropTable('produtos')
};
