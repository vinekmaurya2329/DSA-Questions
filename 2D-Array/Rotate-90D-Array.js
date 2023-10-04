let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];


function rotate90D(arr){
    let n = arr.length;
    let sp = 0;
    let ep = n-1;
    while(sp<ep){
        for(j=0;j<n;j++){
            let temp =arr[sp][j];
 arr[sp][j] = arr[ep][j];
 arr[ep][j]= temp;
        }
        sp++;
        ep--;
    }

    for(i=0;i<n;i++){
        for(j=i+1;j<n;j++){
            let temp =  arr[i][j];
          arr[i][j]=arr[j][i];
          arr[j][i]= temp;
        }
    }
    return arr
}
console.log(rotate90D(arr))


//  aslo reverse arrya these method -- - - 


// function roatte(arr){
// let sp = 0;
// let ep = arr.length-1;
// while(sp<ep){
//     let temp = arr[sp]
//     arr[sp] = arr[ep];
//     arr[ep]= temp;
//     sp++;
//     ep--;
// }
// return arr
// }
// console.log(roatte(arr))