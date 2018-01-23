var base = "https://jsonplaceholder.typicode.com";
var textDiv = document.querySelector("#text");
var htmlText = "";
var json = [];
fetch(base + "/posts").then(function(response){
    response.json().then(function(json){
        console.log(json);
        textDiv.textContent = json.title;
    });
    for( var key in json ){
        htmlText += '<div class="div-container"></div>';
        htmlText += '<p>Name: '+ json[key].title +'</p>';
        console.log(key);
    };
});


