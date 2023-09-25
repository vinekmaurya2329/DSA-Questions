//  smallest sum subArray --_--_--_--_--___-----______------______------_-

let arr = [5,2,-10,3,-1,2,4,-14,-2,1,-1,3];

function smallSumSubarray(arr){
let csp=0;
let cep =0;
let csum=0;
let osp= -1;
let oep = -1;
let osum = Infinity;

while(cep<arr.length){

    if(csum+arr[cep] <=arr[cep]){
        csum+=arr[cep];

    }else{
        csp = cep;
        csum = arr[cep];
    }
    if(csum<osum){
     
        osp =csp;
        oep =cep;
        osum = csum;

    }
    cep++;
}
return [osp,oep,osum]
}

console.log(smallSumSubarray(arr))