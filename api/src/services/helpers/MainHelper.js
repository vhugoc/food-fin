/** @module MainHelper */

class MainHelper {
  async validate_email(email) {
    const validator = require('email-validator');
    const response = await validator.validate(email);
    return response;
  }

  async encrypt(string) {
    const bcrypt = require('bcrypt');
    const response = await bcrypt.hash(string, 10);
    return response;
  }
  
  async compare_encrypt(string, hash) {
    const bcrypt = require('bcrypt');
    const response = await bcrypt.compare(string, hash);
    return response;
  }

  async generate_token(id) {
    const jwt = require('jsonwebtoken');
    const { secret } = require('../../configs/auth/auth.json');
    const response = await jwt.sign({ id: id }, secret, {
      expiresIn: 86400 * 7
    });
    return response;
  }
}

module.exports = new MainHelper();
