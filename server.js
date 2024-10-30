const express = require('express')
const BodyParser = require('body-parser');
const knex = require('knex');
const path = require('path');
require('dotenv').config()
const submit = require("./controllers/handleSubmit")
const leaderBoard = require("./controllers/handleLeaderBoard")

const db = knex({
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  }
});

const app = express()
app.use(express.static(__dirname))
app.use(BodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
app.post('/submit', (req, res) => {
    submit.handleSubmit(req, res, db)
})

app.get('/leaderboard-data', (req, res) => {
    leaderBoard.handleLeaderBoard(req, res, db)
})

app.get('/user-score', (req, res) => {
    leaderBoard.getScore(req, res, db)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})