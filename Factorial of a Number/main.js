// Get user input
let n = parseInt((prompt('Enter a positive integer:')));

// Initialize factorial variable
let factorial = 1;

// Compute the factorial using a for loop
for (let i=1;i<=n;i++) {
    factorial=factorial*i;
}

// Print the factorial
console.log(factorial);