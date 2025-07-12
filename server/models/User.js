const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true
  },
  tokenVerified: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // ⏱️ Auto-remove after 600 seconds = 10 mins
  }
});

module.exports = mongoose.model('User', userSchema);
