// server/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Your existing fields
  lastActivity: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
