
Array.prototype.First = function () {
    for(var i = 0; i < this.length; i++) {
        if (this[i] < 10) {
            return this[i];
        }
    }
}

var execute9 = function () {
    var data = document.getElementById('Problem9_Output').value.split(' ');
    for (var i = 0; i < data.length; i++) {
        data[i] = +data[i];
    }

    var result = data.First();
    document.getElementById('Problem9_Output').value = result;
}