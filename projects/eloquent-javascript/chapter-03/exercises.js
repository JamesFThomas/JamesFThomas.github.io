////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Write a function min that takes two arguments and returns their minimum.
*/
function min(num1,num2) {//begin function by adding in two parameters as place holders
  return Math.min(num1,num2); // return the minimuum of the two parameters num1 & num2 using the Math.min() method
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd 
by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive 
whole number is even or odd:
*Zero is even.
*One is odd.
*For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?*/

function isEven(positiveNumber) { //begin by adding a parameter that will represent the whole number input
  if(positiveNumber % 2 === 0){// set conditions to using modols operator to test if input parameter "positiveNumber" is even or odd or N-2
    return true;//since there are 3 conditions to check I will use an If/else-if/else control flow chain
  }else if (positiveNumber % 2 === 1){
    return false;
  }else {//originally set finally return to "N-2" then used error message to 
  //determine it wanted another boolean value
    return false;
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. 
The returned value will be a string containing only one character 
(for example, "b"). The first character has position 0, which causes the last 
one to be found at position string.length - 1. In other words, a two-character 
string has length 2,and its characters have positions 0 and 1.

Write a function called countChar that behaves like countBs, except it 
takes a second argument that indicates the character that is to be counted 
(rather than counting only uppercase “B” characters). Rewrite countBs to make 
use of this new function.
*/

function countChars(string, char) {// start by adding start by adding two input functions "string" and "char"
  var count = 0; //declare and assing local variable to count number of ouccurennce of each character
  for (var i = 0; i <= string.length -1; i++) { //use a for loop to to look through each index of hhe input string
    if (string[i] == char){ //use an if-else contorl flow to to porduce side effect on count variable  
        count += 1; //increase local count variable by 1 if char matches string[i]
    } else {
      count = count;//if the char at string[i] does not match do not change count variable
    }
    
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Bean counting.

Write a function countBs that takes a string as its only argument and returns 
a number that indicates how many uppercase “B” characters there are in the string.
*/

function countBs(stringInput) { // set single input parameter to represent the input string 
   return countChars(stringInput, "B"); //creatte return statement which is a function call to countChar function 
   }                                    // use input string from this function as argument for function call, and set char to B since function is looking for B.

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
