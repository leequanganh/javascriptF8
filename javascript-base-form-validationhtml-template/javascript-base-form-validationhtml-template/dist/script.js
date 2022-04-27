// Viết mã JS tại đây
/**
 * # viết cái required trước:
    1.tạo cái form options trước. để truyền các địa chỉ cần setup vào.
    2. tạo đối tường và các rules tương ứng.
    3. truyền khối object options vào đối tượng3.
    4. có khối rồi thì lấy ra form tương ứng để làm tiền đề select những đứa con.
    5. để tránh lỗi phát sinh do sơ ý ta nên xử lý logic: nếu tồn tại form thì ...
    6. trước khi muốn lắng nghe các event trên các thẻ input thì ta phải lắng nghe nó từ đó ms có thế set mã vào.
    7. để select ra đúng thẻ ta phải viết rules để biến đối số truyền vào thành 1 chuỗi để dùng ở hàm sau.
    8. trong rule hãy return về object vì object có thể thực hiện nhiều hành động, kể cả chạy function.
    9. trong object đó thứ 1 phải trả về đối số, thứ 2 là key test và function của nó để ra các bài test.
    10. khi viết ở rules return cái thì thì nó sẽ biến thành value của key rules bên Options. vì vậy khi mà gọi đối tượng Validator thì value rules nhận đc là thứ là vừa ms nhận từ thằng return.
    11. Có tập hợp các rule rồi thì ta bắt đầu lặp qua các phần tử cúa nó bằng forEach. để lấy đc các cái rule theo 1 cách độc lập. Lấy ra thằng Id của th3 muốn settings. 
    12. lấy nó ra thôi. sau khi có nó thì ta lắng nghe thôi. nhớ xử lý thêm logic nếu tồn tại VÌ ta đang tạo thư viện. r sau đó hãy lắn nghe event blur.
    13. tạo 1 biến lưu giá trị trong thẻ input xem nó có rỗng ko? nếu rỗng làm j? 
    14. để làm đc 13 ta phải trỏ tới hàm test. ở thằng onblur ta có thể lấy đc value và thằng test() rồi. Việc tiếp theo của ta là viết hàm Test để chạy nó.
    15. Viết funtion test. cầm value của người dùng nhập truyền vào function đó để chạy.
    16 Nguyên tắc của các Rule:
        - khi lỗi trả ra message lỗi.
        - khi hợp lệ ko trả ra gì( undefined).
    17. trong test() ta phải theem6 vào trim() để tránh người dùng đánh dư khoẳng trắng.
    18. logic lấy ra đúng thẻ form message:
        - đứng từ thẻ input- chọc ra thẻ cha- chọn về lại thẻ form message.
        - inputElement.parentElement.querySelector('.form-message')
    19. Dùng else để xử lý khi có value. thêm class đỏ.
    20. để tiện khi bấm submit thì ta kéo đoạn từ on blur ra ngoài để dùng chung.

 */
function Validator(options) {
  //   console.log(options.form);
  var formElement = document.querySelector(options.form);
  if (formElement) {
    // console.log(formElement);
    // console.log(options.rules);
    options.rules.forEach((rule) => {
      //   console.log(rule);
      var inputElement = formElement.querySelector(rule.selector);
      if (inputElement) {
        inputElement.onblur = () => {
          console.log("blur" + rule.selector);
        };
      }
      //   console.log(inputElement);
    });
  }
}
//định nghĩa các rules
Validator.isRequied = (selector) => {
  return {
    selector: selector,
    test: function () {},
  };
};
Validator.isEmail = (selector) => {
  return {
    selector: selector,
    test: function () {},
  };
};
