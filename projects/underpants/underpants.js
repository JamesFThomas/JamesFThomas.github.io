// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//Create a fucntion names identity that takes a a single parameter that can be any value
//Identity will return the value unchanged 
_.identity = function(value){ 
    return value;
}

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//create a fucntion that takes a sigle parameter that can represents any value 
//the fucntion then performs multiple evaluations in order to obtain the data type of the input value
//the fucntion will use the uniary operator typeof to return the datatype of the input value as a string value
//because the typeof operator gives identitcal resposnes for multiple data types we must change the evaulation method for the following data types:
            // arrays, null
//return value data type as a string value


_.typeOf = function(value){
    if (typeof value === 'string'){
        return "string";
    } else if (typeof value === 'number'){
        return 'number';
    } else if (typeof value === 'boolean') {
        return 'boolean';
    } else if (typeof value === 'undefined') {
        return 'undefined';
    } else if (typeof value === 'function'){
        return 'function';
    } else if (value === null){
        return 'null';
    } else if (Array.isArray(value)){
        return 'array';
    } else if (typeof value === 'object') {
        return 'object';
    } 
};



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//create a function that takes two initial parameters "array" && "number"
    //--this function will return an empty array literal if "array" parm is not an array
    //--this fucntion will return the first element of the array if 'number' is not given or Nan
    //other wise this function will return the first "number" items of array input meaning all the itmes in the indexes upto "number"
//this fucntion will have 2 edge cases dealing with:
    // set condition for if "number" parm is negative
    // set second condition to handle when "number" is greater than array.length

_.first = function(array,number){
    if (!Array.isArray(array)){
        return [];
    } 
    else if (number === undefined || typeof number !== 'number'){
        return array[0];
    }
    else if (number < 0) {
        return [];
    }
    else if (number > array.length){
        return array;
    }
    else {
        array.splice(number, array.length-1);    
        return array;
    }
};



/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// this array will take 2 input parms 'array' && 'number'
// if array is not array return empty [];
// if number is undefined or Nan return array[array.length-1]
//if number is anumber and array is present return last elemnt in array aka last function
//is number < 0, return empty []
//if number is greater than array length return whole array

_.last = function(array,number){
    if (!Array.isArray(array)){
        return [];
    } 
    else if (number === undefined || typeof number !== 'number'){
        return array[array.length-1];
    }
    else if (number < 0) {
        return [];
    }
    else if (number > array.length){
        return array;
    }
    else if (number) {
         return array.slice(array.length-number, array.length);    
    }
};



/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


//this function take two intial params "array" && "value"
//this array return the index of the first occureance of the "value" parm
//return -1 if "value" parm is not in "array" parm
            // can not use index of //
//IF array has multiple occurenaces of value =>
//If value is not in array =>


