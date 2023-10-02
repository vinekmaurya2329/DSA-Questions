let a = [
  [1, 2, 3],
  [2, 4, 6],
  [5, 2, 1],
];

let b = [
  [2, 4, 6],
  [5, 3, 1],
  [3, 7, 8],
];
let r= a.length;
let c = a[0].length;
let res = [];

for(i=0;i<r;i++){
    let row = []
    for(j=0;j<c;j++){
row.push(0);
    }
    res.push(row)
}


for(i=0;i<r;i++){
    for(j=0;j<c;j++){
 res[i][j]=a[i][j]+b[i][j];
    }
}
console.log(res)