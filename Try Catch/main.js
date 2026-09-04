const numerator = 5;
const denominator = 0;

try {
    // Check if denominator is 0
    if (denominator === 0) {

        // Generate error
        throw new Error("Cannot divide by zero");
    }

    let result = numerator / denominator;
    console.log(result);

} catch (error) {
    console.log(`Error caught: ${error.message}`);
}