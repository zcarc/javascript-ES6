var obj = {
    a: 1,
    b: {
        c: 'c'
    },

    toString: function() {
        var res = []
        for(var key in this) {
            res.push(key + ': ', + this[key].toString())
        }
        return '{' + res.join(', ') + '}'
    }
}

console.log(obj.toString())