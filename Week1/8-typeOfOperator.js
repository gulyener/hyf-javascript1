//8.1 8.2
let x = 4;
let y = "Hello";
let z = true;
let k = NaN;
let l = "Stop talking";
let m = 123892834;

console.log("The value of my variable x is: " + x);
console.log("The value of my variable y is: " + y);
console.log("The value of my variable z is: " + z);
console.log("The value of my variable k is: " + k);
console.log("The value of my variable l is: " + l);
console.log("The value of my variable m is: " + m);

//8.3
console.log("The variable type of x is: number");
console.log("The variable type of y is: string");
console.log("The variable type of z is: boolean");
console.log("The variable type of k is: number");
console.log("The variable type of l is: string");
console.log("The variable type of m is: number");

//8.4 In a short way
console.log(typeof(x), typeof(y), typeof(z), typeof(k), typeof(l), typeof(m));

//8.5 8.6
function findType (a,b) {
    if(typeof(a) === typeof(b)) {
        return 'SAME TYPE';
    } else {
        return 'NOT THE SAME';
    }
};

console.log(findType(x,y));
console.log(findType(z,k));
console.log(findType(y,l));
console.log(findType(l,m));
console.log(findType(l,y));


// Another way
console.log("\nThis is an easier way of doing it: ");

if(typeof(x) === typeof(y)) {
    console.log("SAME TYPE");
} else {
    console.log("Not the same");
}