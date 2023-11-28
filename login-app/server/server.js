import express from 'express';
import cors from 'cors';
import pool from './db.js';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
  res.send('hi');
});

app.post('/users', async (req, res) => {
  const { username } = req.body;
  const { password } = req.body;

  const insertVal = `insert into accounts (username, password) values ('${username}', '${password}')`;

  try {
    const res = await pool.query(insertVal);
    console.log(res);
  } catch (err) {
    console.error(err);
  }

  console.log({ username, password });
  res.send('req recieved');
});

app.listen(4000, () => {
  console.log('Server on localhost:4000');
});
