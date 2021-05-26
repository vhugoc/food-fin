/** @module HandleDepartment */

const Department = require('../../models/Department');
const User = require('../../models/User');

class HandleDepartment {

  constructor(user_id) {
    this.user_id = user_id;
  }

  async find(id) {
    try {
      let department;

      if (id) {
        department = await Department.findOne({ _id: id, user_id: this.user_id });
      } else {
        department = await Department.find({ user_id: this.user_id });
      }
    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }

  async exists(name = null, id = null) {
    try {
      let exists;

      if (!id) {
        exists = await Department.findOne({ name: name, user_id: this.user_id });
      } else {
        exists = await Department.findOne({
          $and: [
            { name: { $eq: name } },
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

  async add(name, access) {
    try {
      if (await this.exists(name))
        return { success: false, description: "Department already exists", status: 400 };

      const create = await Department.create({
        user_id: this.user_id,
        name,
        access
      });

      if (!create)
        return { success: false, description: "Internal Error", status: 500 };

      return { success: true, status: 200 };

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }
}

module.exports = HandleDepartment;
