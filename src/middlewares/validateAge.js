const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (age === undefined) return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  if (typeof age !== 'number') {
    return next({ message: 'O campo "age" deve ser do tipo "number"', status: 400 });
  }
  if (!Number.isInteger(age)) {
    return next({ message: 'O campo "age" deve ser um "number" do tipo inteiro', status: 400 });
  }
  if (age < 18) {
    return next({ message: 'A pessoa palestrante deve ser maior de idade', status: 400 });
  }
  return next();
};

module.exports = validateAge;