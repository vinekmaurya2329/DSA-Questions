let a = [
  [1, 3, 2],
  [3, 2, 5],
  [2, 1, 3],
];

let b = [
  [2, 3],
  [3, 4],
  [3, 2],
];
let r1 = a.length;
let c2 = b[0].length;
let res = [];
let r2= b.length;

for (i = 0; i < r1; i++) {
  let row = [];
  for (j = 0; j < c2; j++) {
    row.push(0);
  }
  res.push(row);
}
// console.log(res);

for(i=0;i<r1;i++){
    for(j=0;j<c2;j++){
        for(k=0;k<r2;k++){
            res[i][j]+= a[i][k]*b[k][j]
        }
    }
}
console.log(res)