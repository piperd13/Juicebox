function requireUser(req, res, next) {
  if (!req.user) {
    next({
      name: "MissingUserError",
      message: "You are not logged in"
    });
  }

  next();
}

module.exports = {
  requireUser
}