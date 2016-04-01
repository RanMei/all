// import {Dog} from './Dog';

class Dog {
	constructor(public name: string){
		this.name = name;
	}
	bark(){
		return( 'I am ' + this.name + '!' );
	}
}

var Goofy = new Dog('Goofy');
    
document.write( Goofy.bark() );
document.write( "<br/>hahahahahahaahhah" );

