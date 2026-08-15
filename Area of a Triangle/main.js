// Get three sides of the triangle
let a=parseFloat(prompt("Enter the value"));
let b=parseFloat(prompt("Enter the value"));
let c=parseFloat(prompt("Enter the value"));
// Compute the semi-perimeter
let s=(a+b+c)/2;

// Compute the area of the triangle and print it
let A=(s*(s-a)*(s-b)*(s-c))**0.5;
console.log(A)