//  Two Sum  Element 


let arr = [3,5,2,1,3,9,9,20];
let target = 22;
function twoSum(arr,target){
    for(let i=0;i<arr.length;i++){
    for( let j=i+1;j<arr.length;j++){
    if(arr[i]+arr[j]==target){
        return [i,j]
    }
    }
}
return [-1,-1]
}
console.log(twoSum(arr,target))



// Second method --- - -- - -- - - -- - - -

// let arr = [3,5,2,1,3,8,9,7];
 arr = arr.sort();
//  let target = 11;
//  arr = arr.reverse();
//  console.log(arr,target)
function Twosum(arr,target){
    let i =0;
    let j = arr.length-1;
while (i<j){
    if(arr[i]+arr[j]==target) return [i,j]
    else if(arr[i]+arr[j]>target){
        j--;
    }else{
        i++;
    }

}
return [-1,-1]
}

console.log(Twosum(arr,11))
