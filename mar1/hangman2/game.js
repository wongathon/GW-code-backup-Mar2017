
$(document).ready(function(){


var itemsList = ["crapola", "kitty", "mofobee", "doge", "hundreds", "quality"];

var theWord = "kitty";
var input;
var wordBlanks = []; //arrays must be made like this

var guessesLeft = 9;

var wrongLetters = [];

var winCount = 0;
var lossCount = 0;

function getWord(){
	var random = Math.floor(Math.random() * itemsList.length);
	theWord = itemsList[random];
}

function gameStart(){


	//set new word
	getWord();
	console.log(theWord);

	wrongLetters = [];
	$("#guessed-letters").html(wrongLetters);
	guessesLeft = 9;
	$("h1").html("Hangman!");

	$("#word-blanks").empty();
	$("#win-count").html(winCount);
	$("#lose-count").html(lossCount);

	$("#guesses-left").html(guessesLeft);

	for (var i = 0; i<theWord.length; i++){
		wordBlanks[i] = "_ "
		$("#word-blanks").html(wordBlanks);
	}


}

gameStart();


$(document).keypress(event, function(){
	console.log(event.key);
	input = event.key;

	for (var i = 0; i<theWord.length; i++){
		if (theWord[i] == input) {
			console.log("Yes good");
			wordBlanks[i] = input;
			$("#word-blanks").html(wordBlanks);
		} else if (wrongLetters.indexOf(input) == -1 && theWord.indexOf(input) == -1) {
			console.log("no bad");
			wrongLetters.push(input);
			$("#guessed-letters").html(wrongLetters);
			guessesLeft--;
		} else {
			console.log("already a guess!");
		}
	}

	$("#guesses-left").html(guessesLeft);
	conditions();
});

function conditions(){

	if(guessesLeft == 0){
		$("h1").html("YOU LOSE!");
		lossCount++;
		setTimeout(function(){
			gameStart();
		}, 1000)
	} else if (theWord == wordBlanks.join("")){
		$("h1").html("YOU WIN!!");
		winCount++;
		setTimeout(function(){
			gameStart();
		}, 1000)
	}
	//if letters = word you win, win++
	//else if turns=0 you lose, lose++

	//game over signal - animation?
	//reset 
}



});