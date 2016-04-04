//import {Dog} from './Dog';

class Dog {
	constructor(public name: string){
		this.name = name;
	}
	legNumber = "4";
	bark(){
		return( 'I am ' + this.name + '!' );
	}
}

var Goofy = new Dog('Goofy');
    
document.write( Goofy.legNumber,Goofy.bark() );
document.write( "<br/>hahahahahahaahhah" );

