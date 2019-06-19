//5.1
let z = 7.25;

//5.2
console.log(z);

//5.3
let a = Math.round(z);

//5.4
console.log(a);

//5.5
function compareNumbers(a, z) {
    if (a > z) {
        newNumber = a;
        return a;
    } else {
        newNumber = z;
        return z;
    }
}

newNumber = compareNumbers(a,z);

//5.6
console.log('This is the highest value: ' + compareNumbers(a,z));

// Some examples
console.log(compareNumbers(14, 160));
console.log(compareNumbers(118784234, 873817231));
