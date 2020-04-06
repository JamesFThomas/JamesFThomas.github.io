// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    let number = 1;//intialize block variable and assign value of 1
    while (number < 101){//set a while loop and its stopping condition 
        if (number % 15 === 0){//use conditional statement to check mutiples of "number" variable
            console.log("FizzBuzz");//if divisable by 15 (3&5) print message to console
        } else if (number % 3 === 0){
            console.log("Fizz");//if divisable by 3 print message to console
        } else if (number % 5 === 0){
            console.log("Buzz");//if divisable by 5 print message to console
        } else {
            console.log(number);//if not divisable by 3,5,or 3&5 just print number
        }
        number++;//increment variable by until it reaches stopping condition
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}