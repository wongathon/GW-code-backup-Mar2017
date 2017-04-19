var WeatherAdmin = require("./WeatherAdmin");

var loginType = process.argv[2];
var userName = process.argv[3];
var userLocation = process.argv[4];

var myAdmin = new WeatherAdmin();

if (loginType === "admin"){
	myAdmin.getData();
}

else {
	myAdmin.newUserSearch(userName, userLocation);
}