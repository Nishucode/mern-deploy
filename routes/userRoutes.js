// server/routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendNotificationEmail = require('../utils/email');

const router = express.Router();

router.get('/inactive', async (req, res) => {
  try {
    const inactiveUsers = await User.find({
      lastActivity: { $lt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000) }
    });

    inactiveUsers.forEach(user => {
      sendNotificationEmail(user.email, 'You have been inactive for more than 5 days.');
    });

    res.status(200).json({ inactiveUsers });
  } catch (error) {
    console.error('Error fetching inactive users:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
