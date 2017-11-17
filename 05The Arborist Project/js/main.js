// JavaScript Document
/*jslint browser:true */
"use strict";

// create an array with 3 character names
var treeArray = ["Oak", "Birch", "Fir"];


// display the list of names in a page div
function displayArray() {
	console.log("first");

	var myString = "";
	var i;
	for (i = 0; i < treeArray.length; i++) {
console.log("second");
		myString += treeArray[i] + "<br>";
	}
	myString += "<br>My array is " + treeArray.length + " elements long";
		document.getElementById("Display").innerHTML = myString;
}// end of dispArray function

displayArray();

function addBegin() {
	treeArray.unshift("Lemon");
	displayArray();
}

function addEnd() {
	treeArray.push("Redwood");
	displayArray();
}


function remItem() {

		if(treeArray.length === 0) {
		document.getElementById("error").innerHTML = "No elements defined";
	}
		else {

	treeArray.shift();
	displayArray();
}
}

function delTwo() {

		if(treeArray.length === 1) {
		document.getElementById("error").innerHTML = "No elements defined";
	}
		else {
	treeArray.splice(1, 1);
	displayArray();
}
}

function delLast() {

		if(treeArray.length === 0) {
		document.getElementById("error").innerHTML = "No elements defined";
	}
		else {
	treeArray.pop();
	displayArray();
}
}

function sort() {
	treeArray.sort();
	displayArray();
}

function changeCase() {
 	
 	for (var i = 0; i < treeArray.length; i++) {
 		treeArray[i] = treeArray[i].toLowerCase();
 	}
 	displayArray();
}

function dispThree() {

	if(treeArray.length < 3) {
		document.getElementById("error").innerHTML = "No element defined";

	}
	else {
	var treeThree = treeArray[2];
	document.getElementById("error").innerHTML = treeThree;
}
}



function dispFour() {

		if(treeArray.length < 4) {
		document.getElementById("error").innerHTML = "No element defined";

	}
	else {
	var treeFour = treeArray[3];
	document.getElementById("error").innerHTML = treeFour;s
}
}








// var x = document.getElementById("addEnd");
// x.onclick = dispArray;






































// ------------------------------------------------







// function generateRandom(top) {

// 	var x = Math.random();
// 	var y = Math.random();
// 	x = x * 10;
// 	x = (Math.floor(x)) + 3;
// 	y = y * 10;
// 	y = (Math.floor(y)) + 21;

// monthRand(x, y);

// }


// function Display() {


// }


// function monthRand(x, y) {

// 	var msg;
// 	switch(x){

// 		case 1:
// 		msg = "Jan " + y;
// 		break;

// 		case 2:
// 		msg = "Feb " + y;
// 		break;

// 		case 3:
// 		msg = "Mar " + y;
// 		break;

// 		case 4:
// 		msg = "Apr " + y;
// 		break;

// 		case 5:
// 		msg = "May " + y;
// 		break;

// 		case 6:
// 		msg = "Jun " + y;
// 		break;

// 		case 7:
// 		msg = "Jul " + y;
// 		break;

// 		case 8:
// 		msg = "Aug " + y;
// 		break;

// 		case 9:
// 		msg = "Sep " + y;
// 		break;

// 		case 10:
// 		msg = "Oct " + y;
// 		break;

// 		case 11:
// 		msg = "Nov " + y;
// 		break;

// 		case 12:
// 		msg = "Dec " + y;
// 		break;

// 		default:
// 		msg = "your number is out of range";


// }// end of switch
// 	// return msg;

// Display(msg);
// }// end of function


// // var monthType = generateRandom(12);
// // var dayType = generateRandom(30);

// var homeKind = getHome(monthType);



// var feedbackMessage = "You will die on " + homeKind + " "+ dayType; 
// document.getElementById("feedback").innerHTML = feedbackMessage;


// function randFortune() {

// var fort;

// switch(fort)
// {

// case 1:
// fort = "You will find love on ";

// case 2:
// fort = "You will die on ";

// case 3:
// fort = "You will find a large amount of case on ";

// case 4:
// fort = "You will be critially injured on ";
 
// case 5: 
// fort = "You will meet a celebrity on ";

// default:
// fort = "Message intercepted by flying monkeys"




// }// end of switch
// 	return fort;

// }// end of function


// // var x = Math.floor((Math.random() * 10) + 3);







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
// 		alert("hurray you are correct");
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
