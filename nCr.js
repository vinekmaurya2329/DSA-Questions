 // find nCr   brootforce method

 function factorial(n){
    if(n<=1) return 1;
    let v1 = n;
    let v2 = factorial(n-1)
    return  v1*v2;
 }

 function nCr(n,r){
    let v1 = factorial(n);
    let v2= factorial(r)* factorial(n-r)
    return v1/v2;
 }
 console.log(nCr(20,14));