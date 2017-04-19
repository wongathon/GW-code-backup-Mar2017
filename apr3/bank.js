var trans = process.argv[2];
var amt = process.argv[3];

var fs = require("fs");

if (trans === "total"){
	fs.readFile("bank.txt", "utf8", function(err, data){
		var dataArr = data.split(",");
		var total = 0;
		for(var i=0; i<dataArr.length; i++){
			total += parseFloat(dataArr[i]);
		}
		console.log((total).toFixed(2));
	});
} else if (trans === "deposit"){
	fs.appendFile("bank.txt", ", "+amt, function(err){
		if (err){
			console.log(err);
		}
	});
} else if (trans === "withdraw"){
	fs.appendFile("bank.txt", ", "+ (-1*amt), function(err){
		if (err){
			console.log(err);
		}
	});
} else if (trans === "lotto"){
	fs.appendFile("bank.txt", ", "+(-5), function(err){
		if (err){
			console.log(err);
		}
	});
	var r = Math.floor(Math.random() * (100));
	console.log(r);
	if (r === 88){
		fs.appendFile("bank.txt", ", "+1000, function(err){
			console.log("You win 1000 dollars!!!");
			if (err){
				console.log(err);
			}
		});
	} else {
		console.log("You lose!");
	}
} else {
	console.log("not a transaction!");
}



