const Salesman = require('../Salesman');

describe('class Salesman', () => {
  it('allows you to set the name', () => {
    const firstName = 'Petro';
    const salesman = new Salesman(firstName);
    expect(salesman.firstName).toBe(firstName);
  });
  it('allows you to set the last name', () => {
    const lastName = 'Petrov';
    const salesman = new Salesman('Petro', lastName);
    expect(salesman.lastName).toBe(lastName);
  });
  it('allows you to set the middle name', () => {
    const middleName = 'Petrovich';
    const salesman = new Salesman('Petro', 'Petrov', middleName);
    expect(salesman.middleName).toBe(middleName);
  });
  it('allows you to set a phone', () => {
    const phone = '+380(0512)386125';
    const salesman = new Salesman('Petro', 'Petrov', 'Petrovich', phone);
    expect(salesman.phone).toBe(phone);
  });
  it('allows you to set the date of employment', () => {
    const date = new Date();
    const salesman = new Salesman('Petro', 'Petrov', 'Petrovich', '+380(0512)386235', date);
    expect(salesman.hireDate).toBe(date);
  });
  it('allows you to get a full name', () => {
    const salesman = new Salesman('Petro', 'Petrov', 'Petrovich');
    const fio = salesman.getFullName();
    expect(fio).toBe('Petro Petrovich Petrov');
  });
});
