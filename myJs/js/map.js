// Maps

var map = new Map();
map.set("Red", "Apple");
map.set("Blue", "Blueberry");
map.set("Green","Peer");
console.log(map);

var get = map.get("Green");
console.log(get);

console.log(map.size);
console.log(map.has("Blue"));
map.delete("Red");
console.log(map);
map.clear();
console.log(map);