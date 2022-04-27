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
var arrr = []
var result = arr.find(function (item, index) {
    return item.add == "vinh linh"

})
console.log(result);
// tìm ra đối tượng đầu tiên thỏa mãn và trả về đối tượng đó 