/** @module HandleDepartment */

const Department = require('../../models/Department');
const User = require('../../models/User');

class HandleDepartment {

  constructor(user_id) {
    this.user_id = user_id;
  }

  async find(id = null) {
    try {
      let department;

      if (id) {
        department = await Departasyncment.findOne({ _id: id, user_id: this.user_id });
      } else {
        department = await Department.find({ user_id: this.user_id });
      }

      return department;

    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }

  async exists(name = null, id = null) {
    try {
      let exists;
      let findOnlyByName = !id ? true : false;

      if (findOnlyByName) {
        exists = await Department.findOne({ name: name, user_id: this.user_id });
      } else {
        exists = await Department.findOne({
          $and: [
            { user_id: { $eq: this.user_id } },
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

  async update(id, name, access, is_active) {
    try {
      const department = await this.find(id);

      if (!department)
        return { success: false, message: "Department does not exists" };

      const exists = await this.exists(name, id);

      if (exists)
        return { success: false, message: "Department already exists" };

      const update = await Department.updateOne({ _id: id }, {
        name,
        access,
        is_active
      });

      if (!update)
        return { success: false, description: "Internal Error", status: 500 };

      return { success: true, status: 200 };

    } catch(err) {
      return { error: true, description: error, status: 500 };
    }
  }

  async delete(id) {
    try {
      if (!await this.exists_by_id(id))
        return { success: false, description: "Department does not exists", status: 400 };

      const del = await Department.deleteOne({ _id: id });

      if (!del)
        return { success: false, description: "Internal Error", status: 500 };

      return { success: true, status: 200 };
    
    } catch(error) {
      return { error: true, description: error, status: 500 };
    }
  }
}

module.exports = HandleDepartment;
