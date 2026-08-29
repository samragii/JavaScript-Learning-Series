// Initialize the array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to calculate the product
const product = (a,b) =>
{
    return a*b;
};

// Find the product of all numbers in the array
const newarray = numbers.reduce(product,1);

// Print the result
console.log(newarray);