//Prime Number - Logic
var a =10;
var flag=true;
if(a<=1){
    flag=false;

}
else{
    for(let i=2;i<=a/2;i++){
        if(a%1===0){
            flag=false;
            break;
        }
    }
}
const result=flag===true?"Prime":"Not Prime";
console.log(result);


//palindrome of number 

var b=111;
b=a;
var rev=0;
while(a!==0){
    rev=rev*10+a%10;
   a/=10;
}
if(rev===b){
    console.log("palindrome");
}
else{
    console.log("Not palindrome");
}
