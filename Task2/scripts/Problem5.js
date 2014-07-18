Array.prototype.map = function (mapFunc) {
    if (this.length === 0) {
        return this;
    }
    else {
        return [mapFunc(this[0])].concat(this.slice(1).map(mapFunc));
    }
}

function multiplyBy10(i) {
    return i * 10;
}

var execute5 = function () {
    var data = document.getElementById('Problem5_Output').value.split(' ');
    for (var i = 0; i < data.length; i++) {
        data[i] = +data[i];
    }

    var result = data.map(multiplyBy10);
    document.getElementById('Problem5_Output').value = result;
}