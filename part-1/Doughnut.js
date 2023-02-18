module.exports = class Doughnut {
  constructor({ name = 'Doughnut', stuffings } = {}) {
    this.name = name;
    this.baseWeight = 60;
    this.stuffings = stuffings;
  }

  get weight() {
    if (!this.stuffings) {
      return this.baseWeight;
    }
    return this.stuffings.reduce((acc, curr) => acc.weight + curr.weight) + this.baseWeight;
  }
};
