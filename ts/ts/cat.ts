class Cat {
	constructor(public name:string,public hp:number){
		this.name = name;
		this.hp = hp;
	}
	speak(){
		document.write( '<br/>I am ' + this.name + '!' );
	}
}

export {Cat};