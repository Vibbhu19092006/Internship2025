/*var a; //global scope
let d; //Block Scope
const c=9;

var p=20;//Number
var q="Hello"//String
var bool=true;//Boolean
var r;//undefined
var s=null;//null,//bigint,//symbol
var big=1010200102102010001111n;
var symbol=symbol("li");

console.log(typeof p);
console.log(typeof q);
console.log(typeof bool);
console.log(typeof r);
console.log(typeof s);

var arr=[1,2,3,4,5]
console.log(arr);


//Arithametic operator(+,-,*,/,%) 
var a =10;
var b=20;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//Relational Operators(<,>,>=,<=,==,!=)
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);

//Assign Operator(=,+=,-=,*=,/=,%=)

a=10;
console.log(a);
a+=10;
console.log(a);
a-=10;
console.log(a);
a*=2;
console.log(a);
a%=2;
console.log(a);

//Logical Operator(&&,||,!)
a=true;
b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);

//for loop
//for(initialization;condition;increment/decrement){
    //statement
//}
for(let i=1;i<10;i++){
    console.log(i);
}
//While loop 
var a=0;
while(a!==5){
    a++;
    console.log(a)
}
console.log(a);

//do...while
//do{
    //statement
//}while(condition);

a=0;
do{
    console.log(a);
}while(a===1);

//conditional statement
a=5;
if(a%2===0){

    console.log("Even Number");

}
else{
    console.log("odd");
}

//ELSE..IF
var mark=90;
if(mark>=90){
    console.log("o");
}
else if(mark>=70){
    console.log("A");
}
else{
    console.log("B");
}

//switch
day=1;
switch(day){
    case 1:
        {
            console.log("Monday");
        } 
    case 2:
    {
        console.log("Tuesday");
    }    
    case 3:
        {
            console.log("Wednesday");
        }
        case 4:
            {
                console.log("Thursday");
            }
            case 5:
                {
                console.log("Friday");
                }
                case 6:
                    {
                        console.log("Saturday");
                    }
                    case 7:
                        {
                            console.log("Sunday");
                        }
}
mark=90
var result=(mark>90)?"O":(mark>=70)?"A":(mark>=50)?"B":"Fail";
console.log(result);

//function without parameter 

function add(){
    console.log(10+20)
}
add();

//function with parameter
 function add(a,b){
    console.log(a+b);
 }
 add(10,20);

var addParam=(a,b)=>{
    console.log(a+b);
} 
addParam(10,20);

console.log(typeof addParam);


const a=[10,20,30];
const b=[...a,40,50];
console.log(a);
console.log(b);

const [name,age,marks]=["vibbhu",10,100];
console.log(name);
console.log(age);
console.log(marks);

//for..in(index values)
var arr=[1,2,3,4,5];
for(let i in arr){
    console.log(i)
}

//for..of(values)
var arr=[1,2,3,4,5];
for(let i of arr){
    console.log(i)
}
//forEach
arr.forEach((value,index)=>{
    console.log(value,index)
} )            


class Person{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
    display(){
        console.log(this.name,this.age);
    }
}
var p1=new Person("Vikram",22);
p1.display(); 

var a=10;
if(true){
    console.log(a);
}
console.log(a);
const a=10;//Global scope
if(true){
    var a=10;//let block scope
    
    console.log(a);
}
console.log(a,b);
//Hoisting
var a; //By Js 
console.log(a);
var a=10;

add()
function add(){
    console.log(10+20);
}

//for..in(object)

var obj={
    name:"vibbhu",
    age:24,
    marks:90
};
for(let i in obj ){
    console.log(i,obj[i])
}

//CallBack Function

var demo=()=>{
    console.log("Hello World!")
}

var main=(callback)=>{
    console.log("Main Called");
    callback()
}
main(demo);
main(()=>{
    console.log("Hello World!")
})

add(()=>{
    console.log("Hello World!")
})
 
var demo=()=>{
    setTimeout(()=>{
        console.log("Processing...")
    },2000)
}
demo();*/

//Template Literals
//var age=24;
//var name="vibbhu";
//var str='vibbhu age is ${age}';
//console.log(str);
//console.log('${name} age is ${age}')
//console.log(name+" age is "+age);

//map
/*var arr=[1,2,3,4,5];
 var double=arr.map((num)=>num*2);
console.log(double);

//Filter
var even=arr.filter(num=>num%2===0);
console.log(even);

//Reducer
var total=arr.reduce((sum,num)=>(sum+num),0);
console.log(total);

var evenCount=arr.map(num=>num**3).filter(num=>num%2===0).reduce((sum,num)=>(sum+1),0);
console.log(evenCount);

var student=[
    {name:"Vibbhu",
    marks:90},
    {name:"Rakesh",marks:100},
    {name:"Vishal",marks:80},
    {name:"Anush",marks:70}
]

var studentMark=student.filter(s=>s.marks>88);
console.log(studentMark);

var studentName=student.map(s=>s.name);
console.log(studentName);

//reduce
var totalMarks=student.reduce((sum,s)=>(sum+s.marks),0);
console.log(totalMarks);
var avg=totalMarks/student.length;
console.log(avg);*/

//promise
/*const promise=new Promise((resolve,reject)=>{
    var success=true;
    if(success){
        resolve("Success");
    }
    else{
        reject("failed");
    }

})
promise.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))

//const getData=()=>{
 //   return fetch('https://jsonplaceholder.typicode.com/posts')
//}
//getData().then((res)=>res.json())
//.then((data)=>console.log(data))
//.catch((err)=>console.log(err))*/

//
const getData=async(req,res)=>{
    try{
        var res=await fetch('https://jsonplaceholder.typicode.com/posts');
    var data=await res.json();
    console.log(data);}catch(err){
        console.log(err);
    }
}
getData();
var a=5;
console.log(a)
{
    let a = 15;
}

                     