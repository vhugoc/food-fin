const express = require('express');
const authMiddleware = require('./middlewares/auth');
const UserController = require('./controllers/UserController');

class Router {
  constructor() {
    this.router = express.Router();

    this.router.get('/', (request, response) => {
      return response.status(200).json({ success: true });
    });

    /** User Routes */
    this.router.post('/signin', UserController.signin);
    this.router.post('/signout', authMiddleware, UserController.signout);
    this.router.get('/users', authMiddleware, UserController.show);
    this.router.post('/users', UserController.create);
    this.router.delete('/users', authMiddleware, UserController.delete);
    
    return this.router;
  }
}

module.exports = Router;
