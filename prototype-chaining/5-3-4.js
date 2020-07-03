
var obj = {
    a: 1,
    b: {
        c: 'c'
    },
    d: [5,6,7],
    e: function(){}
}


Object.prototype.toString = function() {

    var res = []

    for(var key in this) {
        res.push(key + ': ' + this[key].toString())
    }

    return '{' + res.join(', ') + '}'
}

Array.prototype.toString = function() {
    return '[' + this.join(', ') + ']'
}

console.log(obj.toString())