class Dog {
	constructor(public name: string,public attack:number){
		this.name = name;
		this.attack = attack;
	}
	legNumber = "4";
	bark(){
		document.write('<br/>I am ' + this.name + '! I have '+this.legNumber+'legs!' );
	}
	assault( object ){
		object.hp -= this.attack;
		console.log( this.name + " assaulted " + object.name + ". " + object.name + "'s hp is now "+object.hp+".");
	}
}


export {Dog};