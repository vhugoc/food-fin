const mongoose = require('mongoose');

class Connection {
  constructor(uri, username, password, database) {
    this.uri = uri;
    this.username = username;
    this.password = password;
    this.database = database;
  }

  connect() {
    mongoose.connect(`mongodb+srv://${this.username}:${this.password}@${this.uri}/${this.database}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

module.exports = Connection;
