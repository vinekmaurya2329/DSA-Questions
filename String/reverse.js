let num = 1234;

function reverse(num){
    let print = 0;
      while(num>0){
        let rev = num%10;
        print = print*10 + rev; 
     num = Math.floor(num/10);
        
      }
      return print 
}
console.log(reverse(1234))