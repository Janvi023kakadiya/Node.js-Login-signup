const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');

router.get('/dashboard', auth, (req, res) => {
  res.render('dashboard', { user: req.user });
});

router.get('/profile', auth, (req, res) => {
  res.render('profile', { user: req.user });
});

module.exports = router;
