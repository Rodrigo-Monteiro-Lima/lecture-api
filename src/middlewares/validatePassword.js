const validatePassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return next({ message: 'O campo "password" é obrigatório', status: 400 });
  }
  if (password.length < 6) {
    return next({ message: 'O "password" deve ter pelo menos 6 caracteres', status: 400 });
}
  return next();
};

module.exports = validatePassword;