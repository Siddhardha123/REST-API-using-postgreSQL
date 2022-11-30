
import dotenv from 'dotenv';
import pg from 'pg';
const Pool = pg.Pool;
dotenv.config()
const pool = new Pool({
    user : "postgres",
    host : "localhost",
    database: "students",
    password: process.env.PASSWORD,
    port : 5432,

});

export default pool;