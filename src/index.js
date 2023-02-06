const express = require('express');
const errorHandle = require('./middlewares/errorHandler');
const talkerRoute = require('./routes/talkerRoutes');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.use('/talker', talkerRoute);
// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(errorHandle);

app.listen(PORT, () => {
  console.log('Online');
});
