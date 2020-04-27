// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120

/*
1 - figure out the base case = this would be zero because fucntion will calling itself until n =o and there are no more postive intergers to multiple to n
2 - figure out recursive case = what case will eventually get me to my base case - Factorial(n-1)
3 - don't forget to sum previous results with recursive call as shown above in example factorial is n x next lowest positive number so n * factorial(n-1) would be how to sum the previous result with the next function call result 
*/
var factorial = function(n) {
    //base case: when should function stop calling itself
    if(n === 0){
      return 1; 
    }
    else if (n < 0){
      return null;
    }   //cursive case: what call should I make to fucntion to eventually get to base case  
    return n * factorial(n-1);  
};



// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

/*
goal = sum all values of the input array
return = sum of all numbers
iterate = move through array using splice(1) which drops the first array index and continue recursive call to next array index [1]
*/

var sum = function(array) {
    //Base Case: stop recusing when there are no more numbers in the array or array length is 0
  if(!array.length){
    return 0; 
  }
  //Recursive Case: what call should i make to get this one step closer to base case
    return array[0] + sum(array.slice(1)); 
};



//-------------------------------------------------------- Skip 3 --------------------------------------------------------------//



// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15

//use conditional if to get to nested arrays and then evaliate them 
var arraySum = function(array) {
};


//-------------------------------------------------------- Skipped above  --------------------------------------------------------------//

//------What I need To Do -----//
// need to recursively get n down to 0 or 1 to check if it is even or odd by subtracting by 2 
      // > decrementing n - 2 till 0 or 1 will allow use to not use modulus and determine if original input was even = 0 or odd = 1 

// 1 -> use if conditional to evaulate if "n" is even or odd
        //  > return true if n is even 
        //  > return false if n is odd
// do not use modulus 

// 4. Check if a number is even.
var isEven = function(n) {
  if (n < 0) { return isEven((n *-1)-2) } //if the number is negative we must first make it postive then recursively move back through the conditional chain  
  else if(n === 0 ){ return true;} //Base case for even number: any positive even number subtracted by 2 will eventually get to 0  
  else if( n === 1){ return false;}//base case for odd numbers: any odd number subtracted by 2 will eventually get to 1
  else {return isEven(n-2);}
  };




// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

/*
  what I need to do:
  - keep calling function while n > 0
  -- Base case: n === 1
  -- Recursive case: n + sumBelow(n-1)
  
*/ 


var sumBelow = function(n) {
  if (n < 0){return (n+1) + sumBelow((n + 1))}
  else if (n === 0){return n;}
  else {return (n-1) + sumBelow(n-1);}
};



// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
/*
edge case: if x === y return empty array literal
base case: if x+1 === y, this will stop the iterations before it hits the y variable as intended not incudling the start and stop points 
recusrsive case: use the number 1 above the start variable x and increment until base case which is x -1 or x + 1 dpending on weather or not x is greater than or less than y prameter 

-- prints all integers between two given values 


*/

var range = function(x, y) {
  if(x === y){ return [];}          //this is the edge case to return empty array lit. if the same numbers are entered or only 1 number is enetered 
  else if (x < y){                  //this conditional will attend the case if X parameter is less than the Y parameter
    if (x + 1 === y){               // this is the base case that will break the loop from logging values when x < y 
        return [];                  //return the array of integers between x and y not including x or y
      }
    return [x + 1].concat(range((x + 1), y));  //recurive function call in case when x < y parm, begin retrun array with number that is one greater than x and continue until base case is met , 1 less than y
  }
  else if (x > y){                  //this conditional will deal with the case if the x variable is larger than the y, in a sense will be counting down to y rather than counting uup
     if (x - 1 === y){              //base case for situation when x is greater than y, continue to decrement until x is one greater than y 
        return [];                  //once base case is met, x beging one greater than y return the array of integers that are betwen x and y parms not including x or y
      }
    return [x - 1].concat(range((x -1), y));  //recursive call to range fucntion, start return array number 1 less than x value and continue till base case which x value 1 greater than y value
  }
};




// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number


var exponent = function(base, exp) {
  if (exp === 0) return 1;                                                                                  //Base case: strop recursive calls with postive or negatuve exponent values when exponent is equal to 0
  return (exp > 0 ? base * exponent(base, exp-1).toFixed(5) : 1/base * exponent(base, exp +1).toFixed(5));  //recursive call to exponenet fucntion that will continue to subtarct or add 1 to exponent value until base case reached 
};                                                                                                          //used toFixed to return only 5 places afte decimal point 
                                                                                                            // used 1/base * expoenent recursive case to negate he negative and allow for iteration to base case       




// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false



var powerOfTwo = function(n) {
  if (n === 2 || n === 1) {return true};  //base case1: with 2 options, any number to the 0 power equals 1 so n===1 is one stop condition and because 2 to the 0 power is 2 we sgould break the recursive calls when either of these numbers have been met
  if (n < 2) {return false};  //base case2: for those number that don't divied down to 2 evenly they will be sen as not being a power of 2 and the function will return false 
  return powerOfTwo(n/2); //rcursive call to function dividing number by to to recurse the base cases of 2 or 1.
};






// 9. Write a function that accepts a string a reverses it.
 

var reverse = function(string) {
    if (!string.length){return "";} //base case:
    return string[string.length -1] + reverse(string.substring(0,string.length-1));                  //recursive call: start on the last character of the input 
};






// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  console.log(string);
  string = string.replace(/\s/g, '');
  if(string.length === 0 || string.length === 1) {return true;}     //base case even number:
  if (string[0].toLowerCase() !== string[string.length - 1].toLowerCase()) {return false;}     //base case odd number: if all characters moving from the outside have been the same         
    return palindrome(string.substring(1,string.length-1));        //recursive call: 
};


//-------------------------------------------------------- Skip Below --------------------------------------------------------------//

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};
//-------------------------------------------------------- Skip Above  --------------------------------------------------------------//









// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

var multiply = function(x, y) {                               
    if (x === 0){ return 0}                                   
    else if (x < 0){return -y + multiply(x+1, y);}             
    return y + multiply(x-1, y);                              
};            

//========================== had to put pseduo below because inside fucntion it breaking the tests somehow ========================//
//functional declaration 
// base case indicating end of recursive call
//when done with recursion return 0 value
//conditional case to make recursive call if x parm is a negative number
//recursive call will add to negative y parm and then incremenet x vriable until base case === 0
//recrusive call to add return value of function call to Y parm value and decrement x until base case === 0


//because we are unable to use advanced math and no multiplication we ia sense had to a recursive addition problem. Usinf one input variable as the base number and then the other 
  // as a the multipler, adding the original value to itself until the multipler or X variable reached 0 indcating the end of the mulptilcation problem



//====================================================================== Skip Below =====================================================================//

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

//====================================================================== Skip Above =====================================================================//


// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true


var compareStr = function(str1, str2) {
  
  if(str1.length < 1 && str2.length <1){return true;}       //base case: string1 = string = "";
              
  if (str1[0] !== str2[0]) {return false;}            //if a charter doesn't match, return false 
              
  return compareStr(str1.substring(1,str1.length), str2.substring(1,str2.length));             //recursive call with both strings shaved off 
  
};





// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

var createArray = function(str){
      if(str.length < 1) {return [];}  //base case: when strings length is zero
      return [str[0]].concat(createArray(str.substring(1,str.length)));  //recursive case: 
};


// 17. Reverse the order of an array

var reverseArr = function (array) {
  if (array.length < 1){return [];}                       //base case: array.length < 1
  return (reverseArr(array.slice(1))).concat([array[0]]); //recursive case: call recerseArr with index + 1
      
  //we have to use concat because the using push or unshift would have created nested arrays
  //the recusive call slices off the 2nd through last indexes of the array and adds them in front of the first element and doing this reverse the array elements until original array length is 0.
    //finally returning an array of reversed elements 
};
``


// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if (length === 0){return [];}                         //base case: when length parameter is 0
    return [value].concat(buildList(value, length-1));    //recursive case; call buildList with 1 less length parm
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

var countOccurrence = function(array, value) {
  if(array.length < 1){return 0;} //basce case: array.length < 1, the function will stop calling itself when the length of given array is 0
  else if( array[0] === value){return 1 + countOccurrence(array.slice(1), value);} //recursive call: if the 1 value of the array matches the value parameter return a 1 to represent the occurenace and call fucntion again on next element in array   
  return countOccurrence(array.slice(1), value); //recursive call: if the first element of the array does not match value just call function again for next element in array with no return count value       
};



// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  if (array.length < 1){return [];}      //base case: stop when array.length < 0;
  return [array[0]*2].concat(rMap(array.slice(1), callback));                //recursive call
};



//====================================================================== Skip Below =====================================================================//

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

//====================================================================== Skip Above =====================================================================//

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2


