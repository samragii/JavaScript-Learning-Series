// Create addThreeNums function that takes 3 arguments
function addThreeNums(n1,n2,n3)
{
    let sum=n1+n2+n3;
    console.log(sum);

}

// Take user input for 3 numbers
let number1 = parseInt(prompt("Enter a number:"));
let number2 = parseInt(prompt("Enter a number:"));
let number3 = parseInt(prompt("Enter a number:"));

// Call the function with 3 arguments
addThreeNums(number1,number2,number3);