let arr = [
  [1, 2, 3, 4, 5, 6, 7],
  [2, 4, 6, 7, 9, 1, 4],
  [3, 1, 0, 8, 2, 4, 3],
  [2, 0, 4, 6, 5, 3, 1],
  [7, 9, 8, 4, 6, 5, 2],
  [2, 1, 0, 3, 5, 8, 7],
  [9, 8, 4, 2, 1, 0, 9],
];

let n = arr.length;
for(gap =n-1;gap>0;gap--){
for(let i=gap,j=0;i<n;i++,j++){
process.stdout.write(arr[i][j]+' ')
}
}
for(let gap = 0;gap<n;gap++){
    for(i=0,j=gap;j<n;i++,j++){
        // console.log(arr[i][j])
        process.stdout.write(arr[i][j]+' ')
    }
}




 
