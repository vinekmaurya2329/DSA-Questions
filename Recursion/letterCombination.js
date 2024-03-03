let arr = ['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
function letterCombination(digit,idx,asf){
    let ans = []
    if(idx>=digit.length){
        if(asf.length >0){
             ans.push(asf)
             console.log(ans);
             return
        }
    }
 let button  = parseInt(digit[idx]);
 let howManyTimes = arr[button].length;
 for(let press = 1;press<=howManyTimes;press++){
    letterCombination(digit,idx+1,asf + arr[button][press-1])
 }

}
console.log(letterCombination('23',0,''));