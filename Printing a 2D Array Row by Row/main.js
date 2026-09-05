const data = [
    [2, 3, 5],
    [7, 14, 21],
    [1, 3, 5]
];

// Print each row of the 2D array
for(let i=0;i<data.length;i++)
{
    let row="";
    for(let j=0;j<data[i].length;j++){
     row+= data[i][j]+" ";
}
console.log(row);
}
