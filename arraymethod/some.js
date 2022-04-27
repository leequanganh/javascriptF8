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
var result = arr.some(function (item, index) {
    return item.add === "vinh linh"
})
console.log(result);
// kiểm tra một phần tử của mảng phải thỏa mãn điều kiện trả về boolean
