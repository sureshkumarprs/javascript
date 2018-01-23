// Add Class
var fruitDiv = document.querySelector(".fruitDiv");
fruitDiv.classList.add("addDiv"); // Add Class

fruitDiv.classList.remove("addDiv");// remove class

var apple =  document.querySelector("#apple");
apple.classList.add("conditionClass");
if(apple.classList.contains("conditionClass")){
    console.log("Class is present");
}
else{
    console.log("Class is not present");
}
// Adding attribute to anchor tag 
var link = document.querySelector("a");
link.href = "http://www.google.com";
link.target = "_blank";

// Adding value to input
var inputvalue = document.querySelector("#username");
inputvalue.value = "Suresh";

// var span = document.querySelector(".onam");
// span.holiday = "onam";
// console.log(span.holiday);

var animal =  document.querySelector("img");
console.log(animal.getAttribute("src"));//getAtribute
animal.setAttribute("alt", "image");//setAttribute
animal.setAttribute("title", "New image");
animal.removeAttribute("alt");//removeAttribute

var style = document.querySelector(".styleDiv");
style.style.backgroundColor = "blue";
style.style.color = "red";
style.style.border = "5px solid #000";
style.style.padding = "5px"

