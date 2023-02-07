const errorHandle = (error, _req, res, _next) => {
  const { status, message } = error;
  return res.status(status || 500)
  .json({ message: `Ocorreu um erro no servidor, tente mais tarde. ${message}` });
};
module.exports = errorHandle;