function Person(name, age) {
    this._name = name;
    this._age = age;
}

Person.getInformations = function(instance) {
    return {
        name: instance._name,
        age: instance._age
    }
}

Person.prototype.getName = function() {
    return this._name;
}

Person.prototype.getAge = function() {
    return this._age;
}


const gomu = new Person('고무', 30)

// 인스턴스로 생성된 객체는 static, methods static proeprties에 접근이 불가능하다.
console.log(gomu.getName())
console.log(gomu.getAge())

// static methods와 static properties는 
// instance로 생성된 객체에서 접근이 불가능하다.
console.log(Person.getInformations(gomu))