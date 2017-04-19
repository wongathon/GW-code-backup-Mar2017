
var bands = require("./bands.js");
console.log(bands);

var keyz = Object.keys(bands.bands);
console.log(keyz);
//all stuff
console.log(keyz[1]);


for (var i=0; i<keyz.length; i++){
	console.log("A "+keyz[i]+" band is "+ bands.bands[keyz[i]]);
}
