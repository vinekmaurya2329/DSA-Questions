//  Maximum sum subArray --- 

let arr = [5,2,-10,3,-1,2,6,-14,-2,1,-1,3];

function mss(arr){

    let csp =0;
    let cep =0;
    let csum=0;
    let osp = -1;
    let oeep =-1;
     let omax = -Infinity;

    while(cep<arr.length){
        if(csum + arr[cep]>=arr[cep]){
            csum+=arr[cep];
        }else{
            csp = cep;
            csum = arr[cep]
        }
        if(csum >= omax){
 osp =csp;
 oep  = cep;
 omax = csum;     
        }
        cep++;
    }
    return [osp,oep,omax]
    
}
console.log(mss(arr))