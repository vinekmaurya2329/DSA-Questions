let arr = [6,4,2,7,5,3,1,10];


let max=0;
for(let i=0;i<arr.length;i++){
 if(arr[i]>=max){
    max = arr[i]
 }
}
while(max!=0){
   for(let i=0;i<arr.length;i++){
      if(arr[i]>=max){
         process.stdout.write('*')
      }else{
         process.stdout.write(' ')

      }
   }
   process.stdout.write("\n")

   max--;
}