module.exports = class PersonGroup {
  constructor(persons) {
    this.persons = persons;
  }

  getFullNames() {
    return this.persons.map((person) => person.getFullName()).join(', ');
  }
};
