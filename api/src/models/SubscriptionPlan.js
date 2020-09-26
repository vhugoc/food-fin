/** @module SubscriptionPlanModel */

const { model, Schema } = require('mongoose');

const SubscriptionPlanSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  limits: {
    max_departments: {
      type: Number,
      required: true
    },
    max_employees: {
      type: Number,
      required: true
    },
    max_products: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      default: "basic"
    }
  },
  payment: {
    type: String,
    required: true,
    default: "monthly"
  },
  value: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = model('SubscriptionPlan', SubscriptionPlanSchema);
