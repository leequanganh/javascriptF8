/**
 * Phương thức Reduce () thực thi một hàm giảm thiểu cho phần tử mảng.
 * Phương thức Reduce () trả về một giá trị duy nhất: kết quả tích lũy của hàm.
 * Phương thức Reduce () không thực thi hàm đối với các phần tử mảng trống.
 * Phương thức Reduce () không thay đổi mảng ban đầu.
 */
var numbers = [1, 2, 3, 4, 5, 6]

// var sum = 0 
// for(var num of numbers){
//     sum+= num
// }
// console.log(sum);




// Array.prototype.reduce2 = function (callback, result) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1
//         result = this[0]
//     }
//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result
// }
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

var sumArr = function (numbers) {
    return numbers.reduce2(function (num, sum) {
        return sum + num
    },0)
}
console.log(sumArr(numbers));