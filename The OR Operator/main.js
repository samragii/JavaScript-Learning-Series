// Take user input
let gpa = parseFloat(prompt("Enter your GPA: "));
let satScore = parseInt(prompt("Enter your SAT score: "));

if(gpa>=3.5 || satScore>=1200){
    console.log("eligible");
}
else{
    console.log("not eligible")
}