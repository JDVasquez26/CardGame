const suits = ["spades", "diamonds", "clubs", "hearts"];
let index = suits.findIndex("diamonds");

console.log("index:", index);

console.log("this is what it returns:", suits.splice("diamonds"));
console.log("this is what's inside suits:", suits);