/**
 * DOM attribute
 *  el.tenAttribute='giaTriAtttribute'
 *  el.setAttribute('tenAttribute','giaTriAtttribute')
    el.getAttribute('tenAttribute'):lấy ra giá trị của attribute
 */
var headingEl = document.querySelector(".headingTotal .headings:first-child");
headingEl.id = "anh";
headingEl.className = "anh";
headingEl.setAttribute("title", "anhaanh");
// console.log(headingEl);

// console.log(headingEl.getAttribute("title"));

/**
 * get textNode : bỏ qua những thẻ <tag> và lấy ra nội dung
 *  elNode.innerText: trả lại những gì nhìn thấy ở brower
 *  elNode.textContent: trả lại textNode bên trong (những gì nhìn thấy ở IDE)
 * set textNode
 * elNode.innerText='noiDungMoi'
 * elNode.textContent='noiDungMoi'
 */
let headingEx = document.querySelector("#headingEx");
// console.log(headingEx.innerText);
// console.log(headingEx.textContent);
// headingEx.textContent = "Ngoc ChoDien";
