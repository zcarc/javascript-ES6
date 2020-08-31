// 같은 파일명의 다른 구현부는 ES6를 사용하지 않은 순수 프로토타입을 사용한 상속을 사용한 방법이다.

class Person {
  constructor(name, age) {
    this.name = name || "이름없음";
    this.age = age || "나이모름";
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.name;
  }
}

class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position || "직책모름";
  }

  getPosition() {
    return this.position;
  }
}
