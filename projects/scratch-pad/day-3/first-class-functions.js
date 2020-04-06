// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
//create conditional statements to test if base parameter is a string or number     
//if base is a "string" - return function using localCompare() to evaluate input vs base
    // functions need to return boolean value 
//if base is a "number" - return function using comparison operators to evaluate input vs base 
//if base is !"string" && !"number" return error message 
    
    if (typeof base === "string"){
        return function testString(input){
            if(base.localeCompare(input) === -1){return true;}
            else if (base.localeCompare(input)=== 1){return false;}
        };
    } else if (typeof base === 'number'){
        return function testNumber(input){
            if (base > input){return false;}
            else if(base < input){return true;}
        };
    } else {
        console.log('Error: Enter correct data type / "string" or a "number"');
    }
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 //create conditional statements to test if base parameter is a string or number     
//if base is a "string" - return function using localCompare() to evaluate input vs base
    // functions need to return boolean value 
//if base is a "number" - return function using comparison operators to evaluate input vs base 
//if base is !"string" && !"number" return error message 
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    if (typeof base === "string"){
        return function testString(input){
            if(base.localeCompare(input) === -1){return false;}
            else if (base.localeCompare(input)=== 1){return true;}
        };
    } else if (typeof base === 'number'){
        return function testNumber(input){
            if (base > input){return true;}
            else if(base < input){return false;}
        };
    } else {
        console.log('Error: Enter correct data type / "string" or a "number"');
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
//use charAt() string method to test if the input string 0 indexed element === the startswith base string
//use toLowerCase() method to ensure both inputs are in simiilar case to compare
    return function(string){
        let startsWith2 = startsWith.toLocaleLowerCase();
        let string2 = string.toLocaleLowerCase(); 
        if (startsWith2 === string2.charAt(0)){return true;}
        else {return false;}
    };

    
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
//create anonymous function that checks if 
//create a anonymous function that compares an input character with input string
//set input char to new variable and change to lower case with toLowerCase() method
//set input string to new variable and change whole string to lower case toLowerCase()
//compare lower cased intial variable to last element in input string using bracket notation
//return true if variable and last element match, return false if the don't
     return function(string){
        let endsWith2 = endsWith.toLocaleLowerCase();
        let string2 = string.toLocaleLowerCase(); 
        if (endsWith2 === string2[string2.length-1]){return true;}
        else {return false;}
    };
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
//create a new empty array for modified strings to be pushed to
//creat a for loop to iterate over the strings array
//intilaize new variable inside for loop and assing value of string array elements modified by modify parameter
//push the modifed strings to the previously created empty array
//return the new array populated with modified strings 
        
        let array = [];
        
        for (let s = 0;s < strings.length; s++){
           let newString = modify(strings[s]); 
           array.push(newString);
         } 
        return array;
        

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
 //create a variable that represents the length of the original strings array
 //create a new empty array literal to hold string that pass test
 //create a loop to iterate over all elements in strings array
 //compare array ellements in loop to test input for testing
 //if elements pass test push to new empty array leteral
 //compare length or original array to new array to see if all strings passed test
 //return boolean value for true if all strings passed and false if they didn't
   
   let passedTest = [];

    
    for(let i = 0; i < strings.length; i++ ){
        if (test(strings[i]) === true)
            { passedTest.push(strings[i]);} 
    }
    
    let listLength = strings.length;    
    let passedLength = passedTest.length;

        if (listLength === passedLength){return true;}
        else {return false;}
    
        
    
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}

// const startsWithJ = createStartsWithFilter('J');
// console.log(startsWithJ('James'))