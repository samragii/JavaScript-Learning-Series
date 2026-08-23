// Define the compute_factorial() function
function compute_factorial(n)
{
 let f=1;
 for(let i=1;i<=n;i++)
 {
    f=f*i;
 }
    return f;
}

// Get the user input
let number = parseInt(prompt("Enter a number:"));

// Print total
let total=compute_factorial(number);
console.log(total);