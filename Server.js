const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

let users = [];

app.post("/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (users.find((u) => u.email === email)) return res.status(400).send("User exists");
  users.push({ firstName, lastName, email, password });
  res.send("Account Created");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) return res.status(401).send("Invalid credentials");
  res.send("Login successful");
});

app.post("/reset-password", (req, res) => {
  const { email, newPassword } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(404).send("User not found");
  user.password = newPassword;
  res.send("Password reset");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
