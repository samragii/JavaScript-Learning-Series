// Given object
const person = {
    name: "Alice",
    age: 30,
    city: "London"
};

// Loop through the keys of the object
for(key in person) {

    // Display associated value
    console.log(person[key]);
}