// Json

    // {
    //     "name" = "Josh",
    //     "weight" = 175,
    //     "age" = 40,
    //     "eyecolor" = "red",
    //     "cars" = ["Chevy", "Toyota", "Honda"],
    //     "favouriteBook": {
    //         "title" = "when the fire nation attacked", 
    //         "author" = "Nickloden",
    //         "released" = "02-21-2005"
    //     } 

    // }

// Stringyfy

var dog = {
    "name" : "Sophie", 
    "age" : 3,
    "weight" : 20
}
var dogJson = JSON.stringify(dog);
console.log(dogJson);

var parsejson = '{"Name": "Suresh", "age":3, "weight": 20}';
var dogParse = JSON.parse(parsejson);
console.log(dogParse);

