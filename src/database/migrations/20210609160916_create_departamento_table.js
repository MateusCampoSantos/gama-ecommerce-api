
exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists('departamentos')
    .createTable('departamentos', (table) => {
      table.specificType('idDepto', 'INT').notNullable().unique().primary();
      table.specificType('nomeDepto', 'VARCHAR(150)').notNullable();
    })

};

exports.down = function (knex) {
  return knex.schema.dropTable('departamentos')
};
