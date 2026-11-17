//OPERATORS 


//ARITHEMETIC OPERATORS
//Assignment Operators
//Comparison Operators
//Logical Operators
//Ternary Operator (? :)
//Bitwise Operators

//TYPE OPERATORS

//1. typeof -> Returns the data type of a value.
let a=20;
let name="Yaswanth";
const pi=3.14;

console.log(typeof a);
console.log(typeof name);
console.log(typeof pi);

//2. instanceof  -> Checks whether an object belongs to a particular class or constructor.
let arr=[1,2,3,4,5]

console.log(arr instanceof Array);
console.log(arr instanceof Object);

//3. Nullish Coalescing Operator (??) -> Returns the right-hand value only when the left-hand value is null or undefined.

let userName=null;
let result=userName ?? "Guest";

console.log(result);

let age=0;
let ans=age ?? "18";

console.log(ans);

//Optional Chaining Operator (?.)  -> It helps access object properties safely without causing an error when an intermediate property is null or undefined.


let student = {
    sname: "Yaswanth",
    sage: 22,
    saddress: {
        city: "Nellore",
        state: "Andhra Pradesh"
    }
};

console.log(student.saddress);
console.log(student.saddress.city);
console.log(student.saddress.country);
console.log(student.country.state); // error because student.country return undefined insid that we are tryting to find state
console.log(student.country?.state); // returns undefined