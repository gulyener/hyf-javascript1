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
