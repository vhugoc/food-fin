/** @module DepartmentModel */

const { model, Schema } = require('mongoose');

const DepartmentSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  access: {
    type: Number,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = model('Department', DepartmentSchema);
