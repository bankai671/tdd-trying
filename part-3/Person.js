module.exports = class Person {
  constructor(firstName, lastName, middleName, phone) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.middleName = middleName;
    this.phone = phone;
  }

  getFullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`;
  }
};
