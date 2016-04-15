class Dog {
	constructor(public name: string,public attack:number){
		this.name = name;
		this.attack = attack;
	}
	bark(){
		document.write('<br/>I am ' + this.name + '!' );
	}
	assault( obj: any ){
		obj.hp -= this.attack;
		console.log( this.name + " assaulted " + obj.name + ". " + obj.name + "'s hp is now "+obj.hp+".");
	}
}

export {Dog};