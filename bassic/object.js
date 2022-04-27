var nyKey = 'nguoi yeu ';

var myInfo = {
  name: 'quang anh',
  add: 'kh',
  [nyKey]: 'hong ngoc',
  getNy: function () {
    return this.add;
  },
};
//  them mot cap key value
myInfo['sdt'] = 0816141269;
console.log(myInfo.name);

// xoa mot cap key value
delete myInfo.add;
console.log(myInfo);
// object contructor

function UserX(firstName, lastName, avt){
    this.firstName = firstName,
    this.lastName = lastName,
    this.avt = avt
}
var author = new UserX('le','quanganh','avt')
console.log(author);
// date 
var date = new Date()
var year = date.getUTCFullYear()
var month = date.getMonth()
var day = date.getDate()
console.log(`${year} ${month} ${day}`);