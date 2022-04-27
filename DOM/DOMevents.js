let aEl = document.querySelectorAll("a");
// aEl.forEach((item) => {
//   console.log(item);
//   item.onclick = (e) => {
//     console.log(e.target.href);
//   };
// });
for (let i = 0; i < aEl.length; ++i) {
  console.log(aEl[i]);
  aEl[i].onclick = function (e) {
    console.log(e.target.href);
    if (!e.target.href.includes("https://fullstack.edu.vn/courses"))
      e.preventDefault();
  };
}
