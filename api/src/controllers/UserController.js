/** @module UserController */

const HandleUser = require('../services/user/HandleUser');

class UserController {
  async create(request, response) {
    try {
      const { name, phone, email, password, subscription_plan_id } = request.body;

      // Check empty data
      if (!name || !phone || !email || !password || !subscription_plan_id)
        return response.status(400).json({ success: false, description: "Empty data" });

      // Register user
      const register = await HandleUser.add(name, phone, email, password, subscription_plan_id);

      // return response.json(register);

      if (!register.success)
        return response.status(register.status).json({ success: false, description: register.description });

      return response.status(register.status).json({ success: true });

    } catch(error) {
      return response.status(500).json({ success: false, description: error, status: 500 });
    }
  }
}

module.exports = new UserController();
