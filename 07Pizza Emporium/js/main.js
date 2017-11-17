// JavaScript Document
/*jslint browser:true */
"use strict";

var pizza = {
	crustType: "thin crust",
	toppingType: "pepperoni",
	sizeType: "medium",

	flourAmt: "1 cup of flour",


	makePizza: function() {
		var pizzaText = "We pull out of the oven a "+pizza.sizeType+" "+pizza.toppingType+" pizza with "+pizza.crustType+". Please enjoy.";
		document.getElementById("feedback").innerHTML = pizzaText;

	}, //end of the method
	shopList: function() {
		if (pizza.crustType == "thick crust") {
		pizza.flourAmt = " 2 cups of flour";
		}

		var shopText = "To bake this pizza we will need "+pizza.flourAmt+" and 1 pound of "+pizza.toppingType+".";
		document.getElementById("feedback").innerHTML = shopText;

	}//end of method
}; // end of object




