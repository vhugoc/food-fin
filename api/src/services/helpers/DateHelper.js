/** @module DateHelper */
const dayjs = require('dayjs');

class DateHelper {
  async now() {
    const response = await dayjs().format('YYYY-MM-DD hh:mm');
    return response;
  }

  async add(amount, unit) {
    const response = await dayjs().add(amount, unit).format('YYYY-MM-DD hh:mm');
    return response;
  }
  
  async subtract(amount, unit) {
    const response = await dayjs().subtract(amount, unit).format('YYYY-MM-DD hh:mm');
    return response;
  }

  async is_before(date) {
    const response = await dayjs().isBefore(date);
    return response;
  }
}

module.exports = new DateHelper();
