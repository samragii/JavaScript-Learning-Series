const person = {name: "John", age: 30};
const job = {title: "Developer", company: "Tech Corp"};

// Merge person and job
const profile = {...person, ...job};

console.log(profile);