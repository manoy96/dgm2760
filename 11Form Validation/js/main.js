/*jslint browser:true */
"use strict";

function test() {
	var x;
	var i;
	var status = true;

var requiredSections = ['fullName', 'phoneNumber', 'payMethod', 'ccNumber','vehicle'];

for (var i = 0; i < requiredSections.length; i++) {
 	document.getElementById(requiredSections[i]).className = "normal";		
}

x = document.forms.myForm.vehicle.selectedIndex;
if (x=== 0) {
		status = false;
		document.getElementById('vehicle').className = "error";

} 


x = document.getElementsByName('payMethod');
var foundCheckedButton = false;
	for (var i = 0; i < x.length; i++) {
		if (x[i].checked){
			foundCheckedButton = true;
			break;
		}//end if
	}//end for loop

	if(foundCheckedButton === false){
		status = false;
		document.getElementById('payMethod').className = "error";
	}

//checking full name
	x = document.forms.myForm.fullName.value;
	console.log(x);
	x = x.replace(/-/g, '');
	console.log('>>>>>>>>>>>'+x);

	if(x=== ""|| x=== null) {
		status = false;
		document.getElementById('fullName').className = "error";
		console.log(x);
		}


//checking phonenumber value
	x = document.forms.myForm.phoneNumber.value;
	console.log(x);
	x = x.replace(/-/g, '');
	console.log('>>>>>>>>>>>'+x);

	if(x.length  < 10|| x.length >15) {
		status = false;
		document.getElementById('phoneNumber').className = "error";
		console.log(x);
		}

	

//checking credit card number value
	x = document.forms.myForm.ccNumber.value;
	console.log(x);
	x = x.replace(/ /g, '');
	console.log('>>>>>>>>>>>'+x);

	if(x.length != 15 ) {
		status = false;
		document.getElementById('ccNumber').className = "error";
	}


if(status === false) {
	document.getElementById('formProblems').className = "showErrorMsg"
}

	return status;
}
