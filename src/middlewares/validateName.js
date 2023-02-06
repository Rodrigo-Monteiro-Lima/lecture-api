const validateName = (req, res, next) => {
  const { name } = req.body;
  
  if (!name) return next({ message: 'O campo "name" é obrigatório', status: 400 });
  if (name.length < 3) {
    return next({ message: 'O "name" deve ter pelo menos 3 caracteres', status: 400 });
}
  return next();
};

module.exports = validateName;