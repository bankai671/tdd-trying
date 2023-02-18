const Client = require('../Client');

describe('Class Client', () => {
  it('allows you to set the name', () => {
    const firstName = 'Ivan';
    const client = new Client(firstName);
    expect(client.firstName).toBe(firstName);
  });
  it('allows you to set the last name', () => {
    const lastName = 'Ivanov';
    const client = new Client('Ivan', lastName);
    expect(client.lastName).toBe(lastName);
  });
  it('allows you to set the middle name', () => {
    const middleName = 'Ivanovich';
    const client = new Client('Ivan', 'Ivanov', middleName);
    expect(client.middleName).toBe(middleName);
  });
  it('allows you to set a phone', () => {
    const phone = '+380(0512)386235';
    const client = new Client('Ivan', 'Ivanov', 'Ivanovich', phone);
    expect(client.phone).toBe(phone);
  });
  it('allows you to set a personal discount', () => {
    const discount = 10;
    const client = new Client('Ivan', 'Ivanov', 'Ivanovich', '+380(0512)386212', discount);
    expect(client.discount).toBe(discount);
  });
  it('allows you to get a full name', () => {
    const client = new Client('Ivan', 'Ivanov', 'Ivanovich');
    const fullName = client.getFullName();
    expect(fullName).toBe('Ivan Ivanovich Ivanov');
  });
});
