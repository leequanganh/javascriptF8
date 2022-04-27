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
var result = arr.filter(function (item, index) {
    return item.add == "vinh linh"

})
console.log(result);
// tìm ra tất cả các đối tượng đầu tiên thỏa mãn và trả về tất cacr các đối tượng đó
var arr1 = ['anh','kiet','hanny']
var arr2 = ['kiet','hanny','baonhi']
console.log(arr1.includes('hanny'));
