//  target sum subarray --_--_--_--_--_--_--_

let arr = [4,6,1,3,2,4,9];
let sp = 0;
let ep = 0;
let csum =0;
let target = 12;
function targetSum(arr,target){

while(ep<arr.length){
 if(csum == target){
     return [sp,ep-1]
 }else if(csum < target){
    csum+=arr[ep];
    ep++;
 }else{
    csum-=arr[sp];
    sp++;
 }

}
return 'element does not exist';
}
console.log(targetSum(arr,target))



// brootforce approach 

function brootforce (arr){

for( let sp=0;sp<arr.length;sp++){
   for( let ep=sp;ep<arr.length;ep++){
      for( let i=sp;i<=ep;i++){
       csum += arr[i];
       if(csum == target){
         return [sp,ep]
       }
       }
       csum=0;
      }
   }
return [-1,-1]

}

console.log(brootforce(arr),'-brootforce ')