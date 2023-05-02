export const environment = {
    env: process.env.NODE_ENV,
     mssql: {
      database: process.env.MSSQL_DATABASE,
      host: process.env.MSSQL_HOST,
      password: process.env.MSSQL_PASSWORD,
      port: Number(process.env.MSSQL_PORT),
      username: process.env.MSSQL_USERNAME,
    },
    port: Number(process.env.PORT) || 4000,
  };
  