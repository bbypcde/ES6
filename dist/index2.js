"use strict";

var add = function add(x, y) {
    return x + y;
};
console.log(add(3, 4));
setTimeout(function () {
    console.log("haah");
}, 10);
