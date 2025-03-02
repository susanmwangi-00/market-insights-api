const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'subscriber', 'free_user'], default: 'free_user' },
  isVerified: { type: Boolean, default: false },
  verificationCode: { type: String },
  verificationCodeExpiresAt: { type: Date },
  lastLoginAt: { type: Date, default: Date.now },
  lastLoginIp: { type: String },
  passwordResetToken: { type: String },
  passwordResetTokenExpiresAt: { type: Date },
}, {
  timestamps: true,
});

module.exports = mongoose.model('User', userSchema);