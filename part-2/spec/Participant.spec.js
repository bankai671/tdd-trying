const Participant = require('../Participant');

describe('Класс Участник', () => {
  it('позволяет задать имя', () => {
    const name = 'Иван';
    const participant = new Participant(name);
    expect(participant.name).toBe(name);
  });

  it('позволяет задать возраст', () => {
    const age = 25;
    const participant = new Participant('Иван', age);
    expect(participant.age).toBe(age);
  });

  it('позволяет задать мужской пол', () => {
    const gender = 'male';
    const participant = new Participant('Иван', 25, gender);
    expect(participant.gender).toBe(gender);
  });

  it('позволяет задать женский пол', () => {
    const gender = 'female';
    const participant = new Participant('Олеся', 25, gender);
    expect(participant.gender).toBe(gender);
  });

  it('метод like позволяет указать, что понравился другой участник', () => {
    const ivan = new Participant('Иван', 25, 'male');
    const olesya = new Participant('Олеся', 25, 'female');
    ivan.like(olesya);
    expect(ivan.likes).toEqual([olesya]);
  });

  it('метод like не добавляет одного и того же участника в понравившиеся больше одного раза', () => {
    const ivan = new Participant('Иван', 25, 'male');
    const olesya = new Participant('Олеся', 25, 'female');
    ivan.like(olesya);
    ivan.like(olesya);
    expect(ivan.likes).not.toEqual([olesya, olesya]);
  });
});
