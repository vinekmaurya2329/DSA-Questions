//  Binary Search ----

let arr = [21, 32, 38, 40, 56, 76, 77, 87, 90, 97, 101];

function binary(arr) {
  let low = 0;
  let high = arr.length-1;
  let target = 79;
  while (low <= high) {
    let mid = parseInt((low + high) / 2);

    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) {
      low = mid + 1;
    } else if (arr[mid] > target) {
      high = mid - 1;
    }
    
  }
  return -1;
}
console.log(binary(arr));
