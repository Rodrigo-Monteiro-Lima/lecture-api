const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  if (!talk) return next({ message: 'O campo "talk" é obrigatório', status: 400 });
  const { watchedAt, rate } = talk;
  if (rate === undefined) {
    return next({ message: 'O campo "rate" é obrigatório', status: 400 });
}
  if (!watchedAt) return next({ message: 'O campo "watchedAt" é obrigatório', status: 400 });
  return next();
};

module.exports = validateTalk;