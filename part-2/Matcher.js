const fs = require('fs');
const Participant = require('./Participant');

module.exports = class Matcher {
  constructor() {
    this.participants = [];
    this.pairs = [];
  }

  async loadParticipants() {
    const fileInfo = await fs.promises.readFile(`${__dirname}/data/participant.txt`, 'utf-8');

    const participantsData = fileInfo.split('\n').map((participant) => ({
      name: participant.split(' ')[0],
      age: Number(participant.split(' ')[1]),
      gender: participant.split(' ')[2],
    }));

    for (const { name, age, gender } of participantsData) {
      this.participants.push(new Participant(name, age, gender));
    }
  }

  getMales() {
    return this.participants.filter((participant) => participant.gender === 'male');
  }

  getFemales() {
    return this.participants.filter((participant) => participant.gender === 'female');
  }

  generatePairs() {
    const males = this.getMales();
    const females = this.getFemales();

    for (let i = 0; i < males.length; i += 1) {
      for (let j = 0; j < females.length; j += 1) {
        this.pairs.push([males[i], females[j]]);
      }
    }
    return this.pairs;
  }

  whoLikes(person) {
    return this.participants.filter((participant) => {
      for (let i = 0; i < participant.likes.length; i += 1) {
        if (participant.likes[i] === person) {
          return participant;
        }
      }
      return null;
    });
  }
};
