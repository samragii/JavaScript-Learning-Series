// Create displayInfo() function that takes 2 arguments
function displayInfo(name,location){
 console.log(name);
 console.log(location);
}

// Take user input
let country = String(prompt("Enter a location:"));


// Call the function with arguments "Taylor" and country
displayInfo("Taylor",country);