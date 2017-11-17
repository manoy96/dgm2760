// JavaScript Document
/*jslint browser:true */
"use strict";

var loc = location.href;

var pageArray = loc.split('/');
console.log(pageArray);


var numParts = pageArray.length;
console.log(numParts);


var pieceIneed = pageArray[numParts - 1];
console.log('>>>>>>>>>'+ pieceIneed);

var test = document.querySelectorAll("ul#mainmenu li");
console.log(test);





var i;
for (i=0; i<test.length; i++) {
	var myPage = test[i].firstChild.getAttribute("href");

	if (pieceIneed === myPage) {

		test[i].className = "active";	
			console.log(test[i].className);

			if (test[i].parentNode.parentNode.className === "" && (pieceIneed === "hammer.php" || pieceIneed === "drill.php")) {

				test[i].parentNode.parentNode.className = "parent";
				alert(test[i].parentNode);
			}//end if

	}//end if
	else {
		test[i].className = "";

	}//end else

	console.log(myPage);
} //end of loop