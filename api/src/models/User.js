/** @module UserModel */

const { model, Schema } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false,
    default: null
  },
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  thumb_uri: {
    type: String,
    required: false,
    default: null
  },
  subscription_plan_id: {
    type: String,
    required: true
  },
  is_active: {
    type: Boolean,
    required: true,
    default: true
  },
  status: {
    type: Boolean,
    required: true,
    default: false
  },
  expiration_date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('User', UserSchema);
