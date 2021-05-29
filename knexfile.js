require('dotenv/config')

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
