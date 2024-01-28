let arr = [3,5,2,1,6,8,7,9];

let maxNum = 0;

for(let i=0;i<=arr.length;i++){
    if(arr[i]>=maxNum){
        maxNum = arr[i]
    }
}

for(let i=maxNum;i>0;i--){
    for(let j =0;j<arr.length;j++){

if(arr[j]>=i){
    process.stdout.write("*")
 }else{
    process.stdout.write(" ")
 }
    }
 process.stdout.write("\n")
}
console.log(maxNum);