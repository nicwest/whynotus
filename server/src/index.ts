import express, { Express, Request, Response } from "express";
import { Pool } from 'pg';

const port = Number(process.env.SERVER_PORT || 3000);
const app: Express = express();

const pool = new Pool({
    host: process.env.DB_HOST || '127.0.0.1',
    port: Number(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'secret',
});
 

app.get("/", async (req: Request, res: Response) => {
    const result = await pool.query('SELECT $1::text as name', ['brianc'])
    res.send(result.rows[0].name);
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

