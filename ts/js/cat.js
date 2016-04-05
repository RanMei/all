"use strict";
var Cat = (function () {
    function Cat(name) {
        this.name = name;
        this.legNumber = "4";
        this.name = name;
    }
    Cat.prototype.speak = function () {
        document.write('<br/>I am ' + this.name + '!');
    };
    return Cat;
}());
exports.Cat = Cat;
