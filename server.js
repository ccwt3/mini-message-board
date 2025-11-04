const express = require("express");
const path = require("path");
const server = express();
const PORT = 3000;

// Simulated "database"
const messages = [
  { 
    text: "Hi there!", 
    user: "Amado", 
    added: new Date() 
  },
  { 
    text: "Hello world", 
    user: "Charles", 
    added: new Date() 
  },
];

// App config
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

// Middleware
server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded({ extended: true }));

// Routes
server.get("/", (req, res) => {
  res.render("index", { title: "Mini Message Board", messages });
});

server.get("/new", (req, res) => {
  res.render("form", { title: "Add a New Message" });
});

server.post("/new", (req, res) => {
  const { username, message } = req.body;
  messages.push({ text: message, user: username, added: new Date() });
  res.redirect("/");
});

// Start server
server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server running on http://localhost:${PORT}`);
});
