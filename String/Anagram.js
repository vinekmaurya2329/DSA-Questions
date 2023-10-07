let s = "anagram";
let t = "nagaram";
// s = s.split('')
// t = t.split('')

function anagram(s,t){
if(s.length != t.length ){
    return false;
}
    let f1 = Array(26).fill(0);
    let f2 = Array(26).fill(0);
 for(let i =0;i<s.length;i++){
     let indx1 = s[i].charCodeAt(0) - 97;
     f1[indx1]++;
 }
 for(let i =0;i<t.length;i++){
    let indx2 = t[i].charCodeAt(0) - 97;
    f2[indx2]++;
}
console.log(f1)
console.log(f2)

for(let i=0;i<f1.length;i++){
    if(f1[i] == f2[i]) return true
    else return false;
}

}

console.log(anagram(s,t))
