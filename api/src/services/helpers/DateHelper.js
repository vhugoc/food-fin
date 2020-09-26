/** @module DateHelper */
const dayjs = require('dayjs');

class DateHelper {
  /**
   * Returns now
   */
  async now() {
    const response = await dayjs().format('YYYY-MM-DD hh:mm');
    return response;
  }

  /**
   * Add days/months/years
   * @param { integer } amount 
   * @param { string } unit 
   */
  async add(amount, unit) {
    const response = await dayjs().add(amount, unit).format('YYYY-MM-DD hh:mm');
    return response;
  }
  
  /**
   * Subtract days/months/years
   * @param { integer } amount 
   * @param { string } unit 
   */
  async subtract(amount, unit) {
    const response = await dayjs().subtract(amount, unit).format('YYYY-MM-DD hh:mm');
    return response;
  }
}

module.exports = new DateHelper();
