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
var result = arr.every(function (item, i) {
    console.log(i);
    return item.add === "vinh linh"
})
console.log(result);
// Phương thức every () kiểm tra xem tất cả các phần tử trong mảng có vượt qua kiểm tra được thực hiện bởi hàm được cung cấp hay không. Nó trả về một giá trị Boolean.