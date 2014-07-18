
var Summarize = function (previousValue, currentValue, index) {
    var sum = previousValue + currentValue;
    console.log(sum / index);
    return sum;
}

Array.prototype.filter = function (callback, initialValue, index) {
    if (this.length === 0) {
        return initialValue;
    }
    else {
        for (var i = 0; i < this.length; i++) {
            if (i % 2 === 0) {
                index++;

                return callback(this[0], this.slice(1).filter(callback, initialValue, index), index);
            }
        }
    }
}

var execute7 = function () {
    var data = document.getElementById('Problem7_Output').value.split(' ');
    for (var i = 0; i < data.length; i++) {
        data[i] = +data[i];
    }

    var result = data.filter(Summarize, 0, 0);
    document.getElementById('Problem7_Output').value = result;
}