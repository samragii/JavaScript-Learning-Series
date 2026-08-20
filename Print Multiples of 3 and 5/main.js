// Get integer input
let n = parseInt(prompt("Enter a positive integer: "));

for(let i=1;i<=n;i++)
{
 if(i%3==0 && i%5==0){
    console.log(i);
 }
}