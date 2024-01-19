const path = require('path');
  module.exports = ({ env }) => ({
      connection: {
        client:  env('DATABASE_CLIENT', 'postgres'),
        connection: {
          host: env('DATABASE_HOST', '127.0.0.1'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'mypgdb'),
          user: env('DATABASE_USERNAME', 'postgres'),
          password: env('DATABASE_PASSWORD', "12345678"),
          schema: env('DATABASE_SCHEMA', 'public'), 
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    });

