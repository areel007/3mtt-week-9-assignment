const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    age: 20,
  },
  {
    id: 2,
    name: "Ervin Howell",
    age: 21,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    age: 19,
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    age: 20,
  },
];

app.get("/", (req, res) => {
  res.send("Hello world! You are welcome.");
});

app.get("/users", (req, res) => {
  try {
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", (req, res) => {
  const id = users.length + 1;
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: "Name and age are required" });
  }
  try {
    users.push({ id, name, age });
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
