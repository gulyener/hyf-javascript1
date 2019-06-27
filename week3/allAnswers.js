//1. Strings!
// Find a way to remove the commas from the string and replace them with spaces.

let myString = "hello,this,is,a,difficult,to,read,sentence";

console.log(myString);
console.log(myString.length);

function strReplace() {
  let newString = myString.replace(/,/g, " ");
  console.log(newString);
}

strReplace();


//2. Arrays!

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
let maurosFavoriteAnimal = "turtle";
let jimsFavoriteAnimal = "meerkat";


// 2.1 Add Mauro's favorite animal to the array 2.2 Log it

favoriteAnimals.push(maurosFavoriteAnimal);
console.log(favoriteAnimals);


// 2.3 Add Jim's favorite animal to a specific index

favoriteAnimals.splice(1, 0, jimsFavoriteAnimal);


// 2.4 Write a console.log statement that explains in words you think the new value of the array is. 2.5 Log it

console.log(
  "The new value of the array will be: blowfish, meerkat, capricorn, giraffe, turtle"
);

console.log(favoriteAnimals);


// 2.6 console log the length of the array
console.log("The length of the array is: " + favoriteAnimals.length);


// 2.7 remove giraffe from the array
console.log('Remove giraffe from the array');

// favoriteAnimals.splice(3, 1);
// I commented this out to try the next question


// 2.9 remove an item from an array when you don't know the index of the item

let itemToRemove = "giraffe";

// We can filter out all the items that are equal to "giraffe" and create a new array with the rest of the items

animalsWithoutGiraffe = favoriteAnimals.filter(item => item !== itemToRemove);

console.log(animalsWithoutGiraffe);

console.log('Orginial array has not changed: ')
console.log(favoriteAnimals);


// We can also do it this way. But then the original array will change too
console.log("Original array has changed: ");
favoriteAnimals = favoriteAnimals.filter(item => item !== itemToRemove);
console.log(favoriteAnimals);

// or we can use Splice property in a function. To remove 'turtle' this time.

function remove(favoriteAnimals, item) {
  for (let i = favoriteAnimals.length; i--;) {
    if (favoriteAnimals[i] === item) {
      favoriteAnimals.splice(i, 1);
    }
  }
}

remove(favoriteAnimals, "turtle");
console.log(favoriteAnimals);


// 2.10 log the index of 'meerkat'

console.log(
  "The item you are looking for is at index: " +
    favoriteAnimals.indexOf("meerkat")
);



//3. More JavaScript

// 1. Create a function that takes 3 arguments and returns the sum of the these arguments.

const sumNumbers = (a, b, c) => {
  console.log(a + b + c);
};

sumNumbers(1, 4, 15); //20



// 2.Create a function named colorCar that receives a color, and prints out, 'a red car' for example.

const colorCar = color => {
  console.log(`A ${color} car`);
};

colorCar("blue"); //a blue car
colorCar("pink"); //a pink car



// 3. Create an object and a function that takes the object as a parameter and prints out all of its properties and values.

const favoriteFoods = {
  type: "pizza",
  quantity: 2,
  origin: "Italy",
  ingredients: ["tomato", "cheese", "dough", "pineapple"]
};

function printObject(favoriteFoods) {
  console.log(favoriteFoods);
}

printObject(favoriteFoods);



// 4. Create a function named vehicleType that receives a color, and a code, 1 for car, 2 for motorbike. And prints 'a blue motorbike' for example when called as vehicleType("blue", 2)

const vehicleType = (color, code) => {
  if (code === 1) {
    code = "car";
  }
  if (code === 2) {
    code = "motorbike";
  }
  console.log(`A ${color} ${code}`);
};

vehicleType("blue", 2);



// 5. Can you write the following without the if statement, but with just as a single line with console.log(...);?

if (3 === 3) {
  console.log("yes");
} else {
  console.log("no");
}

// By using ternary operatory

console.log(3 === 3 ? "yes" : "no");



// 6. Create a function called vehicle, like before, but takes another parameter called age, so that vehicle("blue", 1, 5) prints 'a blue used car'

