var cityList = [

]
	
console.log("yo");

for (var i = 0; i<addy.length; i++){
	var cityName;
	var cityTime = 0;
	if (addy[i] === addy[i+1]){
		cityName = addy[i+1];
		cityTime += timey[i];
	} else {
		cityName = addy[i];
		cityTime = timey[i];
	};

	cityList.push({
		city: cityName,
		time: cityTime
	});

};