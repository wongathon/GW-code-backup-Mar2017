var a = process.argv[2];
var b = process.argv[3];

var output;

if (a === b){
	output = true;
} else {
	output = false;
}

console.log(output);

if (a % 7 === 0 && b % 7 === 0){
	output = true;
} else {
	output = false;
}

console.log(output);

//also
console.log(a % 7 === 0 && b % 7 === 0);