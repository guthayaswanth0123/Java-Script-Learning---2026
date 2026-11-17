//TYPE CONVERSION & Type Coercion

//Type Conversion means manually changing one data type into another data type.
//String → Number
// Number → String
// String → Boolean
// Number → Boolean

let price=500;
let name="Yash";

let cPrice=String(price);
console.log(typeof price);
console.log(typeof cPrice);

let cname=Boolean(name);
console.log(typeof name);
console.log(typeof cname);

//PARSEINT

let x="10.35";
let res=Number(x);

console.log(res);

let value="10.34";
let ans=parseInt(value);

console.log(ans);



//Type Coercion means JavaScript automatically converts one data type into another during an operation.

let a="10";
let b=20;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);


//Understanding Boolean Conversion

//JavaScript has two categories of values:
// 1. Truthy values
// 2. Falsy values
// When JavaScript converts a value into Boolean, it checks whether the value is truthy or falsy.
// Value	Boolean result
// false	    false
// 0	        false
// -0	        false
// ""	        false
// null	        false
// undefined    false
// NaN	        false

//remaining all are truthy 
