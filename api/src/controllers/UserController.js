/** @module UserController */

const HandleUser = require('../services/user/HandleUser');

class UserController {
  /**
   * Authenticate an user
   * @param {*} request 
   * @param {*} response 
   * @return { json }
   */
  async signin(request, response) {
    try {
      const { email, password, type } = request.body;

      const auth = await HandleUser.signin(email, password, type);

      if (!auth.success)
        return response.status(auth.status).json({ success: false, description: auth.description });

      return response.status(200).json(auth);

    } catch(error) {
      return response.status(500).json({ success: false, description: error, status: 500 });
    }
  }

  /**
   * Sign out
   * @param {*} request 
   * @param {*} response 
   * @return { json }
   */
  async signout(request, response) {
    try {
      await HandleUser.signout(request.user_id);
      return response.status(200).json({ success: true });
    } catch(error) {
      return response.status(500).json({ success: false, description: error, status: 500 });
    }
  }

  /**
   * Show user profile
   * @param {*} request 
   * @param {*} response 
   * @return { json }
   */
  async show(request, response) {
    try {
      const profile = await HandleUser.profile(request.user_id);
      if (!profile.success)
        return response.status(profile.status).json({ success: false, description: profile.description });

      return response.status(profile.status).json({ success: true, user: profile.user });
      
    } catch(error) {
      return response.status(500).json({ success: false, description: error, status: 500 });
    }
  }
  
  /**
   * Register an user
   * @param {*} request 
   * @param {*} response 
   * @return { json }
   */
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
  
  async delete(request, response) {
    try {
      const user_id = request.user_id;

      const del = await HandleUser.delete(user_id);

      if (!del.success)
        return response.status(del.status).json({ success: false, description: del.description });

      return response.status(del.status).json({ success: true });

    } catch(error) {
      return response.status(500).json({ success: false, description: error, status: 500 });
    }
  }
}

module.exports = new UserController();
