// Get two string inputs text1 and text2
let text1 = prompt("Enter the text:");
let text2 = prompt("Enter the text:");
// Create substring from text1
// containing only the first four characters
let substr1 = text1.slice(0,4);

// Create substring from text2
// containing only the last four characters
let substr2 = text2.slice(-4);
// Print the result
console.log(`${substr1}${substr2}`);