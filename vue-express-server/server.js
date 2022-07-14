const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

let users = [
  { id:1, name: "Devon Hickle", position: "AE" },
  { id:2, name: "Luther Huset", position: "AE" },
  { id:3, name: "Evan Long", position: "Dev" },
  { id:4, name: "Shruthi", position: "Dev" },
  { id:5, name: "Nick Koss", position: "Dev" },
  { id:6, name: "Bill Tervola", position: "Customer Experience Lead" },
  { id:7, name: "Andre Denny", position: "Business Analyst" },
  { id:8, name: "Sele Agbator", position: "Scrum Master" },
];

app.get('/users', (req, res) => {
    res.send(users)
});

app.get('/', (req, res) => {
    res.send(`Hi! Server is listening on port ${port}`)
  });
  
  // listen on the port
  app.listen(port);
