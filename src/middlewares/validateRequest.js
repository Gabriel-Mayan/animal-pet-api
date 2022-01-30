const validateRequest = (params, query, body, user) => async (request, response, next) => {
  try {
    if (user) { await user.validate(request.user); }
    if (body) { await body.validate(request.body); }
    if (query) { await query.validate(request.query); }
    if (params) { await params.validate(request.params); }
    next();
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

module.exports = validateRequest;
