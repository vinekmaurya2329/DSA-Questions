function occ(str){
   
    let occurance = {};
    str.split("").forEach((elem)=>{
          if( occurance.hasOwnProperty(elem) ===false){
    occurance[elem] = 1;
   }else{
    occurance[elem]++;
   }
    })
  
 return occurance
}
console.log(occ('applebanana'))
// console.log(occ('apple bananna'))
