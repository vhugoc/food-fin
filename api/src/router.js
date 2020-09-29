const express = require('express');
const UserController = require('./controllers/UserController');

const Usercontroller = require('./controllers/UserController');

class Router {
  constructor() {
    this.router = express.Router();

    this.router.get('/', (request, response) => {
      return response.status(200).json({ success: true });
    });

    /** User Routes */
    this.router.post('/users', UserController.create);
    
    return this.router;
  }
}

module.exports = Router;
