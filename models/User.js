// models/User.js
const knex = require('knex');
const db = knex(require('../knexfile')['development']);

class User {
  constructor(data) {
    this.data = data;
  }

  static async create(data) {
    return db('users').insert(data);
  }

  static async findById(id) {
    return db('users').where('id', id).first();
  }

  // Add other methods as needed
}

module.exports = User;
