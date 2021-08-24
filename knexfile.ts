require('dotenv').config();
// we cannot use export default, because knex doesnt suport yet

import pg from 'pg';

if (process.env.DATABASE_URL) {
   pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
   client: 'pg',
   migrations: {
      directory: __dirname + '/src/database/migrations'
   },
   seeds: {
      directory: __dirname + 'src/database/seeds'
   },
}
module.exports = {
   development: {
      ...sharedConfig,
      connection: {
         host: process.env.DB_HOST,
         user: process.env.DB_USER,
         password: process.env.DB_PASS,
         database: process.env.DB_NAME,
      }
   },
   production: {
      ...sharedConfig,
      connection: process.env.DATABASE_URL,
      pool: { min: 2, max: 10 },
   },
};