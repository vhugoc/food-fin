const express = require('express');

class Application {
  constructor() {
    this.port = 3030;
    this.express = express();
  }
  
  start() {
    this.express.listen(process.env.PORT || this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}

module.exports = new Application();
