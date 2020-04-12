////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Write a range function that takes two arguments, start and end, 
and returns an array containing:
all the numbers from start up to (and including) end.

As a bonus assignment, modify your range function to take an optional third argument 
that indicates the “step” value used when building the array. If no step is given, 
the elements go up by increments of one, corresponding to the old behavior. 
The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it 
also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/
function range(start, end , step) { //include 3 placeholders to represent input arguments 
  var numbers = []; //declare local varibale and assign to empty array literal 
  if (start < end && step === undefined){ //set control flow with if_else chain to determine how to the range of numbers should be pushed to the numbers array 
      while (start <= end ){//while the start parameter is less than the end parameter push each number into numbers array 
        numbers.push(start);
        start++;//increase the start number by 1 interval until it is equal to end parameter
      }} else if ( start > end && step === undefined){
    while ( start >= end){ //while the start parameter is greater than the end parameter push each number into numbers array 
        numbers.push(start);// use .push method to put start number into numbers array
        start--;// decrease start parameter by 1 until it equals end parameter
    }} else if (start < end && step > 0) {//begins contional control flow if step parameter is present  
      while (start <= end){ //if step is present and a positive number then push start parameter into numbers array 
        numbers.push(start);//use .push array method to put each number in range into numbers array
        start += step;//increase start parameter by step parameter value until equal to end
      }} else if (start > end && step < 0){//if step parameter is present and a negative number push start parameter to number array 
        while(start >= end ){//while start parameter is greater than end parameter
          numbers.push(start);//use .push array method to put numbers into numbers array 
          start -= step; //decrease start parameter value by step interval until even with end parametr.
        }
      }
      return numbers; //return numbers array
    }
      
    
  


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Next, write a sum function that takes an array of numbers and 
returns the sum of these numbers. 
Run the example program and see whether it does indeed return 55.

