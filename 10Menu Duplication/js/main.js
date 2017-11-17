/*jslint browser:true */
"use strict";

var temp = document.querySelectorAll('ul#primaryNavigation li a');

var i;
for (i = 0; i < temp.length; i++) {
	var hRef = temp[i].getAttribute('href');
	var hText = temp[i].text;

	var diaper = document.createElement('A');
	diaper.setAttribute('href',hRef);
	diaper.innerHTML = hText;
	var baby = document.createElement('UL');

	baby.appendChild(diaper);

	document.getElementById('smallNavArea').appendChild(baby);




}





console.log(temp);
console.log(hRef);
console.log(hText);

