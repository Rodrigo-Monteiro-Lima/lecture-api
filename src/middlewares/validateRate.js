const validateRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return next({ message: 'O campo "rate" deve ser um inteiro de 1 à 5', status: 400 });
} 
  return next();
};

module.exports = validateRate;