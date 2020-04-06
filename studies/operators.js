/*
*       OPERATORS
*
* 0.  In Javascript, operators are used to performing specific actions on single or multiple data values to create a result. 
*      Operators perform actions that will compare values, assign values, as well as arithmetic, logical, and conditional operations. 
*
*
*/



    //1. Assignment operators   //
/*
* 0. Assignment operators will assign or link a data type to a previously declared value.   
*
* 1. When written in code the '=' assignment operator will link the value on its right to the variable of 
*    its left essentially placing that value into a newly created container. 
*
*/

let assignMe = 5;     // assignment operators
console.log(assignMe) // prints --> 5

assignMe += 5;         // Subtraction assignment
console.log(assignMe); // prints --> 10 

assignMe -= 2;         // Multiplication assignment
console.log(assignMe); // prints --> 8

assignMe *= 2;          // Division assignment
console.log(assignMe); //  prints --> 16

assignMe /= 2;         // Remainder assignment
console.log(assignMe); // prints --> 8

assignMe %= 2; 
console.log(assignMe); // prints --> 0



    //2. Arithmetic operators   //
/*
 * 0. Arithmetic operators perform mathematical operations between previously declared variables in javascript. 
 *    These opertors take numerical data values and return a single numerical value. 
 *    The basic arithmetic operators are addition, subtraction, multiplication, and division but do include more.
 *
 * 1. Note the addition operators can be used on the string data type as well as the number
 */

let addMe = 1+1;
console.log(addMe); // prints --> 2

let subtractMe = 2-1;
console.log(subtractMe); // prints --> 1

let multipleMe = 3*1;
console.log(multipleMe); // prints --> 3

let divideMe = 16/4;
console.log(divideMe); // prints --> 4

let remainderOf = 12%6;
console.log(remainderOf); // prints --> 0




    //3. Comparison operators   //
/*
* 0. Comparison operators will compare two data types in javascript to see if they are the same value or not. 
*    The comparison operator has two types one being a strict or abstract evaluation of two values. 
*    The abstract or type-converting operator "==" will change the two comparing values to the same type to compare.
*    The strict comparison evaluates to true only if both values are of the type and state. 
*
*
*/

console.log("1" == 1); //abstract comparison 
// prints --> true

console.log(1 === 1); //strict comparison 
// prints --> true

console.log("1" === 1); //strict comparison 
// prints --> false





    //4. Logical operators //
/*
*  0. The logical operators are used to compare values usually of the boolean data type and return a single boolean value.
*     There are three logical operators "&&" the "and", "||" the "or", and the "!" the "not" operators.
*
*
*/

const a = 5;
const b = 1;

console.log(a > 0 && b > 0); // When using the "and" operator both sides of condition must be true 
// expected output: true

console.log(a > 0 || b > 0); // When using the "or" operator only one side of the conditional statement needs to true
// expected output: true



    //5.  Unary operators (!, typeOf, -)   //
/*
* 0.  A unary operation is one that takes place with only one operand or data value. 
*     This basically means an operation is performed on value and not two.
*     These operators are considered to be the simplest type in Javascript.
*
* 1. Note - unary operators include plus/minus, Increment / Decrements, typeof, delete, in, instanceof, and void.
*           Some can be used on all data types while others only on specific types like the plus/minus working on numberic and boolean types.
*/

let exampleUnanry = true;

exampleUnanry = +exampleUnanry; //plus unary operator applied to a boolean value
console.log(exampleUnanry); // prints --> 1

exampleUnanry = -exampleUnanry; //minus unary operator applied to boolean value
console.log(exampleUnanry); // prints --> -1

exampleUnanry++; //incrementor operator adds one to value
console.log(exampleUnanry); // prints --> 0

exampleUnanry--; //deincrementor operator subtracts one from value
console.log(exampleUnanry); // prints --> -1

exampleUnanry = -exampleUnanry; //minus unary operator applied to number negates number
console.log(exampleUnanry); // prints --> 1

exampleUnanry = +exampleUnanry; //plus unary operator converts a negative to positive
console.log(exampleUnanry); // prints --> 1


    
    //6. Ternary operator (a ? b : c)   //
/*
* 0. Ternary or conditional operators assigns a value to previosuly defined variable based upon condition. 
*    The conditional operator is the only one in javascript that utilizes 3 values and returns a single boolen result. 
*    The condtional operator becomes the base for many more advanced aspects of coding in javscript such as fucntion and loops.
* 
* 1. Note the conditional operator is most commonly written in "if" format if(condition){return if true}else{return false}; 
*    but can also be written in shorthand --> condition ? return if true : return if false;
*
*/


let exampleTernary = 10; 
let exampleTernary2 = 5;
let exampleTernaryAge = 21;

if (exampleTernary > exampleTernary2){
    console.log("First value is greater than second");// prints First value is greater than second 
} else {
    console.log("Second value is greater than first");
} 

if (exampleTernary < exampleTernary2){
    console.log("First value is greater than second"); 
} else {
    console.log("Second value is greater than first");// prints Second value is greater than first
} 


let isLegalToDrink = (exampleTernaryAge >= 21) ? "Yes" : "No";
console.log(isLegalToDrink); // "Yes"






