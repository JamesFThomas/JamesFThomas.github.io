/*
*       STRING MANIPULATION
*
* 0.  In Javascript, the string data represents a group of textual characters. 
*     These characters or elements in the string is represented by a number value called an index beginning at zero.
*     In javascript the string data type is an object but immutable or unchangeable, but because it is an object it has built-in properties and methods. 
*     It is these built-in methods && properties that allow us to work with and changes copies of the original string for various coding purposes.
*
*/



    //1. String Manipulation with operators //
/* 
*   0.  String manipulation with operators or string concatenation uses the addition arithmetic operator or the addition assignment operator.
*       String concatenation is the joining of two possibly more string data types or variables into one new string value. 
*
*   1. We can use the addition arithmetic "+" operator as well as the "+=" operator to join two string variables into one new string value.
*
*   note --> when joining string values into a sentence if space is desired you must add into the value or manually as another empty string value.
*/


let exampleString = "Put us ";
let exampleString2 = "together please!";

let exampleConcatString = exampleString + exampleString2; // space placed into string values
console.log(exampleConcatString);//prints --> Put us together please!

let exampleString3 = "He put that -->";
let exampleString4 = "<-- space in manually!";
console.log(exampleString3 + " " + exampleString4);// prints He put that --> <-- space in manually!

let exampleString5 = "I like that you used ";
let exampleString6 = "the addition assignment operator to put us together";
    
 console.log(exampleString5 += exampleString6)// prints "I like that you used the addition assignment operator to put us together";



    //2. String Manipulation with methods //
/* 
*   0. In javascript, objects have built-in methods that allow us to manipulate the original string and return a new value.
*      Written out this is done by adding a "." to the end of a variables name then the appropriate method name and a set of parenthesis "()".
*
*   Note --> There are numerous string methods that can be applied by each individual programmer but some of the most used in my experience
*            are: .splice(), .join(), .charAt(), .indexOf(), .split(), .concat(), .endsWith(), .equals(),  toLowerCase() and toUpperCase().
*            Bracket notation is another built-in method/property that allows for string manipulation
*
*/


let exampleString7 = "I am a string";

console.log(exampleString5.length); // prints --> 13, this is not a m,ethod but rather a property 

let exampleString8 = " and so am I."

let exampleString9 = "I USED TO BE ALL UPPERCASE"

console. log(exampleString7.concat(exampleString8)); //prints --> I am a string and so am I.

console.log(exampleConcatString.toUpperCase());// prints --> PUT US TOGETHER PLEASE!

console.log(exampleString5.endsWith("a"));//prints false

console.log(exampleString7.endsWith("g"));//prints true

console.log(exampleString7[0]);//prints --> I 

console.log(exampleString7.charAt(0)); //prints --> I as well because it returns the characters at index 0 of the string 

console.log(exampleString9.toLowerCase()); //prpints "i used to be al uppercase" 