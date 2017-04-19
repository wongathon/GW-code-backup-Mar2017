var args = process.argv;

var sorter = [];

for (var i = 2; i<args.length; i++){
	sorter.push(parseInt(args[i]));
}

sorter = sorter.sort(function (a, b) {
  return a - b;  
});

console.log(sorter);