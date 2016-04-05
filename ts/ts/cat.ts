class Cat {
	constructor(public name: string){
		this.name = name;
	}
	legNumber = "4";
	speak(){
		document.write( '<br/>I am ' + this.name + '!' );
	}
}

export {Cat};