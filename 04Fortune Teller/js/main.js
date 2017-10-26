// JavaScript Document
/*jslint browser:true */
"use strict";

function generateRandom(top) {

	var x = Math.floor(Math.random()*(top-1))+1;
	return x;

}


function Display(msg) {
var userOutput = randFortune();
userOutput += " " + msg;
document.getElementById("feedback").innerHTML = userOutput;

}


function monthRand() {
	var numDays = generateRandom(31);
	var numMonth = generateRandom(12);
 

	var msg;
	switch(numMonth) {

		case 1:
		msg = "Jan " + numDays;
		break;

		case 2:
		msg = "Feb " + numDays;
		break;

		case 3:
		msg = "Mar " + numDays;
		break;

		case 4:
		msg = "Apr " + numDays;
		break;

		case 5:
		msg = "May " + numDays;
		break;

		case 6:
		msg = "Jun " + numDays;
		break;

		case 7:
		msg = "Jul " + numDays;
		break;

		case 8:
		msg = "Aug " + numDays;
		break;

		case 9:
		msg = "Sep " + numDays;
		break;

		case 10:
		msg = "Oct " + numDays;
		break;

		case 11:
		msg = "Nov " + numDays;
		break;

		case 12:
		msg = "Dec " + numDays;
		break;

		default:
		msg = "your number is out of range";


}// end of switch
	// return msg;
Display(msg);
}// end of function





// var feedbackMessage = "You will die on " + homeKind + " "+ dayType; 
// document.getElementById("feedback").innerHTML = feedbackMessage;


function randFortune() {

var switchCase = generateRandom(6);
var fort;

switch(switchCase)
{

case 1:
fort = "You will find love on ";
break;

case 2:
fort = "You will die on ";
break;

case 3:
fort = "You will find a large amount of case on ";
break;

case 4:
fort = "You will be critially injured on ";
break;
 
case 5: 
fort = "You will meet a celebrity on ";
break;

case 6:
fort = "You be struck by lightning on ";
break;

default:
fort = "Message intercepted by flying monkeys"




}// end of switch
	return fort;

}// end of function


// var x = Math.floor((Math.random() * 10) + 3);







// ------------------------------------------------------------------














// var randomNumber = Math.floor(Math.random()*15)+1;
// console.log(randomNumber);

// var collect = 0;


// function guessFunction() {
// 	console.log("hello")

// var userInput= document.getElementById("userInput").value;
// collect++;
// console.log(collect);


// 	if (userInput > 15){
// 		alert("Out of Range. Pick a number witha a Value 1-15.")
// 	}
// 	else if (userInput < 1){
// 		alert("Out of Range. Pick a number witha a Value 1-15.")
// 	}
// 	else if (userInput > randomNumber){
// 		alert("too high");
// 	}
// 	else if (userInput < randomNumber){
// 		alert("too low");
// 	}
// 	else {
// 		alert("hurraynumDaysou are correct");
// 		getAward();
// 		var output = document.createElement("p"); 
// 		output.innerHTML = "Number of tries "+ collect;
// 		document.getElementById("face").appendChild(output);
// 	}
// }

// function getAward() {

// switch(collect) {
// 	case 1:
// 	case 2:
// 	case 3:
// 	var pathToImage = "images/blue.png";
// 	var awardImage = document.createElement("IMG");
// 	awardImage.setAttribute('src', pathToImage);
// 	document.getElementById("award").appendChild(awardImage);
// 	break;
	
// 	case 4:
// 	case 5:
// 	case 6:
// 	var pathToImage = "images/red.png";
// 	var awardImage = document.createElement("IMG");
// 	awardImage.setAttribute('src', pathToImage);
// 	console.log(awardImage);
// 	document.getElementById("award").appendChild(awardImage);
// 	break;

// 	default:
// 	var pathToImage = "images/green.png";
// 	var awardImage = document.createElement("IMG");
// 	awardImage.setAttribute('src', pathToImage);
// 	console.log(awardImage);
// 	document.getElementById("award").appendChild(awardImage);
// 	break;


// } 

// }







// var pathToImage = "images/blue.png";
// var awardImage = document.createElement("IMG");
// awardImage.setAttribute('src', pathToImage);
// console.log(awardImage);

// document.getElementById("face").appendChild(awardImage);
