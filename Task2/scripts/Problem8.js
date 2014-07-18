var Summarize = function (previousValue, currentValue, index) {
    var sum = previousValue + currentValue;
    return sum;
}

Array.prototype.SumOfNumbers = function (callback, initialValue) {
    if (this.length === 0) {
        return initialValue;
    }
    else {
        return callback(this[0], this.slice(1).SumOfNumbers(callback, initialValue));
    }
}

var execute8 = function () {
    var data = document.getElementById('Problem8_Output').value.split(' ');
    for (var i = 0; i < data.length; i++) {
        data[i] = +data[i];
    }

    var result = data.SumOfNumbers(Summarize, 0);
    document.getElementById('Problem8_Output').value = result;
}