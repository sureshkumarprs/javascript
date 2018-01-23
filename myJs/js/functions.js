// Function
function introduction(){
    console.log("Inroduction functions");
}

// Invoking
introduction();

// Parameters Or Arguements
function greetingsFunction( name, greetMsg){
    console.log( name + " Whishing you happy " + greetMsg);
}
greetingsFunction("Suresh", "Onam");

// Return

function getAreaOfCircle( getRadius ){
    return Math.PI * getRadius * getRadius;

}
var getRadius = 3;
var area = getAreaOfCircle( getRadius );
console.log("The circle  with a radius of " + getRadius + " has an area of" + area + ".");


var area = getAreaOfCircle( 10 );
console.log("The circle  with a radius of " + getRadius + " has an area of" + area + ".");
