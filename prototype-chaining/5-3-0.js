
var arr = [1, 2, 3]

arr.toString = function () {
    return this.join('_')
}

console.log(arr.toString());

console.log(arr.__proto__.toString.call(arr));
console.log(arr.__proto__.__proto__.toString.call(arr)); // 첫번째 proto는 Array.prototype,  두번째는 Object.prototype 로 구성된다.

// 배열 리터럴은 어레이 생성자 함수와 그 프로토타입으로 이루어져 있다.
// Array.prototype에는 배열 메소드가 모두 들어있다.
// 즉, Array의 prototype은 객체이다.
// __proto__는 생략 가능하기 때문에 배열 메서드가 마치 자신의 메서드인 것 처럼 호출할 수 있게 된다.
// prototype 이 객체라는 말은 곧, Object 생성자 함수의 new 연산자로 생성된 인스턴스라는 말이 되고,
// 따라서 Object 의 prototype을 상속받게 된다.
// 이렇게 prototype이 상속 받는 이런 구조를 prototype chaining 이라고 한다.