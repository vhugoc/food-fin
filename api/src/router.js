const express = require('express');

class Router {
  constructor() {
    this.router = express.Router();

    this.router.get('/', (request, response) => {
      return response.status(200).json({ success: true });
    });
    
    return this.router;
  }
}

module.exports = Router;
