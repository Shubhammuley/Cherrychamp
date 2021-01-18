module.exports = (joi) => (joi.object({
  email: joi.string().trim().email()
    .label('Email id')
    .required(),
  password: joi.string().required().label('Password'),
}));
