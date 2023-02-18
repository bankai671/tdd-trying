const Person = require('./Person');

module.exports = class Client extends Person {
  constructor(firstName, lastName, middleName, phone, discount) {
    super(firstName, lastName, middleName, phone);
    this.discount = discount;
  }
};
