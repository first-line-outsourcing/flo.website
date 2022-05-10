const env = process.env.ENV || process.env.NODE_ENV || 'development';

require("dotenv").config({
  path: env === 'production'
    ? '.env'
    : `.env.${env}`,
});

module.exports.env = env;
