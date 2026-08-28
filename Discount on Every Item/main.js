// Initialize the prices
const prices = [200, 300, 400];

// Function to provide $20 discount
const discount=(price) =>
{ return price - 20;
}
// New array with discounted prices
const newarray = prices.map(discount);
// Display discounted prices
console.log(newarray);