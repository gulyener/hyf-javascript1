
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
