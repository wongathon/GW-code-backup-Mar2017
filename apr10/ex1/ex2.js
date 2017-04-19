function Animal(raining, noise){
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function(){
		if (this.raining){
			console.log(this.noise)
		}
	}
}

var dogs = new Animal(true, "Woof");
var cats = new Animal(true, "Meow");
var men = new Animal(true, "I'm Hungry!");

dogs.makeNoise();
men.makeNoise();