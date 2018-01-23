function createCookiies(key, value){
    var  cookie = escape(key) + "=" + escape(value) + ";";
    document.cookie = cookie;
    console.log(cookie);
    console.log("Creating new cookies with key: "  + key + "value: " + value);
}
createCookiies("Suresh", "33", Date.UTC(2018, 8, 1) );
createCookiies("Sunil", "31", Date.UTC(2018, 8, 1) );

function readCookies(name){
    var key = name + "=";
    var cookie = document.cookie.split(";");
    for(var i= 0; i < cookie.length; i++){
        var c = cookie[i];
        while (c.charAt(0) === ' '){
            c = c.substring(1, c.length);
        }
        if(c.indexOf(key) === 0){
            return c.substring(key.length, c.length);
        } 
    }
    return null; 
}

createCookiies("sport", "basketball", Date.UTC(2017, 8, 1));
createCookiies("icecream", "vanilla", Date.UTC(2017, 8, 1));

console.log(readCookies("icecream"));

function deleteCookie(name) {
    createCookie(name, "", -1);
}



var game = { 
    "name": "Rocket League",
    "release": 2015,
    "developer": "html"
}

var gameJson = JSON.stringify(game);
localStorage.setItem("game", gameJson);
localStorage.setItem("resturent", "Chipotle");
var resturent = localStorage.getItem("resturent");
console.log(resturent);