const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const ngo_id = request.headers.authorization;

    if(!ngo_id){
      return response.status(400).json({ error: "NGO not received" })
    }

    const incidents = await connection('incidents')
      .where('ngo_id', ngo_id)
      .select('*');

    return response.json(incidents);
  }
}