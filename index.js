import express from "express";
import dotenv from 'dotenv';
import { Pool } from "pg";


dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

const pool  = new Pool({
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE,
    password: process.env.DATABASE_PASSWORD,
    port: process.env.DATABASE_PORT
});

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

