// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // let value2 = Array.isArray(value);//use Array.isArray method to retunn data type
    // if(value2 === true) {//use conditional statements to check if value is or is not an array
    //     return true;//return true if an array
    // } else {
    //     return false;//return false if not an array
    // }
    
    if(Array.isArray(value) === true) {//use Array.isArray(value) in conditional statement to check if value is or is not an array
        return true;//return true if value is an array
    } else {
        return false;//return false if not an array
    }
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    let value1 = value; //assign function parameter value to local varibale for evaluation
    if (Array.isArray(value1) === true){//use conditional statement to check if th variable type is an array
        return false;
    } else if (value === null){//use conditional statement to check if the variable type is an null
        return false;
    } else if (value1 instanceof Date){//use conditional statement to check if the variable type is an a Date
         return false;
    } else if (value1 === undefined){//use conditional statement to check if the variable type is an a undefined
        return false;
    } else if (value1 instanceof Object === true){//use conditional statement to check if the variable type is an object
        return true;
    } else {
        return false;//return false for all remaining data types that could be inputted 
    }

   
    //(value instanceof Object === true)
    // YOUR CODE ABOVE HERE //
}

// console.log(isObject({}));
// console.log(isObject(null));
// console.log(isObject([]));
// console.log(isObject(new Date()));
// console.log(isObject(undefined));

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    let value1 = value; //assign function parameter value to local varibale for evaluation
    if (Array.isArray(value1) === true){//use conditional statement to check if th variable type is an array
        return true;
    } else if (value1 === null){//use conditional statement to check if the variable type is an null
        return false;
    } else if (value1 instanceof Date){//use conditional statement to check if the variable type is an a Date
         return false;
    } else if (value1 === undefined){//use conditional statement to check if the variable type is an a undefined
        return false;
    } else if (value1 instanceof Object === true){//use conditional statement to check if the variable type is an object
        return true;
    } else {
        return false;//return false for all remaining data types that could be inputted 
    }

    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string">
 *    - "array" >
 *    - "object" >
 *    - "undefined" >
 *    - "number" >
 *    - "boolean" >
 *    - "null" > 
 *    - "function">
 *    - "date" > 
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    let value1 = value; //assign function parameter value to local varibale for evaluation
    if (Array.isArray(value1) === true){//use conditional statement to check if th variable type is an array
        return "array";
    } else if (typeof value1 === "function"){
        return "function";
    } else if (value1 === null){//use conditional statement to check if the variable type is an null
        return "null";
    } else if (value1 instanceof Date){//use conditional statement to check if the variable type is an a Date
         return "date";
    } else if ( value1 === undefined){//use conditional statement to check if the variable type is an a undefined
        return 'undefined';
    } else if (value1 instanceof Object === true){//use conditional statement to check if the variable type is an object
        return "object";
    } else if (typeof value1 === "number"){
        return "number";
    } else if (typeof value1 === "boolean"){
        return "boolean";
    } else if (typeof value1 === "string"){
        return "string";
    } 
    
    
    // YOUR CODE ABOVE HERE //
}

let b = function(){
    console.log('hello world1')
}

// console.log(typeOf([]));
// console.log(typeOf(null));
// console.log(typeOf(new Date()));
// console.log(typeOf(new Object()));
// console.log(typeOf(undefined));
// console.log(typeOf(2));
// console.log(typeOf(true));
// console.log(typeOf('john'));
b;





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
