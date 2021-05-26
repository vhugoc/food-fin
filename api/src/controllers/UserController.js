/** @module UserController */

const HandleUser = require('../services/user/HandleUser');

class UserController {

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

  async signout(request, response) {
    try {
      await HandleUser.signout(request.user_id);
      return response.status(200).json({ success: true });
    } catch(error) {
      return response.status(500).json({ success: false, description: error, status: 500 });
    }
  }

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
  
  async create(request, response) {
    try {
      const { name, phone, email, password, subscription_plan_id } = request.body;

      if (!name || !phone || !email || !password || !subscription_plan_id)
        return response.status(400).json({ success: false, description: "Empty data" });

      const register = await HandleUser.add(name, phone, email, password, subscription_plan_id);

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
