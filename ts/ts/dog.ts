class Dog {
	constructor(public name: string){
		this.name = name;
	}
	legNumber = "4";
	bark(){
		document.write('<br/>I am ' + this.name + '! I have '+this.legNumber+'legs!' );
	}
}

export {Dog};