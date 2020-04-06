// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
//create a empty array to house number range from function parameters 
//create second empty array to print reversed range if conditions met.    
//create if statement to check if start parameter is less than end parameter
//create a for loop to push number in range to new array
//use .push() method to add number range to new array
//return the appropriate according to parameter conditions 
    let numberRange = [];
    let reversedNum = numberRange.reverse(); 
    if(start < end){
        for (var i = start; i <= end; i++){
            numberRange.push(i);
        } return numberRange;
         
    } else if (start > end) {
        for (var e = start; e >= end; e--){
            reversedNum.push(e);
        }   return reversedNum;
    }  
    
    
    // YOUR CODE GOES ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}