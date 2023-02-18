const Doughnut = require('../Doughnut');
const Stuffing = require('../Stuffing');

describe('Doughnuts', () => {
  describe('class Stuffing', () => {
    it('allows you to set the name', () => {
      const name = 'Raspberry syrup';
      const stuffing = new Stuffing({ name });
      expect(stuffing.name).toBe(name);
    });
    it('allows you to set the weight', () => {
      const weight = 15;
      const stuffing = new Stuffing({ name: 'Raspberry syrup', weight });
      expect(stuffing.weight).toBe(weight);
    });
  });

  describe('class Doughnut', () => {
    it('allows you to set the name', () => {
      const name = 'Poppy';
      const doughnut = new Doughnut({ name });
      expect(doughnut.name).toBe(name);
    });
    it('contains the default name', () => {
      const doughnut = new Doughnut();
      expect(doughnut.name).toBe('Doughnut');
    });
    it('contains the base weight', () => {
      const doughnut = new Doughnut();
      expect(doughnut.baseWeight).toBe(60);
    });
    it('allows you to set a list of stuffing', () => {
      const stuffings = [
        new Stuffing(),
        new Stuffing(),
      ];
      const doughnut = new Doughnut({ stuffings });
      expect(doughnut.stuffings).toBe(stuffings);
    });
    it('calculates the total weight together with the fillings (getter)', () => {
      const stuffings = [
        new Stuffing({ name: 'Raspberry jam', weight: 15 }),
        new Stuffing({ name: 'Milk chocolate', weight: 10 }),
      ];
      const doughnut = new Doughnut({ name: 'Poppy', stuffings });
      expect(doughnut.weight).toBe(15 + 10 + 60);
    });
    it('gives the base weight if there is no list of stuffing', () => {
      const doughnut = new Doughnut();
      expect(doughnut.weight).toBe(60);
    });
  });
});
