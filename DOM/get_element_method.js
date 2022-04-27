/**
 *getElementById(): lấy được 1 element có ID đó trong DOM
 *getElementsByClassname : lấy được 1 danh sách các element có class đó trong DOM
 getElementsByTagName : lấy được 1 danh sách các element có <tag> đó trong DOM
 *querySelector : lấy được 1 element có class đó trong DOM
*querySelectorAll : lấy được 1 danh sách các element có class đó trong DOM
* HTML collections
* từ một Node có sắn có thể lấy được các element con của nó
 */
var headingNode = document.getElementById("heading");
// console.log({ headingNode });

var headingNodes = document.getElementsByClassName("headings");
// console.log(headingNodes);

var h1Nodes = document.getElementsByTagName("h1");
// console.log(h1Nodes);

var headingNode2 = document.querySelector(
  ".headingTotal .headings:first-child"
);
// console.log(headingNode2);

var headingNode3 = document.querySelectorAll(".headingTotal .headings");
// console.log(headingNode3);

var boxNode = document.querySelector("#headingEx");
// console.log(boxNode);
var ulNode = boxNode.querySelector("ul");
// console.log(ulNode);
var pNode = boxNode.querySelector("p");
// console.log(pNode);

document.write("ádf");
