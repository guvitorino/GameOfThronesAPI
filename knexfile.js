require('dotenv/config')
const config = process.env.NODE_ENV ? require('./test-db.json') : {}

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.HOST_POSTGRE,
      database: process.env.DATABASE_POSTGRE,
      user: process.env.DATABASE_USER_POSTGRE,
      password: process.env.DATABASE_PASSWORD_POSTGRE
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },
  test: {
    client: 'pg',
    connection: {
      host: config.PG_IP,
      user: 'test',
      password: 'test',
      database: 'postgres'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    seeds: {
      directory: './src/database/seeds'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/database/migrations'
    }
  }

}
