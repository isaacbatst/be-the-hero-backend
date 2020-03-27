const connection = require('../database/connection');

module.exports = {
  async create(request,response) {
    const { id } = request.body;

    if(!id) {
      return response.status(400).json({ error: "ID not received" })
    }

    const ngo = await connection('ngos')
      .where('id', id)
      .select('name')
      .first()

    if(!ngo){
      return response.status(400).json({ error : "NGO not found" })
    }

    return response.json(ngo);
  }
}