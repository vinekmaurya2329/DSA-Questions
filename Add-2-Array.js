let a = [9, 9, 5, 1, 7, 6];
let b = [9, 3, 2, 5, 5, 2, 6];

let n = a.length;
let m = b.length;

//  reverse function  - -- -- - 
function reverce(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
    i++;
    j--;
  }
  return arr;
}

a = reverce(a);
b = reverce(b);

//  adding code - --- -- -- - -- - - -- -

function addArr(a, b) {
  let i = 0;
  let j = 0;
  let carry = 0;
  let result = [];
  
  while (i < n || j < m || carry != 0) {
//     let x = 0;
//   let y = 0;
    if (i < n){ x = a[i]} else{ x=0}
    if (j < m){ y = b[j]} else{ y=0}

    let sum = carry + x + y;
    carry = parseInt(sum / 10);
    sum = parseInt(sum % 10);
    result.push(sum);
    i++;
    j++;
  }
  return reverce(result);
}

console.log(addArr(a, b));
