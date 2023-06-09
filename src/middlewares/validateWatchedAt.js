const validateWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!isFormatDate.test(watchedAt)) {
    return next({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"', status: 400 });
} 
  return next();
};

module.exports = validateWatchedAt;