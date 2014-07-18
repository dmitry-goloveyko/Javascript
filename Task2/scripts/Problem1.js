

var partial = function (fn) {
    var aps = Array.prototype.slice;
    var args = aps.call(arguments, 1);

    return function () {
        return fn.apply(this, args.concat(aps.call(arguments)));
    };
}

var multiply = function () {
    var sum = arguments[0];
    var data = arguments[1];
    for (var i = 0; i < data.length; i++)
        sum *= data[i];
    return sum;
}

var multiply10 = partial(multiply, 10);

var execute = function () {

    var data = document.getElementById('Problem1_Output').value.split(' ');
        for (var i = 0; i < data.length; i++) {
            data[i] = +data[i];
        }

        document.getElementById('Problem1_Output').value = multiply10(data);
}