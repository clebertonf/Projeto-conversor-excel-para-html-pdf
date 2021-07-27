class CreateClass {
  constructor(data) {
    this.header = data[0];
    data.shift();
    this.rows = data;
  }
}

module.exports = CreateClass;
