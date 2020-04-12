
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

//This function named triangles will take in 1 parameter to represent any number and return a trianlge created from "#" charters
function triangles(number) {
//I will declare a local variable inside the function body "triangle" and assing the value of an empty string 
    var triangle = "";
//Next I will create a for loop to repeatly log the "#" character 'number' amount of times
    for (var i = 0; i < number; i++)
//The final step of the function is to write the log statement which the expression of the traingle value + an additional '#' character for each iteration of the for loop
    console.log(triangle = triangle + '#');
  }
  

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the 
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers 
that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for 
numbers divisible by only one of those).
*/

//The first step declare function named fizzBuzz that has 2 parameters that represent the start and end arguments to be passed 
function fizzBuzz(start, end) {
//The second step is the declare a local variable to represet our starting number. using var declare variable i and assign it the value of parameter start
  var i = start;
//Next using a while loop, set the stop condition to indcate the end of the while loop
  while (i <= end){
//Inside the while loop the use of the control flow statements will allow to for proper number or string to be logged using the % operator or remainder of
    if (i % 15 === 0){console.log("fizzbuzz")}//if the current number is divisable by both 3 & 5 print fizzbuzz 
    else if (i % 5 === 0){console.log("buzz")}//if the current number if divisable by 5 print buzz
    else if (i % 3 === 0){console.log("fizz")}//if the current number if divisable by 3 print fizz
    else {console.log(i)}//if the current number if does not fit any of those contions just print the number
    i++;//after each iteration of the loop increase the value binded to i variable 
  }
}



////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines. At each position of the 
grid there is either a space or a "#" character. The characters 
should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

*/

//This function has one parameter that will represent any number argument passed into it 
function drawChessboard(number) {
//declare local variable to hold board symbols that will be printed 
 var board = "";
//declare a for loop to perform a action "number" number of times add "\n" to the end of each line
for (var i = 0; i < number; i++){
//declare a second for loop to perform an action "number" number of times, + " " or "#" symbol in order to each line  
  for (var e = 0; e < number; e++){
// use control flow statements to determien which charater should be added to board value    
    if ((e + i) % 2 === 0){//if the remainder of the value of "e" is eapul to 0 or an even number a space will be added board
      board += " ";
    } else { //if the remainder of the value of "e" is eapul not to 0 or an odd number a "#" will be added to board
      board += "#";
    }
  } board += "\n"; //at the end of each of the outer for loops add line break to the string board creating a new line in the  chessboard
} console.log(board); //log the final value of the string board to the console for you to see
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
