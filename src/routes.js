const express = require("express");

const routes = express.routes();

routes.get("/", (req, res) => {
  return res.json({ message: "Olá" });
});

module.exports = routes;
