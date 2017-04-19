
var strFunc = function(str, func){
	console.log(str);
	func();
}

var boolFunc = function(bool, func){
	if (bool === true){
		console.log("bool is true")
		func();
	} else {
		console.log("no");
	}
}

var funcVal = function(func, val){
	func(val);
}

var hello = function(){
	console.log("Hi there!");
}

var timesTwo = function(val){
	console.log(val * 2);
}

strFunc("Yo yo", hello);

boolFunc(true, hello);
boolFunc(false, hello);

funcVal(timesTwo, 5);

//write to a file
fs = require('fs');

fs.writeFile('message.txt', "Hello cool message", function(err){
	if(err) throw err;
	console.log('File saved.');
})
