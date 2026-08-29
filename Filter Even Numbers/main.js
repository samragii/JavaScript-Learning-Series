
// Initialize the numbers
const numbers = [1, 4, 7, 10, 9, 2];

// Write your code here
const even = (number) =>
{
    if(number%2==0)
    {
        return number;
    }
};

const newarray=numbers.filter(even);
console.log(newarray);