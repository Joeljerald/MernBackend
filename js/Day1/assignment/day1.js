//Task 1: Variable Declaration & Reassignment
//var can be redeclar and reassign
function boths(){
var both=100;
var both=150;
both=200;
console.log("Var: ",both);
}
boths();

//let can be re-assign and re-declar is not allow
function Reassignment(){
    let one ="Joel";
    one="Jerald"
    //let name = "David"; Cannot redeclare
    console.log("let: ",one)
}
Reassignment();

//const can't be re-declar and re-assign
function Restricted(){
    const noone="Welcome to javaScript"
    //message = "Hello"; Assignment to constant variable
    //const message = "Hi"; Cannot redeclare
    console.log(noone)
}
Restricted();

//Task 2: Scope Challenge
let globalVar = "SLA"; //Global Scope-it can accessible anywhere

function demo() {
    var functionVar = "Trainer"; //Function Scope- it can be accessible only inside a function 
    {
        let blockVar ="Student";//Block Scope-it can be accessible inside a block{}
        console.log(globalVar);   //access
        console.log(functionVar); //access
        console.log(blockVar);    //access
    }

    console.log(globalVar);   //Access
    console.log(functionVar); //Accessible
    //console.log(blockVar); //Error

}
demo();

console.log(globalVar); //Access
// console.log(functionVar); //Error
// console.log(blockVar);    //Error

//Task 3: Lexical Scope
const grandParent = () => {
    let grandParentName = "Grand Parent";
    const parent = () => {
        let parentName = "Parent";
        const child = () => {
            let childName = "Child";
            console.log(grandParentName);
            console.log(parentName);
            console.log(childName);
        };
        child();
    };
    parent();
};
grandParent();

//Explain: child can acces both the outer function because js allows ineer function to use variable from their outer scope.

//Task 4: Scope Chain Search
const company = "SLA";
const level1 = () => {
    const level2 = () => {
        const level3 = () => {
            console.log(company);
        };
        level3();
    };
    level2();
};
level1();
//Explain :the level3 function tries to access  company js first search in level3 ..if it is not found it move outer scope level2,level1 and finally the global scope..these step by step search thourgh outer sscope is scope chain

//Task 5: Hoisting Prediction
console.log(a);
var a = 100;
// Output : undefined
//Memory Creation Phase : memory is allocated for variables..variable declar with var is intially undefined
//Execution Phase : code run line by line..the print statement execute a..a exists but contain undefined,so it print undefined..later assign the value..


//Task 6: TDZ Investigation

console.log(username);

let username = "Sudhan";
//Explain : let variables are hoisted but remain in the TDZ until their declaration is executed.. The TDZ starts at the beginning of the scope and ends at the declaration line...while accessing the variable this shows the ReferenceError

//Task 8: Type Conversion Challenge

console.log("10" + 5);
//Output:105
//explain : + is used for string concatenation when one value is a string so js converts 5 to  string and join
console.log("10" - 5);
//output : 5
//explain : - is a mathematical operation so js convert "10" to number 10
console.log(true + 1);
//Output: 2
//explain : in js true=1 and false=0 so it will be like 1+1=2
console.log(false + 10);
//Output : 10
//explain : in js true=1 and false=0 so it will be like 0+10=10
console.log(Number("100"));
//Output : 100
//explain: Number() explicity  converts a string into a number
console.log(String(500));
//Output:500
//explain:String() explicitly converts a number into a string.

//Task 9: Primitive vs Non-Primitive

// Primitive Data Types - it store a single value directly.

let name = "Joel";                 // String
let age = 22;                      // Number
let isStudent = true;              // Boolean
let SLA;                          // Undefined
let grade = null;                 // Null
let bigNumber = 12345678901234567890n; // BigInt
let id = Symbol("id");             // Symbol

// Non-Primitive Data Types - it store multiple values

let person = {                     // Object
    name: "Joel",
    age: 22
};

let colors = ["red", "blue"];      // Array

function greet() {                 // Function
    console.log("Hello");
}

//Task 10: Complete Interview Scenario

// Hoisting Example
console.log(a); // undefined

var a = 100; // var

// Global Scope
const institude = "SLA"; // const

function level1() {

    // Function Scope
    let trainer = "Mukund"; // let

    console.log("institude:", institude);
    console.log("Trainer:", trainer);

    // Block Scope
    {
        const course = "MERN";
        console.log("Course:", course);
    }

    // Lexical Scope
    const level2 = () => {

        const level3 = () => {
            console.log("Lexical Scope:");
            console.log(company);
            console.log(trainer);
        };

        level3();
    };

    level2();

    // Type Conversion
    console.log("10" + 5);
    console.log("10" - 5);
    console.log(Number("100"));
    console.log(String(500));
}

// Function Call
level1();

//Memory Creation Phase-allocate memory Before execution starts
//Execution Phase- executes the code line by line and assigns values to variables
//Scope Creation-creates Global, Function, and Block scopes to control variable accessibility
//Bonus Interview Task 
var a = 10;

const outer = () => {

  let b = 20;

  const inner = () => {

    console.log(a);

    console.log(b);

    console.log("5" + 2);

  };

  inner();

};

outer();
//Output 1 : 10
//Output 2 : 20
//Output 3 : 52