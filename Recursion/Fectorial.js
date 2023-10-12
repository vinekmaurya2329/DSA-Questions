function fic(n){
    if(n<=1) return n;
return n * fic(n-1)
}
console.log(fic(4))