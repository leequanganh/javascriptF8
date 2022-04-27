var classListEl = document.querySelector(".classList");
// console.log({ classListEl });
classListEl.classList.add("red");
classListEl.classList.remove("red");
// console.log(classListEl.classList.contains("black"));

setInterval(function () {
  classListEl.classList.toggle("red");
}, 1000);
