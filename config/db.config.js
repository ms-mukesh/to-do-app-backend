const cenv = "production";


const env_var = {
  production: {
    HOST: "139.59.1.188",
    USER: "root_admin",
    PASSWORD: "Abcdef123!@#",
    DB: "to-do-db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    port: process.env.PORT || 3100,
  },
  localTesting: {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "lanetteam@1",
    DB: "to-do-db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    port: process.env.PORT || 3100,
  },
};

module.exports = env_var[cenv];
