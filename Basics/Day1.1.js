//Hositing -> Hoisting is JavaScript's behavior of processing variable and function declarations before executing the code.

// var a=20;
// function getName(){
//     console.log("Hello Yaswanth");
// }
// getName(); 
// console.log(a);

// this is normal 


// but this somethig is tricky 
// getName();  //output is Hello Yaswanth
// console.log(a); //undefined
// var a=20;
// function getName(){
//     console.log("Hello Yaswanth");
// }

//because when we run code at initially memoery cretaion is happeing that's why we get this 
//after memory creation happens the code executions starts 



//console.log(ans()); // error because ans is not a function it is varaibel
console.log(ans);

let a=10;
let b=20;
var ans=()=>{
    return a+b;
}

console.log(ans());