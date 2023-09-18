let arr = [1,2,3,4,5];
let k=2;
let n =arr.length;

function rotate(i,j){
    while(i<j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
        i++;
        j--
    }
}
rotate(n-k,n-1);
rotate(0,n-k-1);
rotate(0,n-1);

console.log(arr,'arr')