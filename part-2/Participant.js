module.exports = class Participant {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.likes = [];
  }

  like(participant) {
    for (let i = 0; i < this.likes.length; i += 1) {
      if (this.likes[i] === participant) {
        return this.likes;
      }
    }

    this.likes.push(participant);
    return this.likes;
  }
};
