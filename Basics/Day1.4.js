//STRING & TEMPLATE LITERALS

let name="Yaswanth";
let sname='Gutha';
let ssname=`Yash`;

console.log(ssname);
console.log(typeof ssname);


//STRINGS

let sName = "Yaswanth";
let course = "JavaScript";
let result = "My name is " + sName + " and I am learning " + course;

console.log(result);

// This is called STRING CONANCATTAION

let message = "Hello Yaswanth\n" +
              "Welcome to JavaScript\n" +
              "Keep Learning";

console.log(message);


//TEMPLEATE LITERALS
//They allow you to insert variables and expressions directly inside a string.

let fname="Gutha";
let lname="Yaswanth";

let res=`Welcome ${fname} and ${lname} to Js`;
console.log(res);


let messages = `Hello Yaswanth
Welcome to JavaScript
Keep Learning`;

console.log(messages);