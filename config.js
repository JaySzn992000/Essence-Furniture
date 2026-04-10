const { Pool } = require("pg");

const pool = new Pool({
user: "neondb_owner",
host: "ep-bitter-dew-ad8ohllq-pooler.c-2.us-east-1.aws.neon.tech",
database: "neondb",
password: "npg_TLtl3vKZ7Sue",
port: 5432,
ssl: {
rejectUnauthorized: false,
},
});

module.exports = pool;