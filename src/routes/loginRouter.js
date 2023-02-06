const express = require('express');
const generateToken = require('../utils/generateToken');
const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');

const route = express.Router();

route.post('/', validateEmail, validatePassword, (_req, res) => {
  const token = generateToken();
  return res.status(200).json({ token });
});

module.exports = route;