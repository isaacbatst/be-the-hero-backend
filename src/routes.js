const express = require('express');
const crypto = require('crypto');

const connection = require('./database/connection');

const routes = express.Router();

routes.post('/', (request, response) => {
  return response.json({
    hello: "omi"
  })
})

routes.get('/ngos', async (request, response) => {
  const ngos = await connection('ngos').select('*');

  return response.json(ngos);
})

routes.post('/ngos', async (request, response) => {
  const { name, email, whatsapp, city, uf } = request.body;

  const id = crypto.randomBytes(4).toString('HEX');
  
  await connection('ngos').insert({
    id, name, email, whatsapp, city, uf
  })

  return response.json({ id })
})

module.exports = routes;