const express = require("express");
const server = express();
const path = require('path');
const PORT = 3000;
const assetsPath = path.join(__dirname, "public");

// Frontend configuration
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");
server.use(express.static(assetsPath));

// middleware
server.get("/", (req, res) => {
  res.render("index");
});

server.listen(PORT, (err) => {
  if (err) throw err;
});
