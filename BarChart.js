let arr = [6,4,2,7,5,3,1,10];
// let arr = [10,9,8,7,6,5,4,3,2,0,2,3,4,5,6,7,8,9,10]
let maxEle = 0;

for( let i =0;i<arr.length;i++){
    if(arr[i]>maxEle) maxEle = arr[i]
}

for(let i=maxEle;i>0;i--){
    for(let j=0;j<arr.length;j++){
        if(arr[j]>=i){
            process.stdout.write("*")
        }else{
            process.stdout.write(" ")
        }
    }
    process.stdout.write("\n")
}

