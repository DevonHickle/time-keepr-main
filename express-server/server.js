const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 8000;
/*const db = require('./models')
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database")
  })
  .catch(err => {
    console.log('Cannot connect to the database', err)
    process.exit()
  }) */

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let users = [
  { id: 1, name: "Devon Hickle" },
  { id: 2, name: "Luther Huset" },
  { id: 3, name: "Evan Long" },
  { id: 4, name: "Shruthi" },
  { id: 5, name: "Nick Koss" },
  { id: 6, name: "Bill Tervola" },
  { id: 7, name: "Andre Denny" },
  { id: 8, name: "Sele Agbator" },
];

let dates = [
  { id: 1, startDate: 'Test'}
]

app.get("/api/users", (req, res) => {
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  res.send(user);
});

app.get("/", (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});

app.get("/api/dates", (req, res) => {
  res.send(dates); 
});

// listen on the port
app.listen(port);
