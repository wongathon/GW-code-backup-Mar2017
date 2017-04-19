function guy(name, pro, gen, age, str, hp){
	this.Name = name;
	this.Profession = pro;
	this.Gender = gen;
	this.Age = age;
	this.Strength = str;
	this.HP = hp;
	this.PrintStats = function(){
		for (var prop in this){
			var propVal = this[prop];
			console.log(propVal);
		}
	}

	this.isAlive = function(){
		if (this.HP !== 0) return true;
		else return false;
	}

	this.Attack = function(enemy){
		enemy.HP -= this.Strength;
	}

	this.levelUp = function(){
		this.Age += 1;
		this.Strength += 5;
		this.HP += 25;
	}
}

var Andy = new guy("Andy", "Coder", "Male", 28, 99, 200);
var Bill = new guy("BillyBob", "Sucker", "Male", 20, 60, 265);

Andy.PrintStats();
Bill.PrintStats();

Andy.Attack(Bill);

Bill.PrintStats();
Bill.isAlive();
