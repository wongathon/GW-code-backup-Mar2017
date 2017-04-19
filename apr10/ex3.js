function Tamagotchi(){
	this.hungry = false;
	this.sleepy = false;
	this.bored = true;
	this.age = 0;
	this.feed = function(){
		if (this.hungry){
			console.log("That yummy!")
		} else {
			console.log("Yuck. No thanks.")
		}
	}

	this.sleep = function(){
		if (this.sleepy){
			console.log("Yawn, goodnight!")
			this.increaseAge();
		} else {
			console.log("I'm not tired!")
		}
	}

	this.play = function(){
		if (this.bored){
			console.log("Yay lets play!")
		} else {
			console.log("Nah I'm busy.")
		}
	}

	this.increaseAge = function(){
		console.log("Zzzzz");
		this.age += 1;
		console.log("Happy birthday to me! I am "+this.age+" years old!");
	}
}

var Dog = new Tamagotchi();

Dog.sleepy = true;
Dog.sleep();

Dog.Outside = false;
Dog.Bark = function(){
	console.log("Woof woof!");
}
Dog.goOutside = function(){
	if (!Dog.Outside){
		console.log("Yay! I love the outdoors!")
	} else {
		console.log("We're already outside.")
	}
}

Dog.goOutside();
Dog.goOutside();

Dog.goInside = function(){
	if(Dog.Outside){
		console.log("Do we have to? Ok...")
	} else {
		console.log("We're already inside you monster")
	}
}

Dog.goInside();
Dog.goInside();

var Cat = new Tamagotchi();
Cat.HouseCondition = 100;
Cat.meow = function(){
	console.log("meow meow")
}
Cat.destroyFurniture = function(){
	if (this.HouseCondition > 0) {
		console.log("BwahahaHAHA! Take that couch!");
		Cat.bored = false;
		Cat.sleepy = true; 
		this.HouseCondition -= 10;
		console.log("Your house HouseCondition is:" + this.HouseCondition)
	} else {
		console.log("Your house is ruined");
	}
}

Cat.buyNewFurniture = function(){
	this.HouseCondition += 50;
	console.log("Are you sure about that!");
}

Cat.destroyFurniture();
Cat.destroyFurniture();

Cat.buyNewFurniture();