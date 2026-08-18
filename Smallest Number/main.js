
// Take user input
let n1 = parseInt(prompt("Enter the first number: "));
let n2 = parseInt(prompt("Enter the second number: "));
let n3 = parseInt(prompt("Enter the third number: "));
let smallest;
// Check if n1 is the smallest
if(n1<=n2 && n1<=n3){
    smallest=n1;
}
else if(n2<=n1 && n2<=n3){
    smallest=n2;
}
else{
    smallest=n3;
}
console.log(smallest);