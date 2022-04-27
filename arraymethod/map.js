var courses = [
  {
    id: 1,
    name: "html",
    coin: 0,
  },
  {
    id: 1,
    name: "css",
    coin: 1,
  },
  {
    id: 1,
    name: "html",
    coin: 0,
  },
  {
    id: 1,
    name: "js",
    coin: 2,
  },
];
var newCourse = courses.map(function (item) {
  return {
    id: item.id,
    name: `khoa hoc ${item.name}`,
    coin: item.coin,
  };
});
console.log("courses", courses);
console.log("newCourse", newCourse);
// chỉnh sửa thay đổi el của arr
/**
 * map () tạo một mảng mới từ việc gọi một hàm cho mọi phần tử của mảng.
 * map () gọi một hàm một lần cho mỗi phần tử trong một mảng.
 * Map () không thực thi chức năng cho các phần tử trống.
 * map () không thay đổi mảng ban đầu

 */
