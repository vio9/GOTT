/*const express = require("express");
const serverPort = 8000;
const app = express();

app.get("/", (req, res) => {
  console.log("a new request just hit the API");
  res.send("hello dear API client");
});

const things = [
  {
    id: 1,
    name: "chouquettes",
  },
  {
    id: 2,
    name: "croissants",
  },
  {
    id: 3,
    name: "café",
  },
];

let newId = 4;

// GET

app.get("/things", (req, res) => {
  res.send(things);
});

app.get("/things/:id", (req, res) => {
  const parsedThingId = parseInt(req.params.id);
  const thing = things.find((thing) => thing.id === parsedThingId);
  if (thing) {
    res.send(thing);
  } else {
    res.sendStatus(404);
  }
});

// POST

app.use(express.json());
app.post("/things", (req, res) => {
  const { name } = req.body;
  const newThing = { id: newId++, name };
  things.push(newThing);
  res.status(201).send(newThing);
});

app.listen(serverPort, () => console.log("Express server is running")); 
*/
