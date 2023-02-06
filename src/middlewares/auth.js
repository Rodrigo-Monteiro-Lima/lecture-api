const auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === undefined) {
    return next({ message: 'Token não encontrado', status: 401 });
  }
  if (authorization.length !== 16 || typeof authorization !== 'string') { 
    return next({ message: 'Token inválido', status: 401 });
  }
  return next();
};

module.exports = auth;