// Define the isPositiveOrNegative() function
function isPositiveOrNegative(number)
{
 if(number>=0){
    return true;
 }
 else{
    return false;
 }
}
// Take integer input from the user
let inputNumber = Number(prompt('Enter a number:'));

// Call the function
console.log(isPositiveOrNegative(inputNumber));