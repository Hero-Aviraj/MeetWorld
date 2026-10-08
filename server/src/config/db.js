import pg from "pg";
const { Pool }=pg;
 
const pool=new pool({
    host:process.env.DB_HOST,
    PORT:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    name:process.env.DB_NAME
})

