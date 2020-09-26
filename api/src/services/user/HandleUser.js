/** @module HandleUser */

const User = require('../../models/User');
const MainHelper = require('../helpers/MainHelper');

class HandleUser {
  /**
   * Checks if an user exists
   * @param { string } email 
   */
  async exists(email) {
    try {
      const exists = await User.findOne({ email: email });

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
   * @param { date } expiration_date 
   */
  async add(name, phone, email, password, subscription_plan_id, expiration_date) {
    try {
      // Email validation
      if (!await MainHelper.validate_email(email))
        return { success: false, description: "Invalid email", status: 400 }

      // Check if email exists
      if (await this.exists(email))
        return { success: false, description: "User already exists", status: 400 }

      // Password encrypt
      const pwd = await MainHelper.encrypt(password);
      
      // Creating user
      const create = await User.create({
        name,
        phone,
        email,
        password: pwd,
        subscription_plan_id,
        expiration_date
      });

      if (!create)
        return { success: false, description: "Internal Error", status: 500 }

      return { success: true, status: 200 };

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }
}

module.exports = new HandleUser();
