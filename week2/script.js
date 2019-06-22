// 1. Array Manipulation - Remove 3's and add 100 to the array

const myNumbers = [5, 3, 2, 9, 19, 20, 3, 5];

// First Solution
const changeNumbers = function() {
  myNumbers.splice(1, 1) + myNumbers.splice(5, 1) + myNumbers.push(100);
  console.log(myNumbers);
};

changeNumbers();

// Second Solution

function changeNumber1(removeNum, addNum) {
  myNumbers.splice(myNumbers.indexOf(removeNum), 1);
  myNumbers.push(addNum);
  console.log(myNumbers);
  // Do we have to 'return' when console.log already gives the answer?
}

changeNumber1(3,100);

// 2. Object Fun - Log names and sounds of the animals on the console

const myPets = [
  {
    animalName: "Bobo the dog",
    animalWeight: 5.6,
    animalSound: function() {
      console.log("Woof woof!");
    }
  },
  {
    animalName: "Tweety the bird",
    animalWeight: 2.4,
    animalSound: function() {
      console.log("Tweet tweet!");
    }
  },
  {
    animalName: "Lompo the cow",
    animalWeight: 50.1,
    animalSound: function() {
      console.log("Moo moo!");
    }
  },
  {
    animalName: "Bebe the bee",
    animalWeight: 0.5,
    animalSound: function() {
      console.log("Buzz buzz!");
    }
  },
  {
    animalName: "Squishy the cat",
    animalWeight: 4.4,
    animalSound: function() {
      console.log("Meow meow!");
    }
  }
];

// First Solution 

const getAnimalName = () => {
  for (let i = 0; i < myPets.length; i++) {
    console.log(myPets[i].animalName);
    myPets[i].animalSound();
  }
  return;
};

getAnimalName();

// Second Solution using forEach

console.log("\n This is another way, using forEach method:\n");

myPets.forEach(animal => {
  console.log(animal.animalName);
  animal.animalSound();
  return;
});

// 3. String Manipulation - Remove the word 'good'

const myString =
  "\nHello, it is a good day, I eat good bananas, I do not like the word good\n";

const replaceWord = re => {
  return myString.replace(re, "");
};

console.log(replaceWord(/ good/gi));

// what is this sorcery /..../..? What kind of a data is it? 
//what does gi mean? What is going on??


// 4. Conditionals - Log numbers between 1-200 that can be divided by 3

function getMultiples(minNum, maxNum, divNum) {
  for (let i = maxNum; i > minNum; i--) {
    if (i % divNum === 0) {
      console.log(i);
    }
  }
  return;
}

getMultiples(1, 200, 3);

