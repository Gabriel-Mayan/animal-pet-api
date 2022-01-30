require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT ?? '5432', 10),
  },
  migrations: {
    directory: 'src/migrations',
    extension: 'js',
  },
  seeds: {
    directory: 'src/seeds',
    extension: 'js',
    timestampFilenamePrefix: true,
  },
};
