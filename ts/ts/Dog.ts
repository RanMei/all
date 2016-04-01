class Dog {
	constructor(public name: string){
		this.name = name;
	}
	bark(){
		return( 'I am ' + this.name + '!' );
	}
}

// export {Dog};