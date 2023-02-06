const express = require('express');
const { getAllSpeakers } = require('../utils/talker');

const route = express.Router();

route.get('/', async (_req, res) => {
  const talker = await getAllSpeakers();
  return res.status(200).json(talker);
});

module.exports = route;