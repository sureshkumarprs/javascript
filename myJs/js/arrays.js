// Creation
var drinks = ["Water", "Juice", "Milk", "Soda"];

//Retrieval
console.log(drinks[1]);

for ( var i = 0; i < drinks.length; i++ ){
    console.log(drinks[i]);
}

// Reassignment
drinks[2] = "Coffee";
console.log(drinks);

//Methods

//sort() = Sort alphabeticaly and numericaly
var sortedDrinks = drinks.sort();
console.log(sortedDrinks);

//push() = Add an item end of the array
drinks.push("Tea");
console.log(drinks);

//Pop() = pop will remove the item from an array
drinks.pop("Water");
console.log(drinks);


// Shift() The shift method removes the first element of an array and then returns that element to you.
var bakes = ["Buiscuit", "Samoosa", "mixture", "Sweets"];
var snack = bakes.shift();
console.log(bakes);
console.log(snack);

// unshift() Add itemsin the front

bakes.unshift("Chips");
console.log(bakes, bakes.length);


//concat() 
var healthyDrinks = ["water", "milk"];
var unHealthyDrinks = ["Soda", "Cola", "SoftDrinks"];

var mergeditems = healthyDrinks.concat(unHealthyDrinks);
console.log(mergeditems);

// Slice() Using slice, you can return a brand new array containing elements from a slice of the original array.
var healthDrinks = ["water", "milk", "Soda", "Cola", "SoftDrinks"];
var slicedArray = healthDrinks.slice(1, 4);
console.log(slicedArray);
//slice with index
var sliceIndex = healthDrinks.splice(4);
console.log(sliceIndex);
// Slice with Minus index
var sliceMinusIndex = healthDrinks.splice(-3);
console.log(sliceMinusIndex);


// Splice() Remove the item from array but will not return to new array
var employee = ["Dierector", "Manager", "senior", "Junior", "executive", "Trainee"];

employee.splice(2, 1);
console.log(employee);

//map() The map function creates a new array from an existing one after calling a function on every element

var employeeName = ["Suresh", "James", "Suriya", "Jyothi", "Sushma"];
var intro = employeeName.map( function(name){
    return "My name is " + name;
});
console.log(intro);
for (var i = 0; i < intro.length; i++ ){
    console.log(intro[i]);
}

// Filter() The filter method is useful for, well, filtering out elements you don't want from an array to form a new one.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var oddnummber = numbers.filter(function(number){
    return number % 2 == 1;
});
console.log(oddnummber);

//reduce()

var numberList = [1, 2, 3, 4, 5, 6, 7, 8];
var totalvalue = numberList.reduce(function(numberxyz, totalxyz){
    return numberxyz + totalxyz;
});
console.log(totalvalue);


