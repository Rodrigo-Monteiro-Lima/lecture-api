const express = require('express');
const auth = require('../middlewares/auth');
const validateAge = require('../middlewares/validateAge');
const validateName = require('../middlewares/validateName');
const validateRate = require('../middlewares/validateRate');
const validateTalk = require('../middlewares/validateTalk');
const validateWatchedAt = require('../middlewares/validateWatchedAt');
const { getAllSpeakers, getSpeakerById, insertSpeaker, updateSpeaker } = require('../utils/talker');

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

route.post('/',
auth,
validateName,
validateAge,
validateTalk,
validateRate,
validateWatchedAt,
async (req, res) => {
  const { body } = req;
  const newSpeaker = await insertSpeaker(body);
  return res.status(201).json(newSpeaker);
});

route.put('/:id',
auth,
validateName,
validateAge,
validateTalk,
validateRate,
validateWatchedAt,
async (req, res, next) => {
  const id = Number(req.params.id);
  const { body } = req;
  const newSpeaker = await updateSpeaker(id, body);
  if (newSpeaker === -1) {
    return next({ message: 'Pessoa palestrante não encontrada', status: 404 });
  }
  return res.status(200).json(newSpeaker);
});

module.exports = route;