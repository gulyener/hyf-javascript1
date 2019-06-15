let myArray = ["cat", 512, "dog", ["bird", "duck", "pigeon"], true, ""];

console.log(myArray);

// This is about the global infinity property

console.log(6/0); // 6/0 equals Infinity
console.log(10/0); // 10/0 equals Infinity
console.log(Infinity/10); // equalas Infinity
console.log(1732/Infinity); // equals 0

console.log(6/0 === 10/0); // logs true because they are both infinite 

// Or we can write an if statement to check it
if(6/0 === 10/0) {
  console.log('true');
}