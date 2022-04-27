var courses = ['html', 'js', 'css']
//////////////reduce()//////////////////////////
Array.prototype.reduce2 = function (callback, result) {
    let i = 0
    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result
}
/////////////////map()//////////////////////////
Array.prototype.map2 = function (callback) {
    var output = []
    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i)
        output.push(result)
    }
    return output
}
var newCourse = courses.map2((item) => {
    return item
})
// console.log({newCourse});
/////////////////////forEach()///////////////////
Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            callback(this[index], index, this)
        }
    }
}
// courses.forEach2(function(item){
//     console.log(item);
// })
/////////////filter()///////////////////////////
var numArr = [1, 2, 3, 44, 565, 9, -1, -2, 4]
Array.prototype.filter2 = function (callback) {
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this)
            if (result) {
                output.push(this[index])
            }

        }
    }
    return output
}
var newNums = numArr.filter2(function (item) {
    return item > 0
})
// console.log(newNums);
///////////////////some()/////////////////
Array.prototype.some2 = function (callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (callback(this[index], index, this)) {
                return true
            }
        }
    }
    return false
}
console.log(numArr.some2(function (item) {
    return item > 100000
}));
/////////////////every()//////////////
Array.prototype.every2= function(callback){
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
           if( !(callback(this[index], index, this))){
                return false
           }

        }
    }
    return true
}
console.log(numArr.every(item=>item!==0));