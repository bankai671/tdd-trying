const ClientGroup = require('../ClientGroup');
const Client = require('../Client');

describe('class ClientGroup', () => {
  let clients;
  beforeEach(() => {
    clients = [
      new Client('Ivan', 'Ivanov', 'Ivanovich', '+380(0512)386235', 10),
      new Client('Oleg', 'Olegov', 'Olegovich', '+380(0512)334235', 5),
    ];
  });
  it('allows you to set a client list', () => {
    const group = new ClientGroup(clients);
    expect(group.clients).toEqual(clients);
  });
  it('allows you to get the clients full name', () => {
    const group = new ClientGroup(clients);
    expect(group.getFullNames()).toBe('Ivan Ivanovich Ivanov, Oleg Olegovich Olegov');
  });
});