_.indexOf = function(array, value){
    for (let i =0; i < array.length;i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//function takes 2 parms array & value
//returns
        //true if array contains value
        //return false other wise
//edges 
        //if there is no value
        // ===? no type coersion 
        

_.contains = function(array, value){
    return array.includes(value)? true:false;
};




/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//fucntion take 2 parms "list" && "func" 
//if list is array call func for each element of list with parms element, element index in list
//if list is an object call func for each 


_.each = function(list, func){
    if (Array.isArray(list)){
        for (let i =0; i < list.length;i++){
            func(list[i], i, list);    
            }
    } 
    else if (typeof list === 'object'){
        for (let key in list){
            func(list[key], key, list)
        }
    }
    
}


//_____________________________ stop here today _________________________________//




/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//this function takes 1 parameter Array which is an array
//create a new array to push elements to
//use a for loop to iterate through input array and input each value into indexOf function
//use indeOf and empty array literal to determine if newArray has duplicate of input array value
        //if the old array value is not present in newArray "-1" push that value into new array
//return the new array without duplicates 
    

_. unique = function(array){
   let newArray = [];
   
   for (let i = 0; i < array.length; i++){
        _.indexOf(array,array[i])
        if (_.indexOf(newArray,array[i]) === -1){
               newArray.push(array[i])
           }
        } 
   return newArray;
}




/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//This fucntion will have two parameters "Array" and "Func"
//Creat a empty array literal inside fucntion for values that return true 
//This function will loop through the input array and pass all values to "function"
//If func result is true push to local array

 _.filter = function(array, func){
    let localArray = [];
    for (let i = 0; i < array.length; i++){
        func(array[i], i, array);
        if(func(array[i],i,array)){
            localArray.push(array[i]);
        }
     }
    return localArray;
 }



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//This function will take two parameters 'array' and "func"
//we need to declare a local empty array literal
//it will call the input function on each element of the given array 
//if the func call produces false push array element to empty array
//return inside array 

_.reject = function(array, func){
    let insideArray = [];
    for (let i = 0; i < array.length; i++){
        _.filter(array[i], func);
        if(!func(array[i],i,array)){
            insideArray.push(array[i]);
        }
     }
    return insideArray;   
}


/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

//This fucntion will accept two parameters "array" and "func"
//The fucntion will then declare local variable set to empty array literal
//using a for loop this fucntion will loop through input array and pass each element to input function "func"
//all values that produce true are pushed to one index of array, while all values prudcing false go to second index in array
//return the local array variable with nested arrays isnide of truthy and falsy values

_.partition = function(array, func){
    let doubleArray = [];
    doubleArray[0] = [];
    doubleArray[1] = [];
    for (let i = 0; i < array.length; i++){
        func(array[i], array[i]['key'],array)
        if (func(array[i], array[i]['key'],array)){
            doubleArray[0].push(array[i])
            }
        else {
           doubleArray[1].push(array[i]); 
            }
        }
    return doubleArray;
}



/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//this function will take two inputs a collection 'list' and a function 'func'
//this function will declare local empty array literal 
//this function will evaluate the data typ of the input 'list'
//if the list is:
            // an array pass element, index, 'list to input 'func'
            //if object pass element, key, 'list' to 'func'
//this function will then loop through 'list' and invoke "func" or each element
//push result of each call to local empty array literal
//return local array

_.map = function(list,func){
    let anotherArray = [];
    if (Array.isArray(list)){
        for (let i = 0; i < list.length; i++){
            anotherArray.push(func(list[i],i,list));
        }
    } 
    else if (typeof list === 'object') {
        for (let key in list){
            anotherArray.push(func(list[key], key, list));
        }
    } 
    return anotherArray;
};



/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//funct 2 input parms- array of objects 'arrObj' and an object property 'prop'
//declare local empty array literal 
//loop through arrObj and push values at prop to local array using _.map function
//return local array


_.pluck = function(arrObj, prop){
    let nestedInfo = _.map(arrObj,function(obj){
        return obj[prop];
        })
    
    return nestedInfo;
}



//__________________________________________________________________________ End Tuesday ______________________________________________________________________//


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*
*/

// fucn input parms "lsit" (array or object), and "func"
//write if chain to evaluat list as array or object
                // array args - element, index, list
                // object arges current value, key, list
//set local boolean variable to true to indicate all test passed
//set conditional for situation funct call with no funct argument 
        //use for loop to see if all list values are truthy reset local boolean to false if not
//use each function to carry out given fucntion on all list elements and reset local boolean to false if any dont pass test
//return true only if all values in given lits pass given test, if so local boolean is unchanged and will return true

 _.every = function(collection, funct){
    let allPass = true;
    if (!funct){
        for (let i = 0; i < collection.length;i++){
            if (collection[i] === false){
                allPass = false;
            }
        }
        return allPass;
    }
    _.each(collection, function(element, index, collection){
       if(!funct(element, index, collection)){
           allPass = false;
       } 
    });
   return allPass; 
};


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/


//this function accepts 2 parms list & func
//set local boolean variable to false
//first must determine if func parameter is given 
//if func given pass list and func into _.each to invoke func on all values
//if one call produces true return true 
//if no func return true if 1 value in list is truthy

_.some = function(list, func){
    let somePassed = false;
    if (!func){
        for (let i = 0; i < list.length;i++){
            if (list[i] === true){
                somePassed = true;
            }
        }
    return somePassed;
    }
    _.each(list, function(element, index, collection){
       if(func(element, index, collection)){
           somePassed = true;
       } 
    });
    return somePassed;
};


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//function takes 3 parms list, func, and seed (seed is the data type of the return value)
// function then declare an unassigned variable previousResult to act as seed
//if no seed is given, set previousResult variable to seed inside if condition and pass list funct(element,i,list) to each function and set previousResult to value of func(previousResult, element, i, list)
//if there is a seed parm, reassign local variable to first element in list 
//then perform a foor loop to iterate through given list && reset local variable to value of func(previousResult, list[i], i, list) 
// return previous result 

_.reduce = function(list, func, seed){
    let previousResult;
    if (seed !== undefined){
        previousResult = seed;
        _.each(list, function(element, i, list){
          previousResult = func(previousResult, element, i, list)  
        });
    }
    else {
        previousResult = list[0];
        for (let i = 1; i < list.length; i++){
            previousResult = func(previousResult, list[i], i, list);  
        }
    }
    return previousResult;
}


/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//this function takes multiple objects
//utilizes Object.assing to copy and pass values from input to new object literal 
//returns newly created object with all values from input objects 


_.extend = function(...object){
    return Object.assign(...object);
}






//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
