const express = require('express');
const morgan = require('morgan');
// Require credentials
const credentials = require('./configs/database/credentials.json');
// Require connection class
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
    this.middlewares();
    this.express.listen(process.env.PORT || this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }

  // Middlewares initialization
  middlewares() {
    this.express.use(express.json());
    this.express.use(morgan('tiny'));
  }
}

module.exports = new Application();
