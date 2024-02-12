let n = 7;


for(row=1;row<=n;row++){
    let ans= 1; 
    process.stdout.write(" "+ans)

for(let col=1;col<row;col++){
   ans = ans*(row-col);
   ans  = ans/col;
process.stdout.write(" "+ans)

}


 
process.stdout.write("\n")

}

