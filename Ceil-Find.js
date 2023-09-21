//  find ceil element  by binary search -----

let arr = [21, 32, 38, 40, 56, 76, 77, 87, 90, 97, 101];

function findCeil(arr,target){
    let low =0;
    let high = arr.length-1;
    let ceil = arr.length;
    
    while(low<=high){
   let mid  = parseInt((low+high)/2)
if(arr[mid]<= target){
    low = mid+1;
}else{
    ceil = mid;
    high = mid-1;
}

    }
    return ceil;
}
console.log(findCeil(arr,100))