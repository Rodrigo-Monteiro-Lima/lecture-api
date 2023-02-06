const validateEmail = (req, res, next) => {
  const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const { email } = req.body;
  if (!email) {
    return next({ message: 'O campo "email" é obrigatório', status: 400 });
  }
  if (!isEmailValid.test(email)) {
    return next({ message: 'O "email" deve ter o formato "email@email.com"', status: 400 });
}
  return next();
};

module.exports = validateEmail;