// Classess

// Defining Class
class Pet{

}
var pet = new Pet();
console.log(pet);

// Constructing class
class petclass{
    constructor( name, weight, price){
        this.name = name;
        this.weight = weight;
        this.price = price;
    }
    getinfo(){
        return "Hi, My Name is " + this.name + " and my weight is " + this.weight + " and my price is " + this.price + ".";
    }
}

var petValue1 = new petclass("Suresh", 70, 100);
console.log(petValue1);
console.log(petValue1.getinfo());

var petValue2 = new petclass("Sunil", 50, 200);
console.log(petValue2.getinfo());

var petValue3 = new petclass("Kumar", 80, 500);
console.log(petValue3.getinfo());

// Class  inheritance
class dog extends petclass{
    bark(){
        console.log(" Bark Bark Bark!!!!!");
    }
}

var newDog = new dog("Suriya", 300, 800);
console.log(newDog);
console.log(newDog.getinfo());

// Function Overriding and Super Keyword

class Cat extends petclass{
    constructor( name, weight, price, brand ){
        super( name, weight, price );
        this.brand = brand;
    }
    getFavouriteBrand(){
        return this.brand;
    }
    getInfo(){
        return "Hi, i am cat named " + this.name + "and I like " + this.brand + ". I weigh " + this.weight + " pounds and cost $ " + this.price + ".";
    }
}
var honey = new Cat ("Honey", 15, 300, "Punrina");
console.log(honey.getInfo());
console.log(honey.getFavouriteBrand());