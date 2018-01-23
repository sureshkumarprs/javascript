// Event listening

var button = document.querySelector(".button");
var clickCallBack = function(event){
    console.log("You have clicked on button");
    console.log(event);
}

button.addEventListener("click", clickCallBack);

// Inline Event listening

var showMoreButton = document.querySelector("#showMore");
var loremtext = document.querySelector(".text");
var clickfunction = function(event){
    loremtext.classList.add("display");
}
showMoreButton.addEventListener("click", clickfunction);


var inputText = document.querySelector("#inputText");
var inputValue = document.querySelector("#inputValue");
var clickBtn = document.querySelector("#clickBtn");
var inputValueFunction = function(event){
    inputValue.textContent = inputText.value;
}
clickBtn.addEventListener("click", inputValueFunction);