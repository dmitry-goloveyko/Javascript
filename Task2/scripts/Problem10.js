var lazy = function (array) {
    
    var sum = 0;
    lazy = (function (array) {
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
    }(array));
    return sum;
}

var execute10 = function () {
    var data = document.getElementById('Problem10_Output').value.split(' ');
    for (var i = 0; i < data.length; i++) {
        data[i] = +data[i];
    }

    var sum = lazy(data);
    

    document.getElementById('Problem10_Output').value = sum;
}