const express = require('express');
const credentials = require('./configs/database/credentials.json');
const Connection = require('./configs/database/connection');

class Application {
  constructor() {
    this.port = 3030;
    this.express = express();
    this.connection = new Connection(credentials.uri, credentials.username, credentials.password, credentials.database);
  }
  
  // Run the server
  start() {
    this.connection.connect();
    this.express.listen(process.env.PORT || this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }
}

module.exports = new Application();
