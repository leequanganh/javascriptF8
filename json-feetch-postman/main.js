/**
 * promise
 *      -Sync(đồng bộ):viết trước -> chạy trước
 *      -Async(bất đồng bộ):setTimeOut-setInterval-fetch-XMLHtpRequest-file reading-request animation frame
 *  -nỗi đau (callback hell / pyramid of doom)
 *  -lý thuyết, cách hoạt động
 *  -thực hành / ví dụ         
 */
//////////////////////////////////////////////////
setTimeout(() => console.log(1))
console.log(2);

var prommise = new Promise(
    function (resolve, reject) {

    }
);