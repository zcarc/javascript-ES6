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

Employee.prototype = new Person();
Employee.prototype.constructor = Employee;
Employee.prototype.getPosition = function () {
  return this.position;
};

var gomu = new Employee("고무", 30, "CEO");
console.dir(gomu);

// Employee 객체는 age, name, position 프로퍼티가 있고
// prototype으로 Person을 할당함
// 그리고 그 prototype의 constructor에 Employee를 할당함.
// Employee.prototype -> Person -> Person.constructor -> Employee
