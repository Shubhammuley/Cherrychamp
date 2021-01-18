module.exports = (joi) => joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
  'string.pattern.base': 'Invalid Id Supplied.',
});
