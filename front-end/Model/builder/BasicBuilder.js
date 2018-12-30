/**
 * @author : yusik
 * @date : 2018-12-27
 */

class Builder {

  init() {
    Object.keys(this).forEach((key) => {
      const setterName =
        `set${key.substr(0, 1).toUpperCase()}${key.substr(1)}`;

      this[setterName] = (value) => {
        this[key] = value;
        return this;
      };
    });
  }

  build() {
    return this;
  }

}


class User extends Builder {
  constructor() {
    super();

    this.id = -1;
    this.name = null;
    this.age = 0;

    super.init();
  }

  static print() {
    console.log('just print!');
  }

}

function testBuilderPattern() {

  const user = new User()
    .setId(1)
    .setName('jason')
    .setAge(22).build();

  console.log(user);

}

testBuilderPattern();