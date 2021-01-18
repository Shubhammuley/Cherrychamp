module.exports = (joi) => joi.array().items(joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
  'string.pattern.base': 'Invalid Id Supplied.',
}))
  .label('Ids')
  .min(1);
