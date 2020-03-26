const express = require('express');

const routes = express.Router();

routes.post('/', (req, res) => {
  return res.json({
    hello: "omi"
  })
})

module.exports = routes;