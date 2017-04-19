var WeatherAdmin = require('./WeatherAdmin.js');

var loginType = process.argv[2];
var userName = process.argv[3];
var userLocation = process.argv[4];

var MyAdmin = new WeatherAdmin();//importing a constructor function
//getData and newUserSearch are methods

if (loginType == "admin"){
	MyAdmin.getData();

} else if (loginType == "user"){
	MyAdmin.newUserSearch(userName, userLocation);

}
