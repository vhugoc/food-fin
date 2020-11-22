const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// Require credentials
const credentials = require('./configs/database/credentials.json');
// Require connection class
const Connection = require('./configs/database/connection');
// Require router class
const Router = require('./router');

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
    this.routes();
    this.express.listen(process.env.PORT || this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }

  // Middlewares initialization
  middlewares() {
    this.express.use(express.json());
    this.express.use(morgan('tiny'));
    this.express.use(cors());
  }

  // Routes initialization
  routes() {
    const router = new Router();
    this.express.use(router);
  }
}

module.exports = new Application();
