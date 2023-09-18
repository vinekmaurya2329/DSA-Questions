//   Merge two array 

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [8,9,10,11,12,13,14];
let arr3 = [];

for(i=0;i<arr1.length;i++){
    arr3[i]=arr1[i]
}
for(i=0;i<arr2.length;i++){
    arr3[arr1.length+i]= arr2[i]
}

//  build method -----
// arr3= [...arr1,...arr2]

console.log(arr3)