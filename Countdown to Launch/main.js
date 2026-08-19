
// Take integer input
let countdown = parseInt(prompt("Enter starting countdown number: "));
let i=0;
while(countdown>=0){
    console.log(`Time left: ${countdown} seconds`);
    console.log(`Elapsed: ${i} seconds`);
    console.log("---");
    countdown=countdown-1;
    i=i+1;
}

console.log("Liftoff!");