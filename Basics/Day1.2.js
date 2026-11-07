//VARIABLES
//must be in camel case 


//DATA TYPES
//1. typeof -> typeof is an operator used to identify the type of a value.

let age=20;
console.log(typeof age);


//PRIMITIVE DATA TYPES  -> Single Values
//1. Number -> floating point numbers by default
//2. String
//3. Boolean
//4. Undefined  -> Undefined means a variable has been declared but has not been assigned a value.
//5. Null  -> Null represents an intentional absence of a value.
//6. BigInt -> numbers end with n ex: 12345678986445n
//7. Symbol


let a=null;
let b;
console.log(a); //OUTPUT IS Object 
console.log(b); //OUTPUT is Undefined

let c=12345678909876n;
console.log(typeof c); //bigint

//NON-PRIMITIVE DATA TYPES  -> Objects and Structures
//1. Object    -> An object stores data in key-value pairs.
//2. Array
//3. Function
//4. Set/Map
//5. Date


let studentInfo={
    name:"Yaswanth",
    age:22,
    city:"Nellore",
    course:"B.Tech",
    cgpa:7.7,
    isPlaced:true
};
console.log(studentInfo.name);
console.log(studentInfo.age);