require('dotenv/config');

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

const configs = {
  username: DB_USERNAME,
  password: PASSWORD_POSTGRES,
  database: DATABASE,
  host: HOST,
  port: DB_PORT,
  dialect: 'postgres',
};

module.exports = {
  development: {
    ...configs,
  },
  test: {
    ...configs,
  },
  production: {
    ...configs,
  },
};