// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
Use the reduce method in combination with the concat method to “flatten” 
an array of arrays into a single array that has all the elements of the 
original arrays.
*/

//we have a function that is going to take a single parameter "array" which is an array of array's
    // we must use .reduce() && concat() to "flatten" the array into a single one deminsional array  
          //Flatten - to turn array into a single level
// start by declaring new local variable and assignning it to the value of performing the reduce fucntion on each of the nested arrays in the input array
// the accumulator value in this function is going to be the first nested array of the input array
//the currentvalue is the second nested array of the input value 
//this function then performs concanation on  the accumaltor value after each nested array is reduced turning the final total value into 1 array. 
// reduce will repeat the concatnation of each of the nested arrays into the empty array literal flattening all nested arrays into one new array

function flatten(array) {
    let newArray = array.reduce((accumulator,currentvalue) => accumulator.concat(currentvalue),[]) 
    return newArray;
}




// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/*
Your own loop
Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. 
Each iteration, it first runs the test function on the current loop value and stops 
if that returns false. Then it calls the body function, giving it the current value. 
Finally, it calls the update function to create a new value and starts from the beginning.

When defining the function, you can use a regular loop to do the actual looping.
// Your code here.
loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

*/

// This function with have 4 intial parameters "value", "test","update" && "body"
      //I decided to use the while loop instead of the shown format in the book to challenege my understanding of what was happening and how I can produced the desired effect.
      //plis while loops are the first I learned way back so I like them more than the rest
//The first step is to establish the base condition which stop the loop from incrementing 
      //this is done in the intial while statement set to => while (test(value)) meaning while the result is true
//The second step was to place the given body function at the top of the control flow and give it the input value 
      // => body(vale)
//The third step - which was the hardest for me to get - was to call the update function to create the new variable. 
      //reassinging the variable to the value of the function call with the value as its argument was the key to creating the new value
      //reassingment also acted as the decrementor for the loop, I figured this out after a produced an infinite loop. 
//The final step was to return that variable in the return statement outside of the loop. 


function loop(value, test, update, body) {  //input parameters 
  while (test(value)){ // base condition with, if this goes false loop stops
    body(value);// invokcation of the body function 
    value = update(value);//re-assignment of the value parameter to the result of invoking the update function on the input value 
    }
  return value;//retuning the newly created "value" 
}




// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
typedarray.some(callback[, thisArg])
The some method executes the callback function once for each element present in 
the typed array until it finds one where callback returns a true value. 
If such an element is found, some immediately returns true. 
Otherwise, some returns false.
--------------------------------------------------------------------------------
Analogous to the some method, arrays also have an every method. This one returns 
true when the given function returns true for every element in the array. 
In a way, some is a version of the || operator that acts on arrays, and every 
is like the && operator.

Implement every as a function that takes an array and a predicate function 
as parameters. Write two versions, one using a loop and one using the some method.
*/

//first we need to set the initial parameters to represent the inputarray "array" and predictive function "func"
//Nest since we are using a while loop we need to declare and assign a count variable with a value of 0
      //this will allow us to loop through the input array from front to backindex 0 to array,length-1
//after our variable we declare the while loop and set the stopping conditions 
      //the loop will stop when the value at count is equal to the index of the last element in the input array "array.length -1 "
//next the function will loop through array elements invoking the input function "func" on each array element
      //the loop will "break" or stop if any of the input fucntion calls return false show in if statement 
//if all array elements pass input test function the count variable will imcrement and those move onto and end of array eventaully returning true

function every(array, func) {
  let count = 0;
  while (count < array.length ){
    if (func(array[count]) === false){
      return false;
    } else {
      count++;
    }
  }
  return true;
}




// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*

Write a function that computes the dominant writing direction in a string of text. 
Remember that each script object has a direction property that can be 
"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

The dominant direction is the direction of a majority of the characters that 
have a script associated with them. The characterScript and countBy functions 
defined earlier in the chapter are probably useful here.

*/

//set the function to accept an input string to be matched to a writting direction inside an acript object
//use characterScript and countBy


function dominantDirection(texts) {
  //console.log(textScripts(texts));
  let countArr = countBy(texts, function(text){
    let characterInfo = characterScript(text.charCodeAt())
    //console.log(text);
    //console.log(characterInfo);
      if(characterInfo){
        return characterInfo.direction;
      }
  });
  //console.log(countArr);
    countArr.sort(function(a, b){
      return  b.count - a.count;
    })
    
    return countArr[0].name;
};

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
