let arr = 'abcdcdec';
// arr = arr.split('');

let i=0;
let result = [];
let n= arr.length;
let j = i+1;

while(i<n || j<n){
    result.push(arr[i]);

    let accsi1 = arr.charCodeAt(i);
    let accsi2= arr.charCodeAt(j);
    if (j<n) result.push((accsi2 - accsi1).toString(10));
    i++;
    j= i+1
}
console.log(result)
