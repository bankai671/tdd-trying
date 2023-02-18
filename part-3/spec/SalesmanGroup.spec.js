const SalesmanGroup = require('../SalesmanGroup');
const Salesman = require('../Salesman');

describe('class SalesmanGroup', () => {
  let salesmen;
  beforeEach(() => {
    salesmen = [
      new Salesman('Oleg', 'Olegov', 'Olegovich', '+380(0512)386235', new Date('2005-05-05')),
      new Salesman('Ivan', 'Ivanov', 'Ivanovich', '+380(0512)382335', new Date('2006-10-11')),
    ];
  });
  it('allows you to set a list of sellers', () => {
    const group = new SalesmanGroup(salesmen);
    expect(group.salesmen).toEqual(salesmen);
  });
  it('allows you to get the clients full name', () => {
    const group = new SalesmanGroup(salesmen);
    expect(group.getFullNames()).toBe('Oleg Olegovich Olegov, Ivan Ivanovich Ivanov');
  });
});
