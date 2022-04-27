var arr = [
    {
        name: "khanh hoa",
        add: "vinh linh"
    },
    {
        name: "quang kiet",
        add: "vinh linh"
    },
    {
        name: "hanny",
        add: "sai gon"
    },
    {
        name: "bao nhi ",
        add: "my ca"
    }
]

arr.forEach(function (item, index) {
    console.log(item);
})
//dùng để duyệt qua từng phần tử của mảng  trar về các phần tử
/**
 * hương thức gọi một hàm cho từng thành phần trong một mảng.
 * phương thức không được thực thi cho các phần tử trống
 */

var arr = [
    { field: 'name', value: 'Sơn Đặng' },
    { field: 'age', value: 18 },
    { field: 'address', value: 'Hà Nội' },

]
function  getRequestBodyFromValues(formValues) {
    var result = {}
    formValues.forEach(function(item){
        result[item.field]= item.value
    })
    return result
}
console.log(getRequestBodyFromValues(arr));
/** */
var numbers = [1,2,3,4,56,]
function sumArr (sumArr) {
    var sum = 0 
    sumArr.forEach(function(num){
        sum += num
    })
    return sum

}
console.log(sumArr(numbers));