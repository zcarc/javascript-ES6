// 어레이도

var arr = [1, 2, 3]

// 이 부분을 직접 정의 해주지 않으면 배열 [] 대괄호 부분없이 string으로 변환된다.
Array.prototype.toString = function() {
    return '[' + this.join(', ') + ']';
}

console.log(arr.toString());
console.log(arr.__proto__.toString.call(arr));
console.log(arr.__proto__.__proto__.toString.call(arr));