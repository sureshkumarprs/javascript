var testnumber = "good Morning";
var myname = "Sureshkumar P R";
var company_name = "Ennvee Techno Group";
var website_name = "ennvee.com";
var test_sentense = "I am Suresh kumar P  R";
var new_test_sentance = test_sentense.replace("Suresh", "sarang");
var bln_test_value = true;
var null_value = null;
var test_varriable

console.log("My variable value is: " + testnumber);
console.log("My name is " + myname +  " and I am working in " + company_name);
console.log("my company website is www." + website_name);

company_name = "Infosys";
website_name = "Infosys.com";

console.log("My name is " + myname +  " and I am working in " + company_name);
console.log("my company website is www." + website_name);

console.log(`
My company is ennvee and
 it is a software  company.
 `
);

console.log(`My Name is ${myname}`);
console.log(myname.toLowerCase());
console.log("My company website is "+ myname.toUpperCase()+".");
console.log(new_test_sentance);

console.log(bln_test_value);

const size_xssmall = Symbol();
const size_small = Symbol();
const size_medium = Symbol();
const size_large = Symbol();
const size_xlarge = Symbol();

function getShirtLeftInSize(size){
    if(size === size_xssmall){
        return 6;
    } else if ( size === size_small){
        return 3;
    } else if ( size === size_medium){
        return 5;
    } else if ( size === size_large){
        return 10;
    } else if ( size === size_xlarge){
        return 15;
    }
}
var mysize = size_small;
console.log(getShirtLeftInSize(mysize) + " Shirts are there in my size.");
console.log(null);
console.log(test_varriable);
