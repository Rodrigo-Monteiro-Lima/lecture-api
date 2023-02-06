const express = require('express');
const generateToken = require('../utils/generateToken');

const route = express.Router();

route.post('/', (_req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = route;