try {
    let numbers = [10,20,30];

    // Take integer input
    let index = parseInt(prompt("Enter a integer:"));

    // Check if the index is within the valid range
    if (index<numbers.length && index>=0) {

        // Print the item from the numbers list
        console.log(numbers[index]);

    } else {

        // Handle invalid index
        throw new Error("Index is wrong");
    }

} catch (error) {
    // Display error message
    console.log(error.message);
}