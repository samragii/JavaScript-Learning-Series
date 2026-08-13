// Create the fee and discountPercent variables
let fee=1536;
let discountPercent=10;

// Compute discount and store it in a variable discount
let discount=(discountPercent/100)*fee;

// Compute the final fee
let final_fee=fee-discount;

// Display the final fee
console.log(final_fee);