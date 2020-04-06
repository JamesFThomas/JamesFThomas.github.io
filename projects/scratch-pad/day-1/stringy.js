// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
    let vstring = string.length; // declared and intialized a new variable using JS string method on input parameter 
    return vstring; //return new locale variable


    // YOUR CODE ABOVE HERE ///
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
        let lilstring = string.toLowerCase();// declared and intialized a new variable using JS string method on input parameter 
        return lilstring; //return new locale variable


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
        let bigstring = string.toUpperCase();// declared and intialized a new variable using JS string method on input parameter 
        return bigstring; //return new locale variable  


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
//initializ new vairable and assign it the value of input string once .split() .join() and .toLowerCase() methods applied to input parameter
    let s = string.split(' ').join('-').toLowerCase();
    return s;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
    let fLetter = string.charAt(0);//intilize local variable to the first element of string parameter
    let stringCheck = fLetter.toLowerCase();//intialize a second local variable to lowercased version of the first variable
    let charCheck = char.toLowerCase();//set a third local variable to the lowercased version of the function "char" parameter
    
    if (stringCheck === charCheck){//using a if-else statement compare the 2 lowercase variables to see if they match
        return true;
    } else {
        return false;
    }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    let lastLetter = string.charAt(string.length-1);//intilize local variable tolast element of string parameter
    let checkString = lastLetter.toLowerCase();//intialize a second local variable to lowercased version of the first variable 
    let checkChar = char.toLowerCase();//set a third local variable to the lowercased version of the function "char" parameter
    if (checkString === checkChar){//using a if-else statement compare the 2 lowercase variables to see if they match
        return true;
    } else {
        return false;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    let stringThree = stringOne + stringTwo;//intialize local variable and assign it the value of both function parameters concatnated with  addition operator 
    return stringThree;//return local variable and new concatnated string 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
//use .join() method on local variable args to return new string concatenated of function parameters 
     return args.join("");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    let a = stringOne.length;//intialize new variable and assign it to value of the first function parameter length property
    let b = stringTwo.length;//intialize new variable and assign it to value of the second function parameter length property 
    if (a > b){ //use conditional statement to compare the longer of the two strings 
        return stringOne;
    } else {
        return stringTwo;
    }


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//intialize and assign block variable "number" to the comparison of the Function parameters using localCompare() method
//use conditional if/else-if/else statement to check value of block variable 
//return value of block variable according to alphabetical order 
        let number = stringOne.localeCompare(stringTwo);
          if (number === -1){
              return 1;
          } else if (number === 1){
              return -1;
          } else {
              return 0;
          }
        } 

        // gonna use localeCompare() method 

    // YOUR CODE ABOVE HERE //



/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

// assign function parameters to new local variable "number"
// use lcoalCompare() method to compare function paraemeters 
// return the value of that comparison assinged to "number" value
        let number = stringOne.localeCompare(stringTwo);
        return number;



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
