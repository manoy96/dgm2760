// JavaScript Document
/*jslint browser:true */
"use strict";

//function to display window size
function myWindowSize() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	var display = "this window is "+ width +" wide, and "+height+ " high.<br>";

	document.getElementById("message").innerHTML = display
}

myWindowSize();//<-----this is used to call the funcion and display it

//WINDOW DISPLAY OFFSETT
   	document.getElementById("offset").innerHTML = "my window is offsett by "+ window.screenLeft +" on the left,<br> and "+window.screenTop+" on the top";

//Display URL

	document.getElementById("url").innerHTML = "This site can be found at "+ location.href;
   	   
//Display last Modified timestamp
	document.getElementById("mod").innerHTML = " This site was last modified "+ document.lastModified;
