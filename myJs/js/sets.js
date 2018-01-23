// Sets
var set = new Set();

set.add("Facebook");
set.add("Linkedin");
set.add("Google Plus");

console.log(set);

set.add("Linkedin");
console.log(set);

console.log(set.size);

console.log(set.has("Linkedin"));

set.delete("Facebook");
console.log(set);

set.clear();
console.log(set);