const User = require('../models/User');

async function authMiddleware(req, res, next) {
  try {
    const userId = req.cookies.userId;
    if (!userId) return res.redirect('/login');

    const user = await User.findById(userId);
    if (!user) return res.redirect('/login');

    req.user = user;
    next();
  } catch (err) {
    res.redirect('/login');
  }
}

module.exports = authMiddleware;
