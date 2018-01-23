// Object
// Creation of object
var dog = {
    name : "Cooper", 
    age: 3,
    bark: function (){
        console.log("Bork Bork")
    }
}
// Retrieval of object
console.log(dog.bark());

// Reassign value to objects
dog.age = 15;
console.log(dog.age);

//Methods
//HasOwnProperty

var car = {
    wheel: 4,
    color: "red",
    bark: function(){
        console.log("Start");
    }
};
console.log(car.hasOwnProperty("wheel"));
console.log(car.hasOwnProperty("weight"));

//Keys
console.log(Object.keys(car));
//values
console.log(Object.values(car));
// Entries

var entries = Object.entries(car);
console.log(entries);