*/ 
function sum(inputArray) {//start by adding parameter to represent input array of numbers
  var sum = 0; // declare local variable "sum" and assgin a  value of 0 
  
  for (var i = 0; i < inputArray.length; i++){ //use a for loop to look through input array of numbers
    sum += inputArray[i];// as the for loop goes through the array add each number to the sum value
  }
  
  return sum; //return the new change value in the sum variable 
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
The first, reverseArray, takes an array as argument and produces 
a new array that has the same elements in the inverse order.
*/

function reverseArray(inputArray) { // start by adding single parameter to the function
    var backwards = []; //create local variable to hold reversed array elements
    for (var i = inputArray.length-1; i > -1; i--){ //set for loop to look backward through input array
      backwards.push(inputArray[i]);//using push method place inputArray elements in local array literal
    }
    return backwards; //return array of reversed elements 
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
The first, reverseArray, takes an array as argument and produces 
a new array that has the same elements in the inverse order.
*/

function reverseArrayInPlace(inputArray) { // start by creating parameter to represent input array
  for (var i = 0; i<= Math.floor((inputArray.length - 1) / 2); i++){//create for loop to look through array content from the beginning of the input array until the end of the middle of the array
     var first = inputArray[i];//creat a local variable "first" and assign it the the "i" index of the input array 
     inputArray[i] = inputArray[inputArray.length -1 -i];//re-assign the inputArray[i] value to the last element in the inputArray minus the value i whihc will begin at 0 
     inputArray[inputArray.length -1 -i] = first; //finally re-assign that value representing the last value - i to the local variable you created
                                                 //as the for goes through the input array it will reassing the elements of the array in accordance with the above patern, first to last , 
                                                //then second to last to second and so on until it reach the middle of the array and then stops      
  } 
    return inputArray; //return newly effected array
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Objects, as generic blobs of values, can be used to build all sorts of data 
structures. A common data structure is the list (not to be confused with array).
A list is a nested set of objects, with the first object holding a reference to 
the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
The resulting objects form a chain, like this:

A linked list
A nice thing about lists is that they can share parts of their structure. 
For example, if I create two new values {value: 0, rest: list} and 
{value: -1, rest: list} (with list referring to the binding defined earlier), 
they are both independent lists, but they share the structure that makes up 
their last three elements. The original list is also still a valid three-element 
list.

Write a function arrayToList that builds up a list structure like the one shown 
when given [1, 2, 3] as argument. Also write a listToArray function that 
produces an array from a list. Then add a helper function prepend, which takes 
an element and a list and creates a new list that adds the element to the front 
of the input list, and nth, which takes a list and a number and returns the 
element at the given position in the list (with zero referring to the first element) 
or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

function arrayToList(array) {
 //we wanna loop right here 
 //prepend with array value
 let newList = null; //
 for (let i = array.length -1; i > -1; i--){
   newList = prepend(array[i], newList); 
    
 }
 return newList;    
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Also write a listToArray function that produces an array from a list. 
Then add a helper function prepend, which takes an element and a list and creates 
a new list that adds the element to the front of the input list, and nth,
which takes a list and a number and returns the element at the given position in 
the list (with zero referring to the first element) or undefined when there 
is no such element.
*/

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
Create a a helper function prepend, which takes an element and a list and creates 
a new list that adds the element to the front of the input list, and nth,
which takes a list and a number and returns the element at the given position in 
the list (with zero referring to the first element) or undefined when there 
is no such element.
*/


// input the 2 parameters that will be used in this function 'element' & 'list'
//create a new local list varibale to add old list key value piars to at first position
// return new list object with updated value property


function prepend(element, list) {
  var newObject = {};
  newObject.value = element,
  newObject.rest = list;
  return newObject;
}

// function prepend(value, list) { // Declaring a function called prepend and giving it the parameters of value and list
//   return { value, rest: list }; // Should return the property of value and the property of rest is assigned to list list
// }

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
nth, takes a list and a number and returns the element at the given position in 
the list (with zero referring to the first element) or undefined when there 
is no such element.
*/
//traverse deep nested object

//input the 2 parameters that the function will perform an action on "list" "number" 
// if number 
function nth(list, number) {
 console.log(list);
  if (number === 0){// stopping point of our looping thourgh list
    return list.value;
  }
  //number is number of level left to get to nested object
  nth(list.rest, --number);   //this is your loop  
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
The == operator compares objects by identity. But sometimes you’d prefer to c
ompare the values of their actual properties.

- Write a function deepEqual that takes two values and returns true only if they 
  are the same value or are objects with the same properties, where the values 
  of the properties are equal when compared with 
  a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) 
or have their properties compared, you can use the typeof operator. 
If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: 
because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the 
properties of objects to compare them.

*/

//the function is going to take in two values and you must determine what data type they are before you can compare and know how to compare them
    // use typeof operator to compare if values are objects, use === to compare if values are the same and not null
//once you have determined values data types must compare properties of objects and return true if properties match
//the finale step is to compare objects using a recursive call to itself, oooooooooooo


function deepEqual(value1, value2) {//create parameters to represent the 2 input values we will be given to compare
  if (value1 === value2 && value1 !== null && typeof value1 !== 'object'){//this conditional tests values for likeness and that they are not null
        return true;// becuase both vlaues are equal and not null return true.
  } else if (typeof value1 !== 'object' || typeof value2 !== 'object'){//if both values are not objects then return false 
        return false;//return statement for else if conditional 
  } 
// all of this below is about comparing objects  
//if both values are the same type and objects they need to be compared in order to do that I will take values out of objects

    
  var keyN1 = Object.keys(value1); //created arrays of value1 and value2 key names to compare using Object.keys method                                  
  var keyN2 = Object.keys(value2);
    for(let i = 0; i < keyN1.length; i++){//using a for loop to iterate through local arrays to see if there elements match
        if (!keyN2.includes(i) || !deepEqual(keyN1[i],keyN2[i])){//if the elements after being compared in the for loop don't match or the values saved in the objects keyN1 and keyN2 don't match return false.
          return false;//return command for function follwoing conditional block 
        }
      }
      return true; //final return statement 
  } 



////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
