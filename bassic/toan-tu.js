// toan tu so hoc
// ->toan tu  + - * / % **(luy thua)
var a = 1;
var b = 2;
var c = a + b;
console.log(c);
// -> tien to / hau to
// ++a ->tra ve ket qua sau khi duoc cong 1
// a++ ->coppy ra bien a tra ve bien coppy
var number = 6;
var output = ++number * 2 - number-- * 2;
console.log(output);
// toan tu gan
// =    +=  -=  *=  /=  **=
// toan tu chuoi
var firstName = ' le ';
var lastName = ' quang anh';
var names = firstName + lastName;
console.log(names + ' ' + 'dep trai');
// toan tu so sanh
// == != >= <= > <
var a = 1;
var b = 2;
if (a > b) {
  console.log('a lon hon b');
} else if (a < b) {
  console.log('a be hon b ');
} else if (a != b) {
  console.log(' a khong bang b ');
}
// kieu du lieu boolean
var a = 1;
var b = 2;
var isSuccess = a > b;
console.log(isSuccess);
// cau dieu kien if 
if(false){
    console.log('dieu kien dung');
}else {
    console.log('dieu kien sai');
}
// toan tu logic &&  ||  !
var a = 1
var b = 2
var c = 3
if(a>0 && b>0){
    console.log('dieu kien dunng');
}
//toán tử so sánh phần 2 
/**
 * ===
 * !==
 */
var a = 1
var b = '1'
console.log(a==b);
