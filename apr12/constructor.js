function Programmer(name, title, old, fav) {
	this.name = name;
	this.position = title;
	this.age = old;
	this.favLang = fav;

	this.info = function(){
		var propVal;
		for (var prop in this){
			propVal = this[prop];
			console.log(prop +" : "+propVal);
		}
	}
}

var Phil = new Programmer("Phil", "Lead Dev", 30, "Python");

Phil.info();