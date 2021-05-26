const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const credentials = require('./configs/database/credentials.json');
const Connection = require('./configs/database/connection');
const Router = require('./router');

class Application {
  constructor() {
    this.port = 3030;
    this.express = express();
    this.connection = new Connection(credentials.uri, credentials.username, credentials.password, credentials.database);
  }

  start() {
    this.connection.connect();
    this.middlewares();
    this.routes();
    this.express.listen(process.env.PORT || this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(morgan('tiny'));
    this.express.use(cors());
  }

  routes() {
    const router = new Router();
    this.express.use(router);
  }
}

module.exports = new Application();
