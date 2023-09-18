let arr =[44,9,8,11,34,23,21];

for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j+1]
            arr[j+1]= arr[j];
            arr[j]= temp;
        }
    }
}
console.log(arr)