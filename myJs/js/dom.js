// DOM

// Getting Elements

var apple = document.querySelector("#testId");
var orange = document.querySelector(".testClass");
var span = document.querySelector("span");

console.log(apple);
console.log(orange);
console.log(span);


var fruits = document.querySelectorAll(".fruit");
console.log(fruits);

// creating Element

var span = document.createElement('span');
span.setAttribute("class", "date");
span.textContent = new Date().toDateString();
document.body.appendChild(span);

var parent = document.querySelector(".parent");
var kid = document.querySelector(".kid");
parent.removeChild(kid);

// var teen = document.querySelector();
// teen.parentNode.removeChild(teem);

var addtext = document.querySelector(".addText");
addtext.textContent = "text Content goes here";

