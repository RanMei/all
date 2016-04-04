//import {Dog} from './Dog';
var Dog = (function () {
    function Dog(name) {
        this.name = name;
        this.legNumber = "4";
        this.name = name;
    }
    Dog.prototype.bark = function () {
        return ('I am ' + this.name + '!');
    };
    return Dog;
}());
var Goofy = new Dog('Goofy');
document.write(Goofy.legNumber, Goofy.bark());
document.write("<br/>hahahahahahaahhah");
