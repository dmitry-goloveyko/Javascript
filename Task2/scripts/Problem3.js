var Summarize = function (previousValue, currentValue, index) {
    var sum = previousValue + currentValue;
    return sum;
}

Array.prototype.fold = function (callback, initialValue) {
    if (this.length === 0) { 
        return initialValue;
    }
    else {
        return callback(this[0], this.slice(1).fold(callback, initialValue));
    }
}

var execute3 = function () {
    var data = document.getElementById('Problem3_Output').value.split(' ');
    for (var i = 0; i < data.length; i++) {
        data[i] = +data[i];
    }

    var result = data.fold(Summarize, 0);
    document.getElementById('Problem3_Output').value = result;
}