const vehicle = (color, age, code) => {
  age > 4 ? (age = "used") : (age = "new");
  code === 1 ? (code = "car") : (code = "motorbike");
  console.log(`a ${color} ${age} ${code} `);
};

vehicle("red", 5, 1);

// 7.Make a list of vehicles, you can add "motorbike", "caravan", "bike", or more.

let myVehicles = ["motorbike", "car", "truck", "caravan", "bike"];

// 8. How do you get the third element from that list?

console.log(myVehicles[2]);

// 9. Change the function vehicle to use the list of question 7. So that vehicle("green", 3, 1) prints "a green new bike".

const vehicleMaker = (color, age, code) => {
  for (let i = 0; i < myVehicles.length; i++) {
    if (i === code) {
      code = myVehicles[i];
    }
    if (age === 0) {
      age = "new";
    } else if (age > 10) {
      age = "old";
    } else if (age > 0) {
      age = "used";
    }
  }
  console.log(`a ${color} ${age} ${code} `);
};

vehicleMaker("blue", 0, 0); // a blue new motorbike
vehicleMaker("pink", 3, 1); // a pink used car
vehicleMaker("red", 11, 2); // a red old truck
vehicleMaker("black", 6, 3); // a black used caravan
vehicleMaker("grey", 13, 4); // a grey old bike

// 10. Use the list of vehicles to write an advertisement. So that it prints something like: "Amazing Joe's Garage, we service cars, motorbikes, caravans and bikes.". (Hint: use a for loop.)

// 11. What if you add one more vehicle to the list, can you have that added to the advertisement without changing the code for question 10?

myVehicles.push("police car"); 

// I have to add the element before the functions otherwise it does not work.

// To loop through every element and add 's, ' each time

let string = "Amazing Joe's Garage, we service ";

myVehicles.forEach(function(element) {
  string += element + "s, ";
  if (element === myVehicles[myVehicles.length - 1]) {
    string = string.slice(0, -2) + "."; //to remove the 's, ' from the last element and add '.' instead
  }
});

console.log(string);

// 12. Create an empty object

let emptyObject = {};

// 13. Create an object that contains the teachers that you have had so far for the different modules.
// 14. Add a property to the object you just created that contains the languages that they have taught you.

const myTeachers = [
  {
    name: "Philipp",
    language: "html-css"
  },
  {
    name: "Igor",
    language: "git-cli"
  },
  {
    name: "Bonan",
    language: "git-github"
  },
  {
    name: "Rob",
    language: "html-css"
  },
  {
    name: "Nick",
    language: "JavaScript"
  }
];

// 15. Write some code to test two arrays for equality using == and ===. Test the following:

// WHYYY?????

// Two strings are strictly equal when they have the same sequence of characters, same length, and same characters in corresponding positions.
// An expression comparing Objects is only true if the operands reference the same Object.

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y); //false
console.log(x === y); //false
console.log(z == y); //true
console.log(z == x); //false

// Arrays are objects so they will only be equal if both operands refer to the same object. Therefore x == y will return true
// We can also compare arrays by converting them to strings

console.log(z.toString() == y.toString()); //true

// 16. Show that changing o2 changes o3 (or not) and changing o1 changes o3(or not).

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

console.log("o1: ", o1);
console.log("o2: ", o2);
console.log("o3: ", o3);

o2 = { foo: "no" }; //if we change 02

console.log("o1: ", o1); // o1 does not change
console.log("o2: ", o2); // o2 changes
console.log("o3: ", o3); // o3 does not change

o1 = { foo: "yes" }; // if we change o1

console.log("o1: ", o1); // only o1 changes
console.log("o2: ", o2);
console.log("o3: ", o3);

// o3 does not change either way

// Does the order that you assign (o3 = o2 or o2 = o3) matter?

// If we change the order to o2 = o3 then we get a SyntaxError saying: Identifier 'o2' has already been declared

// 17. What does the following code return? (And why?)

let bar = 42;
console.log(typeof typeof bar); 
//returns string because bar is a number and number is a string
