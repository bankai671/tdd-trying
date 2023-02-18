const Matcher = require('../Matcher');
const Participant = require('../Participant');

describe('a class Matcher for quick dates', () => {
  let matcher;

  beforeEach(() => {
    matcher = new Matcher();
  });

  it('Initially, the list of participants is empty', () => {
    expect(matcher.participants).toEqual([]);
  });

  describe('loadParticipants method', () => {
    it('returns Promise', () => {
      const promise = matcher.loadParticipants();
      expect(promise).toBeInstanceOf(Promise);
    });

    it('loads participants from the data/participant.txt file, creates instances of the Participant class, and places them in the matcher.participants array', async () => {
      await matcher.loadParticipants();
      expect(matcher.participants.length).toBe(5);

      for (const participant of matcher.participants) {
        expect(participant).toBeInstanceOf(Participant);
      }
    });
  });

  describe('methods getMales and getFemales', () => {
    beforeEach(async () => {
      await matcher.loadParticipants();
    });

    it('the getMales method allows you to get male participants', () => {
      const males = matcher.getMales();
      expect(males[0].name).toBe('Ivan');
      expect(males[1].name).toBe('Petro');
    });

    it('the getFemales method allows you to get female participants', () => {
      const males = matcher.getFemales();
      expect(males[0].name).toBe('Olesya');
      expect(males[1].name).toBe('Irina');
      expect(males[2].name).toBe('Masha');
    });
  });

  describe('generatePairs method', () => {
    let pairs;

    beforeEach(async () => {
      await matcher.loadParticipants();
      pairs = matcher.generatePairs();
    });

    it('creates pairs as a two-dimensional array (each element of the array is an array of two participants)', () => {
      expect(Array.isArray(pairs)).toBe(true);

      for (const pair of pairs) {
        expect(pair.length).toBe(2);
        expect(pair[0]).toBeInstanceOf(Participant);
        expect(pair[1]).toBeInstanceOf(Participant);
      }
    });

    it('puts each man in a pair with each woman (total number of pairs = number of men * number of women)', () => {
      expect(pairs.length).toBe(6);
    });

    it('creates couples between the different sexes', () => {
      for (const pair of pairs) {
        expect(pair.length).toBe(2);
        expect(pair[0].gender).not.toBe(pair[1].gender);
      }
    });
  });

  describe('whoLikes method', () => {
    let ivan;
    let olesya;
    let petro;

    beforeEach(async () => {
      await matcher.loadParticipants();
      /* eslint-disable prefer-destructuring */
      ivan = matcher.participants[0];
      olesya = matcher.participants[1];
      petro = matcher.participants[2];
      /* eslint-enable prefer-destructuring */
      ivan.like(olesya);
      petro.like(olesya);
    });

    it('allows you to find out who likes the specified participant', () => {
      // Кому нравится Олеся
      expect(matcher.whoLikes(olesya)).toEqual([ivan, petro]);
    });
  });
});
