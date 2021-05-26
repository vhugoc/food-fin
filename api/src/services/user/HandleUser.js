/** @module HandleUser */

const User = require('../../models/User');
const MainHelper = require('../helpers/MainHelper');
const DateHelper = require('../helpers/DateHelper');

class HandleUser {

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

  async profile(id) {
    try {
      const user = await User.findById(id);
      if (!user)
        return { success: false, description: "Invalid ID", status: 400 };

      return { success: true, user, status: 200 };

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }

  async signin(email, password, type = 'user') {
    try {
      if (!email || !password)
        return { success: false, description: "Empty data", status: 400 };

      const user = await User.findOne({ email });

      if (!user)
        return { success: false, description: "User does not exists", status: 400 };

      if (!await MainHelper.compare_encrypt(password, user.password))
        return { success: false, description: "Incorrect password", status: 400 };

      if (!user.is_active)
        return { success: false, description: "User is not active", status: 400 };

      if (!await DateHelper.is_before(user.expiration_date))
        return { success: false, description: "Expired user", status: 400 }

      const token = await MainHelper.generate_token(user._id);

      user.status = true;
      await user.save();

      user.password = undefined;

      return { success: true, user, token, status: 200 };

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }

  async signout(id) {
    try {
      const profile = await this.profile(id);
      if (profile.success) {
        profile.user.status = false;
        await profile.user.save();
      }

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }
  
  async add(name, phone, email, password, subscription_plan_id) {
    try {
      if (!await MainHelper.validate_email(email))
        return { success: false, description: "Invalid email", status: 400 };

      if (await this.exists(email))
        return { success: false, description: "User already exists", status: 400 };

      const pwd = await MainHelper.encrypt(password);
      const exp_date = await DateHelper.add(1, 'month');
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

  async delete(id) {
    try {
      if (!await this.exists_by_id(id))
        return { success: false, description: "User does not exists", status: 400 };

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
