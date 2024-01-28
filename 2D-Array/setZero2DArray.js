let arr = [
    [1,1,0,0,1,0],
    [0,1,1,0,1,1],
    [1,1,1,1,1,1],
    [1,1,1,0,1,1]
];
for(let i=0;i<=arr.length-1;i++){
    for(let j=0;j<=arr[0].length-1;j++){
        if(arr[i][j]== 0){
            arr[i][j]=-1
        }
    }

}

process.stdout.write(" "+ arr)
