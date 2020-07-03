var a = {
    b: {
        c: function () {
            // a.b.c 프로퍼티는 b 객체에 포함된 함수라서 this는 b가 됨 만약 b 객체의 포함된 객체가 아니고
            // 함수 내부의 익명함수이거나 다른 함수로 정의된 함수라면 this는 window 객체가 됨
            console.log(this);

            b.call(this); // 예상: a.b.c 프로퍼티의 함수의 this는 a.b의 객체가 되서 그 this를 function b에 전달함
        },
        d: 44,
    }
}

function b() {
    console.log('b()... this: ', this); // 예상: a.b 객체가 this가 됨
}

b()

a.b.c()