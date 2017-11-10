// JavaScript Document
/*jslint browser:true */
"use strict";

		function lowerCase(myNounList){
		for (var i = 0; i < myNounList.length; i++) {
			myNounList[i] = myNounList[i].toLowerCase();

		}	
	}
function story() {

	var myNounArray = document.getElementById("nounArea").value;
	var myNounList =  myNounArray.split(/\s+/);
		lowerCase(myNounList);

	var myAdjArray = document.getElementById("adjArea").value;
	var myAdjList =  myAdjArray.split(/\s+/);
		lowerCase(myAdjList);

	var myVerbArray = document.getElementById("verbArea").value;
	var myVerbList =  myVerbArray.split(/\s+/);
		lowerCase(myAdjList);

	var myStory = "There once lived a " + myNounList[0] +". One day he was very " + myAdjList[0] + ". He had not been able to get any " + myVerbList[1] + " the previous day. 'If I do not get anything to eat I will " + myVerbList[0] + " to death,' he thought. <br><br> As the " + myNounList[0] + " was searching for " + myNounList[1] + ", his eyes fell on a piece of " + myNounList[2] + ". He quickly " + myVerbList[1] + ", picked it up and flew off. Far away in a lonely place " + myNounList[0] + " sat on a tree to enjoy the bread. Just then a hungry " + myNounList[1] + " saw the " + myNounList[0] + " sitting on the tree holding the " + myNounList[2] + " in his mouth. 'Yummy! That bread looks " + myAdjList[2] + ". What I would give to get that piece of " + myNounList[0] + ",' the " + myNounList[1] +" thought.";

document.getElementById("feedback").innerHTML = myStory;
console.log(myNounArray);
}


