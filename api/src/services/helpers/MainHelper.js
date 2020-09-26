/** @module MainHelper */

class MainHelper {
  /**
   * Validate an email
   * @param { string } email 
   */
  async validate_email(email) {
    const validator = require('email-validator');
    const response = await validator.validate(email);
    return response;
  }

  /**
   * Encrypt a string
   * @param { string } string 
   */
  async encrypt(string) {
    const bcrypt = require('bcrypt');
    const response = await bcrypt.hash(string, 10);
    return response;
  }
  
  /**
   * Verifies an encrypted hash
   * @param { string } string
   * @param { string } hash 
   */
  async compare_encrypt(string, hash) {
    const bcrypt = require('bcrypt');
    const response = await bcrypt.compare(string, hash);
    return response;
  }
}

module.exports = new MainHelper();
