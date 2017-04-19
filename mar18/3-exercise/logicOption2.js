// Initialize Firebase (YOUR OWN APP)
var config = {
	apiKey: "AIzaSyAKtV5GOunbUS-1Fc9ZZszk7OLYon1X59I",
	authDomain: "babys-first-project-bc123.firebaseapp.com",
	databaseURL: "https://babys-first-project-bc123.firebaseio.com",
	storageBucket: "babys-first-project-bc123.appspot.com",
	messagingSenderId: "265459033728"
};

firebase.initializeApp(config);

// Set Initial Counter
var initialValue = 66;

var clickCounter = initialValue;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
var database = firebase.database();
database.ref().on("value", function(snapshot){
	console.log(snapshot.val());
	$("#click-value").html(snapshot.val().clickCount);
	clickCounter = snapshot.val().clickCount;
	console.log(clickCounter);
}, function(errorObject){
	console.log("The read failed: " + errorObject.code)
});

// Print the initial data to the console.
// Change the html to reflect the initial value.
// Change the clickCounter to match the data in the database
// Log the value of the clickCounter
// Change the HTML Value
// If any errors are experienced, log them to console.

// --------------------------------------------------------------

// Whenever a user clicks the click button
$("#click-button").on("click", function() {

  // Reduce the clickCounter by 1
  clickCounter--;

  // Alert User and reset the counter
  if (clickCounter == 0){
  	alert("counter finished, restarting");
  	clickCounter = initialValue;
  }

  // Save new value to Firebase
  database.ref().set({
  	clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

});

// Whenever a user clicks the restart button
$("#restart-button").on("click", function() {

  // Set the clickCounter back to initialValue
  clickCounter = initialValue;

  // Save new value to Firebase
  database.ref().set({
  	clickCount: clickCounter
  });

  // Log the value of clickCounter
  console.log(clickCounter);

  // Change the HTML Values
  $("#click-value").html(clickCounter);

});
