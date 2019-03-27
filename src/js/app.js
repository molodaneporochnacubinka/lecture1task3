'use strict';

var points = [74989, 74990, 84990, 62000, 58480, 61800];

function getTopPoint(points) {
    var max = points[0];
    var index = 0;
    for (var i = 1; i < points.length; i++) {
        if (points[i] > max) {
            max = points[i];
            index = i;
        }
    }
    return {
        value: max,
        index: index
    };
}

function getTopAverage(points, num) {
    var sum = 0;
    var i = 0;
    while (i < num) {
        var maxObj = getTopPoint(points);
        points.splice(maxObj.index, 1);
        sum += maxObj.value;
        i++;
    }
    return sum/num;
}

console.log(getTopPoint(points).value);
console.log(getTopAverage(points, 3));


