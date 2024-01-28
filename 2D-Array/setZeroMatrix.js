// brootforce method 

let arr = [
    [1,1,0,1],
    [1,0,1,1],
    [1,1,1,1]
];
let n= arr.length-1;
let m= arr[0].length-1;
function markRow(i){
       for(let k=0;k<=m;k++){
        if(arr[i][k]!=0){
        arr[i][k]= -1;           
        }
    }
}

function markCol(j){
 
    for(let l=0;l<=n;l++){
        if(arr[l][j]!=0){
            arr[l][j]= -1;
        }
 }
}

for(let i=0;i<=n;i++){
    for(let j=0;j<=m;j++){
        if(arr[i][j]==0){
             markRow(i);
             markCol(j);
        }
    }
}

for(let i=0;i<=n;i++){
for(let j=0;j<=m;j++){
    if(arr[i][j]== -1){
        arr[i][j]=0;
    }
}
}
console.log(arr);