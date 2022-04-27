/**
 * dữ liệu nguyên thuỷ
 *  -number
 *  -String
 *  -Boolean
 *  -Undefined
 *  -Null
 *  -Symbol
 * dữ liệu phức tạp
 *  Function
 *  Object
 */
// kiểu số 
var a = 1
var b = 2
var c = 3
//String
var fullName = 'le quang anh'
//Boolean -> true/false
var isSuccess = true
//Undefined
var buoi
//Null ->> Rỗng
//Symbol
var id = Symbol('id') //unique(duy nhất)
console.log(id);
//function  
var myFuction = function(){
    console.log('hello every body');
}
myFuction()
//Object
var myObject = {
    name: 'quang anh',
    aage: 18,
    address: 'Ha Noi',
}
console.log(myObject);
//Array
var myArray = ['java scrippt', 'php', 'html', 'css']
console.log(myArray);
