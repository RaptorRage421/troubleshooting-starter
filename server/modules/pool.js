const pg = require('pg');

const config = {
  database: 'troubleshooting-starter-db', 
  host: 'localhost', 
  port: 5432, 
  max: 10, 
  idleTimeoutMillis: 30000 
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
  console.log("Connected to PostgreSQL");
});

pool.on("error", (err) => {
  console.log("Error connecting to PostgreSQL", err);
});

module.exports = pool;
