// JavaScript Document
/*jslint browser:true */
"use strict";

var myObject = {

	option1: "Grant",
	option2: "Jerry",
	option3: "Stevon",
	option4: "Peter",

	correct:1,

	check: function(x) {
		if(x==myObject.correct){
			document.getElementById("feedback").innerHTML = "You got it!";
		}// end if
		else {
			document.getElementById("feedback").innerHTML = "Wrong!";
		}
	}
};

