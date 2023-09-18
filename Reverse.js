let arr = [10,20,30,40,50,60,70,80,90];
let i = 0;
let j = arr.length-1;

 

while (i!=j) {
let temp  = arr[j];
arr[j]=arr[i];
arr[i]= temp;
i++;
j--;
console.log('in loop')
}
console.log(arr)