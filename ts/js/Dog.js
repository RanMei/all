"use strict";
var Dog = (function () {
    function Dog(name) {
        this.name = name;
        this.name = name;
    }
    Dog.prototype.bark = function () {
        return ('I am ' + this.name + '!');
    };
    return Dog;
}());
exports.Dog = Dog;
