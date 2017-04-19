
var oper = process.argv[2];
var a = parseInt(process.argv[3]);
var b = parseInt(process.argv[4]);



if (oper == "add"){
	console.log(a+b)
} else if (oper == "subtract"){
	console.log(a-b)
} else if (oper == "multiply"){
	console.log(a*b)
} else if (oper == "divide"){
	console.log(a/b)
} else if (oper == "remainder") {
	console.log(a%b)
} else if (oper == "exp") {
	console.log(Math.pow(a, b));
} else if (oper == "algebra") {
	console.log(parseAlgebra(a));
}



