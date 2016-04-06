class Cat {
	constructor(public name:string,public hp:number){
		this.name = name;
		this.hp = hp;
	}
	legNumber = "4";
	speak(){
		document.write( '<br/>I am ' + this.name + '!' );
	}
}

export {Cat};