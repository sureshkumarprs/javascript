// For loop
for ( var i = 1; i <=5; i++){
    console.log(i);
}
// while loop
var i = 1;
while (i <=5){
    console.log(i);
    i++;
}

// do while

var choclates = 100;
do {
    console.log("With " + choclates + " choclates left, I can eat.");
    choclates -= 20;
}while( choclates > 0 ){
    console.log("All Choclates are over");
}

// for in loop

var colors = ["red", "green", "Blue"];
for ( var i in colors ){
    console.log(colors[i]);
}

var person = {
    name: "tom",
    age: "15",
    weight: "80"
}

for ( var property in person){
    console.log("This person " + property + " is " + person[property] + ".");
}

// Break

for ( var i = 1; i <= 10; i++){
    console.log(i);
    if( i == 5 ){
        break;
        
    }
}

// Continue
for ( var i = 1; i <= 10; i++){
    console.log(i);
    if( i == 5 ){
        continue;
        
    }
}