let arr = [
  [1, 2, 3, 4, 5, 6, 7],
  [5, 4, 3, 2, 8, 9, 0],
  [5, 7, 8, 4, 23,  9, 7],
  [11, 2, 3, 4, 8, 9, 6],
  [12, 34, 55, 23, 12, 32, 21],
  [43,54,56,78,45,43,56]
];


 let tw =0;
let rw = arr[0].length-1;
let lw = 0;
let bw = arr.length-1;
let n = arr.length;
let m = arr[0].length;
let total = n*m;

 while (total >0){

   

for(let j=tw;j<=rw;j++){
    console.log(arr[tw][j]);
    total--;
}
tw++;
for(let i=tw;i<=bw;i++){
    console.log(arr[i][rw]);
    total--;
} 
rw--;
for(let j=rw;j>=lw;j--){
    console.log(arr[bw][j]);
    total--;
}
bw--;
for(let i=bw;i>=tw;i--){
    console.log(arr[i][lw]);
    total--;
}
lw++;
 }