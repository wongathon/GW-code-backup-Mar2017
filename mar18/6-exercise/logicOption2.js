// Initialize Firebase
var config = {
	apiKey: "AIzaSyAKtV5GOunbUS-1Fc9ZZszk7OLYon1X59I",
	authDomain: "babys-first-project-bc123.firebaseapp.com",
	databaseURL: "https://babys-first-project-bc123.firebaseio.com",
	storageBucket: "babys-first-project-bc123.appspot.com",
	messagingSenderId: "265459033728"
};

firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
var initialBid = 0;
var initialBidder = "No one :-(";
var highPrice = initialBid;
var highBidder = initialBidder;

// --------------------------------------------------------------

// At the initial load, get a snapshot of the current data.
database.ref().on("value", function(snapshot){
// If Firebase has a highPrice and highBidder stored (first case)
if(snapshot.val().bidder && snapshot.val().bid){
	// Set the initial variables for highBidder equal to the stored values.
	highBidder = snapshot.val().bidder;
	highPrice = parseInt(snapshot.val().bid);
	// Change the HTML to reflect the initial value
	$("#highest-bidder").html(highBidder);
	$("#highest-price").html(highPrice);
	// Print the initial data to the console.
	console.log(highBidder +" "+ highPrice);
// Else keep the initial variables for highBidder equal to the initial values
} else {
	highBidder = initialBidder;
	highPrice = initialBid;
}
// If any errors are experienced, log them to console.
}, function(errorObject){
    console.log("Readfailed: " + errorObject.code)
});
// --------------------------------------------------------------

// Whenever a user clicks the submit-bid button
$("#submit-bid").on("click", function(event){
	event.preventDefault();
// prevent form from submitting with event.preventDefault() or returning false

// Get the input values
	var bidder = $("#bidder-name").val().trim();
	var bid = $("#bidder-price").val().trim();
// Log the Bidder and Price (Even if not the highest)
	console.log(bidder + " bids: " + bid);
// If Then statements to compare against previous high bidder
if (bid > highPrice){
	// Alert that they are High Bidder
	alert("You are the highest bidder!")
	// Save the new price in Firebase
	database.ref().set({
		bid : bid,
		bidder: bidder
	});
	// Log the new High Price
	console.log("High price: "+bid);
	// Store the new high price and bidder name as a local variable (could have also used the firebase variable)
	// Change the HTML to reflect the new high price and bidder
	$("#highest-bidder").html(bidder);
	$("#highest-price").html(bid);
} else {
	alert("Your bid is too low!");
}


// Else tell user their bid was too low via alert

});