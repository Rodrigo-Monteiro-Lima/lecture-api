const express = require('express');
const loginRouter = require('./loginRouter');
const talkerRouter = require('./talkerRouter');

const route = express.Router();

route.use('/login', loginRouter);
route.use('/talker', talkerRouter);

module.exports = route;