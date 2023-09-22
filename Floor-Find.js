//  find floor element by using binary search

let arr = [21, 32, 38, 40, 56, 76, 77, 87, 90, 97, 101];
 function floorFind(arr,target){
let low =0;
let high = arr.length-1;
let floor = arr.length;

while(low<=high){
    let mid = parseInt((low+high)/2);
    if(arr[mid]>=target){
        high = mid-1;
    }else{
        floor =  mid;
        low = mid+1;
    }
}
return floor;
 }

 console.log(floorFind(arr,96))