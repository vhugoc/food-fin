/** @module HandleUser */

const User = require('../../models/User');
const MainHelper = require('../helpers/MainHelper');
const DateHelper = require('../helpers/DateHelper');

class HandleUser {
  /**
   * Checks if an user exists
   * @param { string } email 
   * @param { string } id user id
   */
  async exists(email = null, id = null) {
    try {
      let exists;

      if (!id) {
        exists = await User.findOne({ email: email });
      } else {
        exists = await User.findOne({
          $and: [
            { email: { $eq: req.user_id } },
            { _id: { $ne: id } }
          ]
        });
      }

      if (exists)
        return true;

      return false;

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }

  /**
   * Check if an user exists by id
   * @param { string } id 
   */
  async exists_by_id(id) {
    try {
      const exists = await User.findById(id);

      if (exists)
        return true;

      return false;

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }
  
  /**
   * Create an user
   * @param { string } name 
   * @param { string } phone 
   * @param { string } email 
   * @param { string } password 
   * @param { string } subscription_plan_id
   */
  async add(name, phone, email, password, subscription_plan_id) {
    try {
      // Email validation
      if (!await MainHelper.validate_email(email))
        return { success: false, description: "Invalid email", status: 400 };

      // Check if email exists
      if (await this.exists(email))
        return { success: false, description: "User already exists", status: 400 };

      // Password encrypt
      const pwd = await MainHelper.encrypt(password);

      // Gen expiration date
      const exp_date = await DateHelper.add(1, 'month');
      
      // Creating user
      const create = await User.create({
        name,
        phone,
        email,
        password: pwd,
        subscription_plan_id,
        expiration_date: exp_date
      });

      if (!create)
        return { success: false, description: "Internal Error", status: 500 };

      return { success: true, status: 200 };

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }

  /**
   * Delete an user by id
   * @param { string } id 
   */
  async delete(id) {
    try {
      // Check if user exists
      if (!await this.exists_by_id(id))
        return { success: false, description: "User does not exists", status: 400 };

      // Deleting user
      const del = await User.deleteOne({ _id: id });

      if (!del)
        return { success: false, description: "Internal Error", status: 500 };

      return { success: true, status: 200 };

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }
}

module.exports = new HandleUser();
