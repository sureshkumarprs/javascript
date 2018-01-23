//Equality Operator
console.log(5 === 6);
var peers = 40/2;
console.log(20 === peers);


//Inequality Operator

console.log( 9 !== 10 );

var a = 10 * 3;
console.log( a !== 30);

console.log(57 !== 57 );


//Greater Than and Less Than Operators
console.log( 4 > 1);
console.log( 5 > 10);

var books = 30;
console.log( books > 5);
console.log( 50 > books);


console.log(5 >= 0);
console.log(5 <= 100);
var textValue = 300;

console.log( textValue >= 50);

//IF, else if, else
var candy = 67;
if ( candy >= 100){
    console.log("if");
}else if(candy >= 70){
    console.log("if else");
}
else if(candy === 67){
    console.log("if else 2");
}
else{
    console.log("else");
}

// Ternary Operator

var number =26;
var isEven = ( number % 2 === 0) ? "yes" : "No";
console.log( " is " + number + " an Even Number? " + isEven);

// &&

var shoe = false;
var sox = true;
if(shoe && sox == true){
    console.log(" Success in true ");
}
else{
    console.log(" Conditions are  not true ");
}

// ||

var shoe = false;
var sox = false;
if(shoe || sox == true){
    console.log(" Success in true with or");
}
else{
    console.log(" Conditions are not true with or");
}

// !not

var temperature = "50";
var itisHot = temperature > 50;

if(!itisHot){
    console.log(" Not Condition ");
}