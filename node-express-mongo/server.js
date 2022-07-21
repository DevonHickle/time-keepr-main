const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const db = require('./node-express-mongo/models')
var corsOptions = {
  origin: "http://localhost:8000"
}

app.use(cors(corsOptions))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Time Keepr"})
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to the database')
  })
  .catch(err => {
    console.log('Unable to connect to database', err);
    process.exit()
  })