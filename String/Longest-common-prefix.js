
//  Longest Common Prefix in  String  - - -- - - -- - -- - - 
let arr = ['flower','flow','fly'];
let ans = [];
for(let i=0;i<arr[0].length;i++){
    let valid = true;
    for(let j=1;j<arr.length;j++){
     if(i<arr[j].length && arr[0][i]==arr[j][i])
     {
        continue;
     }else{
        valid = false;
        break;
     }
    }
    if(!valid){
        break;
    }else{
        ans.push(arr[0][i])
    }
    // return ans.join('')
}
console.log(ans.join(''))