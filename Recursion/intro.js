function fun(n){
    if(n==0) return;
    console.log(n,'-> preorder');
    fun(n-1);
    console.log(n,'-> postorder')
}
fun(5)