'use strict';

var points = [74989, 74990, 84990, 62000, 58480, 61800];

function getTopPoint(points) {
    points.sort();
    return points[points.length - 1];
}

function getTopAverage(points) {
    points.sort(function(a, b){return b - a});
    return (points[0] + points[1] + points[2])/3;
}

console.log(getTopPoint(points));
console.log(getTopAverage(points));


