// JavaScript Document
/*jslint browser:true */
"use strict";

var randomNumber = Math.floor(Math.random()*15)+1;
console.log(randomNumber);

var collect = 0;


function guessFunction() {
	console.log("hello")

var userInput= document.getElementById("userInput").value;
collect++;
console.log(collect);


	if (userInput > 15){
		alert("Out of Range. Pick a number witha a Value 1-15.")
	}
	else if (userInput < 1){
		alert("Out of Range. Pick a number witha a Value 1-15.")
	}
	else if (userInput > randomNumber){
		alert("too high");
	}
	else if (userInput < randomNumber){
		alert("too low");
	}
	else {
		alert("hurray you are correct");
	
		var output = document.createElement("p"); 
		output.innerHTML = "Number of tries "+ collect;
		document.getElementById("face").appendChild(output);
	}
}

function getAward() {

switch(collect) {
	case 1:
	case 2:
	case 3:
	var pathToImage = "images/blue.png";
	var awardImage = document.createElement("IMG");
	awardImage.setAttribute('src', pathToImage);
	console.log(awardImage);
	break;
	case 4:
	case 5:
	case 6:
	var pathToImage = "images/red.png";
	var awardImage = document.createElement("IMG");
	awardImage.setAttribute('src', pathToImage);
	console.log(awardImage);
	break;
	default:
	var pathToImage = "images/green.png";
	var awardImage = document.createElement("IMG");
	awardImage.setAttribute('src', pathToImage);
	console.log(awardImage);
	break;
} 

}







// var pathToImage = "images/blue.png";
// var awardImage = document.createElement("IMG");
// awardImage.setAttribute('src', pathToImage);
// console.log(awardImage);

// document.getElementById("face").appendChild(awardImage);
