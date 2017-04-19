var inquirer = require('inquirer');

function Player(n, p, OP, DP) {
	this.name = n;
	this.position = p;
	this.offense = OP;
	this.defense = DP;

	this.GoodGame = function(){
		var coin = Math.floor(Math.random() * 2);
		if (coin == 1){
			this.offense += 0.2;
		} else {
			this.defense += 0.2;
		}
	}

	this.BadGame = function(){
		var coin = Math.floor(Math.random() * 2);
		if (coin == 1){
			this.offense -= 0.2;
		} else {
			this.defense -= 0.2;
		}
	}

	this.PrintStats = function(){
		var propVal;
		for (var prop in this){
			propVal = this[prop];
			console.log(prop+" : "+propVal);
		}

	}
}

var team = [];
var num = 8;

makeTeammates(num);

function makeTeammates(num){
	if (num > 0){
		inquirer.prompt([
		{
			name: "name",
			message: "Teammate Name: ",
		}, {
			name: "position",
			message: "Teammate position: ",
		}, {
			name: "OffensePower",
			message: "Offense (1-10):"
		}, {
			name: "DefensePower",
			message: "Defense (1-10):"
		}
	]).then(function(answers){	
		var newPlayer = new Player(answers.name, answers.position, answers.OffensePower, answers.DefensePower);

		team.push(newPlayer);

		num--;
		makeTeammates(num);
		});
	} else {
		return;
		for (var i=0; i<team.length; i++){
			team[i].PrintStats();
		}
	}
	
}

