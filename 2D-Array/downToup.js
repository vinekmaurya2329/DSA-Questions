let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];


for(let i =arr[0].length-1;i>=0;i--){
for(j=arr.length-1;j>=0;j--){
//  console.log(arr[j][i])
process.stdout.write(arr[j][i]+ " ")
}
}