const A = [
    [4, 8, 12],
    [5, 10, 15]
];

const B = [
    [7, 14, 21],
    [9, 16, 24]
];

// Result matrix
const difference = [];

// Calculate difference
for(let i=0;i<A.length;i++)
{
    difference[i]=[];
    for(let j=0;j<B[i].length;j++)
    {
        difference[i][j]=A[i][j]-B[i][j];
    }
}

// Print result matrix row by row
for(let i=0;i<A.length;i++)
{
    row="";
    for(let j=0;j<B[i].length;j++)
    {
        row+=difference[i][j]+" ";
    }
    console.log(row);
}