module.exports = class PersonGroup {
  #persons = [];
  constructor(persons) {
    this.#persons = persons;
  }

  getFullNames() {
    return this.#persons.map((person) => person.getFullName()).join(', ');
  }
};
