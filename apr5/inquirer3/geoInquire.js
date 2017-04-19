var geocoder = require("geocoder");
var inquirer = require("inquirer");

inquirer.prompt([
{
	type: "input",
	message: "type in your address!",
	name: "address"
}
]).then(function(user){
	console.log(JSON.stringify(user, null, 2));

	geocoder.geocode(user.address, function(err, data){

	if (err) {
    	console.log(err);
  	}

	console.log(data);
	});

})