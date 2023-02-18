const PersonGroup = require('./PersonGroup');

module.exports = class ClientGroup extends PersonGroup {
  constructor(clients) {
    super(clients);
    this.clients = clients;
  }
};
