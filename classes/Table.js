class CreateClass {
  constructor(data) {
    this.header = [data];
    data.shift();
    this.rows = data;
  }
}

module.exports = CreateClass;
