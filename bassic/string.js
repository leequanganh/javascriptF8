/* javascrript String Method
 */
var myString = 'tran nguyeen hong ngoc ngoc'
// find-index
console.log(myString.indexOf('ngoc',19));
console.log(myString.lastIndexOf('ngoc'));
console.log(myString.search('ngoc'));

//cut-String
console.log(myString.slice(18,22));
//replace ->> ghi đè
console.log(myString.replace('hong ngoc','cong chua'));
//trim()->> loại bỏ khoản trắng của 2 đầu 
// split ->> chuyển từ chuỗi thành mảng 
var language = 'js,html,css'
console.log(language.split(','));
var names = 'lequanganh'
console.log(names.split(''));
//character by index
var myString2 = 'hong ngoc'
console.log(myString2[0]);
var Pi = 3.14
console.log(Pi.toFixed(1));