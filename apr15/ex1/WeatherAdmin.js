var weather = require('weather-js');
var fs = require('fs');

var WeatherAdmin = function(){
	this.getData = function(){
		fs.readFile("log.txt", "utf8", function(err, data){
			console.log("\n"+data);
		});
	}

	this.newUserSearch = function(user, loc){
		var data;
		weather.find({search: loc, degreeType: 'F'}, function(err, result){
			if (err) console.log(err);
			data = JSON.stringify(result, null, 2);

			console.log(data);
		});

		fs.appendFile("log.txt", "\n"+ data, function(err){
			if (err){
				console.log(err);
			}
		});
	}
}

module.exports = WeatherAdmin;