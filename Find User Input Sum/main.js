// Get a number input
let n = parseFloat(prompt("Enter a number: "));

// Initialize the total variable
let total = 0;

while(n>0){
 total = total+n;
 n = parseFloat(prompt("Enter a number:"));
}
console.log(total);