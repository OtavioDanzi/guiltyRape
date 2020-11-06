const db = require('../database/connection');

module.exports = class VictimsController {
  async index(request, response) {
    const victims = await db('victims').select('*');

    response.json(victims);
  }

  async create(request, response) {
    const {
      name,
      rapist,
      city,
      description,
    } = request.body;

    const victim = {
      name,
      rapist,
      city,
      description,
    };

    const [insertedId] = await db('victims').insert(victim);

    return response.json({
      id: insertedId,
      ...victim,
    });
  }

  async show(request, response) {
    const { id } = request.params;

    const victim = await db('victims').where('id', id).first();

    if (!victim) {
      return response.status(404).json({ message: 'Nenhuma vítima encontrada' });
    }

    return response.json(victim);
  }

  async delete(request, response) {
    const { id } = request.params;

    const victim = await db('victims').where('id', id).first();

    if (!victim) {
      return response.status(404).json({ message: 'Nenhuma vítima encontrada com esse identificador' });
    }

    await db('victims').where('id', id).del();

    return response.json({ message: 'Vitima removida com sucesso!' });
  }
}
