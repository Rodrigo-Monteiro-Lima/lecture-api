const express = require('express');
require('express-async-errors');
const errorHandle = require('./middlewares/errorHandler');
const routes = require('./routes');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use(routes);
// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(errorHandle);

app.listen(PORT, () => {
  console.log('Online');
});