var nthFibo = function(n) {
  if (n < 0) {return null;}  //edge case to catch an input numbers that may be negative
  if (n === 0){ return 0; }  //base case - stop calling function when n === 0
  else if (n === 1){return 1;}//second base stop calling second recirsive call when n ===1 
  return nthFibo(n-1) + nthFibo(n-2); //recursive call to continue function unitl reaching preivous two array values that add together to equal the n input parm
}; //because the fibonacci sequence is composed of the two values infront of it we must return two values or indeces prior to the input number in order to determine the number that will occur at that index.



// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
  if (input.length < 1){return [];}        //base case: when input.length < 1;
  return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));    //recusive case:
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    if (array.length < 1){return [];} //base case: stop iteration when array.length < 1;  
    return [array[0][0].toUpperCase().concat(array[0].substring(1))].concat(capitalizeFirst(array.slice(1)));  //recursive call:
};

//====================================================================== Skip Above =====================================================================//

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

//====================================================================== Skip Below =====================================================================//



// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}

var letterTally = function(str, obj = {}) { //adding a seed like parameter to obj so we can recursively fill the object literal
    if(str.length < 1){return obj;}      //base case: strength < 1 citnune calling itself until the length of the input string = 0
    else if(!obj.hasOwnProperty(str[0])){ obj[str[0]] = 1;} //use hasOwnProperty to attempt to locate first element of string as key in input object literal, if not set it and give value
    else if(obj.hasOwnProperty(str[0])){obj[str[0]] ++;}//use same object method and if key is found increase the value of that key          
    return letterTally(str.substring(1) , obj);    //recursive call to letterTally to move to next element in string and checkobject lit if exsist. 
};


/*
  if (str.length === 0){    //base case
    return obj;
  }
  if(obj.hasOwnProperty(str[0])){   //if the object we are storing our data in already has an entry for that letter
    obj[str[0]]++; 
  }else{
    obj[str[0]] = 1;
  }
  return letterTally(str.substring(1), obj);
};
*/




// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    if(list.length < 1){return [];}//base case: stop calling functionwhen list.length = 0.
    else if (list[0] !== list[1]){return [list[0]].concat(compress(list.slice(1)))}   //recursive case1: check if the element at i0 !== i1 if not keep it
  else if (list[0] === list[1]){return [].concat(compress(list.slice(1)))} //recursive case2: if the element at i1 === i2 does don't keep it 
};







//====================================================================== Skip Below =====================================================================//

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

//====================================================================== Skip Above =====================================================================//


// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]

var minimizeZeroes = function(array) {
  if(array.length < 1){return [];}//base case: stop calling functionwhen list.length = 0.
      //first case needs to check to see if we have double 0 in the sequence if there are then we don't need the first or 0 index vale
  else if (array[0] === array[1] && array[0] === 0){return [].concat(minimizeZeroes(array.slice(1)))} //recursive case2: if the element at i1 === i2 does don't keep it 
      // if the 0 index value isn't a repeating 0 then we keep it and concat it with the recursive function call to move and check next index value
  else {return [array[0]].concat(minimizeZeroes(array.slice(1)))}   //recursive case1: check if the element at i0 !== i1 if not keep it
  
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]

var alternateSign = function(array) {
  if(array.length < 1){return [];}    //base case: function stops calling itself when the array length is zero
  return [Math.abs(array[0])].concat([Math.abs(array[1]) * -1]).concat(alternateSign(array.slice(2)));    //recursive call:
}; //using the Mah.abs allows us to ensure that the first idex value is always postive, absolute value will make a negative postive 
  // the second index by -1 ensures that our desired pattern of + && - numbers is returned 
  //we use the concat() method because the first and second indexes were made into arrays and is now possible to do so


// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"

//if num change to string of zero replace with 
var numToText = function(str) {
  if(!str.length){  // set the base case tostop calling the function when the length is 0
    return ""; // return the new string that we have made when done 
  }
  let switchMe = [str[0]];  //set the first charater of the string to it's own array and a local variable we can evaulate in switch statement 
  switch (str[0]){    //use swtich statement to change the number data type to string match
    case "1":         //use conditional checks of switch statement to repplace all digits 1-9 with string
    switchMe = "one";
    break;
    case "2":
      switchMe = "two";
    break;
    case "3":
      switchMe = "three";
    break;
    case "4":
      switchMe = "four";
    break;
    case "5":
      switchMe = "five";
    break;
    case "6":
      switchMe = "six";
    break;
    case "7":
      switchMe = "seven";
    break;
    case "8":
      switchMe = "eight";
    break;
    case "9":
      switchMe = "nine";
  }
  
  return switchMe + numToText(str.slice(1)); //recursive call - if this value matched any case in switch statement it would be swapped out and then concatnated with the rest of the string as the function moved through the string to the end or base case.
};






// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
