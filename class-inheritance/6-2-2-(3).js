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

var extendClass = (function () {
  function Bridge() {}
  return function (Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
  };
})();

extendClass(Person, Employee);

Employee.prototype.getPosition = function () {
  return this.position;
};
