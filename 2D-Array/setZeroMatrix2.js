let arr = [
    [1,1,0,1],
    [1,0,1,1],
    [1,1,1,1]
];

let r = arr.length;
let c = arr[0].length;
let n= arr.length-1;
let m = arr[0].length-1;

let row = new Array(r).fill(0);
let col = new Array(c).fill(0);

for(let i=0;i<=n;i++){
for(let j=0;j<=m;j++){
    if(arr[i][j]==0){
        row[i]= -1;
        col[j]= -1;
    }
}
}
for(let i=0;i<=n;i++){
    for(let j=0;j<=m;j++){
        if(row[i] == -1 || col[j] == -1){
            arr[i][j] = 0;
        }
    }
}
console.log(arr);