"use strict";
var Dog = (function () {
    function Dog(name, attack) {
        this.name = name;
        this.attack = attack;
        this.name = name;
        this.attack = attack;
    }
    Dog.prototype.bark = function () {
        document.write('<br/>I am ' + this.name + '!');
    };
    Dog.prototype.assault = function (object) {
        object.hp -= this.attack;
        console.log(this.name + " assaulted " + object.name + ". " + object.name + "'s hp is now " + object.hp + ".");
    };
    return Dog;
}());
exports.Dog = Dog;
//# sourceMappingURL=dog.js.map