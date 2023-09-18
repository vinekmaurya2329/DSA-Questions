let arr = [10,11,22,566,11,1,10,4,7,10,34,10,10,10];
let ele =10;
let count = 0;
for(i=0;i<arr.length;i++){
    if(arr[i]==ele){
        count++;
    }
}
console.log( `in this array 10 is ${count} times`)