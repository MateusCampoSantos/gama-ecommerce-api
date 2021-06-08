// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: 'db_xp',
      user: 'root',
      password: 'password'
    },
    migrations:{
      tableName:'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  },
};
