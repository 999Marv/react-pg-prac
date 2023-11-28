import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  password: '',
  host: 'localhost',
  port: 5432,
  database: 'yt_login',
});
await pool.connect();

export default pool;
