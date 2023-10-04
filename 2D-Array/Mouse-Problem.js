let arr = [
    [0,0,0,0,0,1,0,1],
    [0,1,0,0,0,0,0,0],
    [0,1,0,0,0,0,1,0],
    [1,1,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,0]
];

function mouseAmaze(arr){
let i=0 ;
let j=0;
let state = 0;
 let di =[0,1,0,-1];
let dj =[1,0,-1,0];
let n = arr.length;
let m = arr[0].length;
while (i>=0 && i<n && j>=0 && j<m){
    if(arr[i][j]==1){
        arr[i][j]=0;
        state = (state+1)%4;
    }
    i+= di[state];
    j+= dj[state];
}
i-= di[state];
j-= dj[state];
return {i,j}

}
console.log(mouseAmaze(arr))