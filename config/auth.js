module.exports = {
  ensureAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    } else {
      req.flash("error_msg", "Please login to view the resource");
      res.redirect("/users/login");
    }
  },
};
