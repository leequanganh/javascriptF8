var array = [
    'toan',
    'ly',
    'hoa'
]
var string = ' quanganhle'
var object = {
    ten : 'anh',
    tuoi : 23,
    add : "khanh hoa"
}
Object.keys(object)
Object.values(object)
for(var value of Object.values(object)){
    console.log(value);
}
for(var value of string){
    console.log(value);
}
/**
 * vòng lặp for-of
 *          -lấy ra value của string/arr
 *          -object thif phải chuyển đổi mới lấy được
 */