class User {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== "string") {
      throw new Error("Invalid input");
    }

    this._name = val;
  }

  get age() {
    return this._age;
  }

  set age(val) {
    if (typeof val !== "number") {
      throw new Error("Invalid input");
    }

    this._age = val;
  }

  toString() {
    return `User ${this.name}`;
  }
}

export default User;
