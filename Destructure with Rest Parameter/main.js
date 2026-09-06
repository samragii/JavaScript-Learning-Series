// Replace ___ with your code

const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

// Destructure the first three elements and the rest using the rest parameter
let[color1,color2,color3,...color4] = colors;

// Display the result
console.log(color4);
