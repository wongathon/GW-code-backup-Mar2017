// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer.prompt([
{
	type: "input",
	message: "What is your name?",
	name: "name"
},
{
	type: "password",
	message: "Choose password",
	name: "password"
},
{
	type: "list",
	message: "what's your favorite vegetable?",
	choices: ["cucumber", "eggplant", "mega-cucumber"],
	name: "dongpreference"
},
{
	type: "checkbox",
	message: "What pokemon is real?",
	choices: ["Pikachu", "Bulbasaur", "David"],
	name: "pokemon"
},
{
    type: "confirm",
    message: "Are you sure:",
    name: "confirm",
    default: true
}


]).then(function(user){

	console.log(JSON.stringify(user, null, 2));
	if (user.confirm){
		console.log("You are "+user.name);
		console.log("You like "+user["dongpreference"]+"-sized dongs");
		console.log("You thought "+user.pokemon+" was real? Hahaha :/");
	} else {
		console.log("You dammned coward, "+user.name+"!!!")
	}

})