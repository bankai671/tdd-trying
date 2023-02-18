const PersonGroup = require('./PersonGroup');

module.exports = class SalesmanGroup extends PersonGroup {
  constructor(salesmen) {
    super(salesmen);
    this.salesmen = salesmen;
  }
};
