// JavaScript Document
/*jslint browser:true */
"use strict";


var header = document.getElementById("header");

//JS adding HEADER
var joe = "Joe's Bed & Breakfast";
var h_one = document.createElement("h1");
h_one.innerHTML = joe;
header.appendChild(h_one);

var slogan = "where dreams come to life";
var h_two = document.createElement("h2");
h_two.innerHTML = slogan;
header.appendChild(h_two);

// var slogan = "where dreams come to life";
// document.getElementById("slogan").innerHTML = slogan;
// var h_two = document.createElement("h2");


// JS insert current date
var myDateString = new Date();
document.getElementById("date").innerHTML = "today is "+ myDateString.toDateString();


//JS prompt user's name
var username = prompt("What is your name");

var mycup = "hello "+username+" welcome to a lovely place to call home";
document.getElementById("message").innerHTML = mycup;
