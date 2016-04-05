"use strict";
var Dog = (function () {
    function Dog(name) {
        this.name = name;
        this.legNumber = "4";
        this.name = name;
    }
    Dog.prototype.bark = function () {
        document.write('<br/>I am ' + this.name + '! I have ' + this.legNumber + 'legs!');
    };
    return Dog;
}());
exports.Dog = Dog;
