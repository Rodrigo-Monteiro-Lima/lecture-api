const express = require('express');
const { getAllSpeakers, getSpeakerById } = require('../utils/talker');

const route = express.Router();

route.get('/', async (_req, res) => {
  const talker = await getAllSpeakers();
  return res.status(200).json(talker);
});

route.get('/:id', async (req, res, next) => {
  const id = Number(req.params.id);
  const speaker = await getSpeakerById(id);
  if (speaker === undefined) {
    return next({ message: 'Pessoa palestrante não encontrada', status: 404 });
}
  return res.status(200).json(speaker);
});

module.exports = route;