// 6-2-2

function Person(name, age) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
}

Person.prototype.getName = function () {
  return this.name;
};

Person.prototype.getAge = function () {
  return this.age;
};

function Employee(name, age, position) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
  this.position = position || "직책모름";
}

function Bridge() {}

Bridge.prototype = Person.prototype;
Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee;

Employee.prototype.getPosition = function () {
  return this.position;
};

var gomu = new Employee("고무", 30, "CEO");
console.dir(gomu);

// 이 방법과 6-2-2.js의 차이점은
// Employee.prototype에서 직접 new Person()을 할당받으면
// 원치 않는 값인 Employee의 prototype에서
// Person의 property를 받게 된다.
// Employee와 Person 모두에 name, age가 있어서 중복되게 된다.
// 그래서 Person의 메서드만 받고 싶을 경우에는
// Bridge라는 빈 객체를 생성하고
// Person의 생성자가 아니라 prototype 메소드로 생성한 해당 메서드만 있는
// Person.prototype을 Bridge.prototype에 할당하면 된다.
// new Bridge()로 생성한 인스턴스는 원래 내부에 아무것도 없고
// prototype만 존재하기 때문에 해당 prototype을
