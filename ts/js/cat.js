"use strict";
var Cat = (function () {
    function Cat(name, hp) {
        this.name = name;
        this.hp = hp;
        this.legNumber = "4";
        this.name = name;
        this.hp = hp;
    }
    Cat.prototype.speak = function () {
        document.write('<br/>I am ' + this.name + '!');
    };
    return Cat;
}());
exports.Cat = Cat;
