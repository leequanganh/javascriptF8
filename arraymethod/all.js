// reduce method: lặp qua các phần tử của mảng,trả về tổng tất cả phần tử của mảng
Array.prototype.reduce2 = function(callback, result) {
    let i = 0
    if (arguments.length < 2) {
        i = 1;
        result = this[0];
    }
    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this)
    }
    return result;
}

// Map method
Array.prototype.map2 = function(callback) {
    let output = [];
    for (let i = 0; i < this.length; ++i){
        let result = callback(this[i], i);
        output.push(result)
    }
    return output;
}

// Filter metho:lặp qua các phần tử của mảng,trả về mảng mới với điều kiện truyền vào:
Array.prototype.filter2 = function(callback) {
    let output = [];
    for (let i = 0; i < this.length; ++i) {
        let element = callback(this[i]);
        if (element === true) {
            output.push(this[i]);
        }
    }
    return output;
}

// Find method:lặp qua các phần tử của màng,trả về phần tử đầu tiên của mảng mà thỏa mãn điều kiện trong function truyền vào
Array.prototype.find2 = function(callback) {
    let result
    for (let i = 0; i < this.length; ++i) {
        result = callback(this[i]);
        if (result == true) {
            return this[i]
        }
    }
}
