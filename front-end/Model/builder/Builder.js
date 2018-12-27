/**
 * @author : yusik
 * @date : 2018-12-20
 */

class User {
  constructor(build) {
    if(build) {
        console.log(Object.keys(build));
      this.id = build.id;
      this.name = build.name;
      this.age = build.age;
    }
  }

  static get Builder() {
    class Builder {

      setId(id) {
        this.id = id;
        return this;
      }

      setName(name) {
        this.name = name;
        return this;
      }

      setAge(age) {
        this.age = age;
        return this;
      }

      build() {
        return new User(this);
      }
    }

    return new Builder();
  }
}

function test() {

  let user1 = new User();
  user1.id = 0;
  user1.age = 29;
  user1.name = 'Tom';
  console.log(user1);

  let builder = User.Builder;
  let user2 = User.Builder.setId(1).setName('jason').setAge(22).build();
  console.log(user2);

  let builder2 = User.Builder;
  let user3 = builder2.setId(2).setName('koh').build();
  console.log(user3);

}

test();