(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
var Cat = (function () {
    function Cat(name, hp) {
        this.name = name;
        this.hp = hp;
        this.name = name;
        this.hp = hp;
    }
    Cat.prototype.speak = function () {
        document.write('<br/>I am ' + this.name + '!');
    };
    return Cat;
}());
exports.Cat = Cat;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";
var Dog_1 = require('./Dog');
var Cat_1 = require('./Cat');
var Goofy = new Dog_1.Dog('Goofy', 5);
var Judy = new Cat_1.Cat('Judy', 500);
Goofy.bark();
Judy.speak();
Goofy.assault(Judy);
Goofy.assault(Judy);

},{"./Cat":1,"./Dog":2}]},{},[3]);
