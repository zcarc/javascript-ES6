var obj = {
    a: 1,
    b: {
        c: 'c'
    },
}

console.log('obj.toString(): ', obj.toString())

Object.prototype.toString = function() {

    console.log('this: ', this)
    var res = []
    for(var key in this) {
        console.log('for var key in this... key: ', key)
        res.push(key + ': ' + this[key].toString())
    }
    console.log('res: ', res)
    return '{' + res.join(',') + '}'
}

console.log(obj.toString())