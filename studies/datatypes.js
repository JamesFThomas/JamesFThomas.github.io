/*
 *  Data Types:
 *
 *
 *  0. Data types are the different categories or varieties of information/values that are placed into 
 *     the labeled containers created at variable declaration. Without knowing the specific variety of data being utilized a programer may be unable
 *     to write working code because certain programming actions are not possible on all data types. 
 */
 
 
    //1. numbers //
 
 /*
  * 0. Are a type of data that represents numerical values.  
  *
  * 1. In Javascript, the "number" data type is the only numerical representative and ranges from: positive/negative whole numbers, decimals numbers, as well as exponent numbers.
  *
  */
  
   
  
  var myNumber = 4;
  
  
    //2. String //
  
  /*
   * 0. The "string" data type is one that represents textual values like: names, discrpitions, or senetences.  
   *
   * 1. In order for compiler to recognize string type data that information must be housed within doublt " " or single '' .
   *
   * 2. Any number, symbol, or character placed inside "" or '' becomes a string value.
   */
   
   var myString = "This is a string.";
   
    
    
    //3. Boolean //
  
  /*
   * 0. Boolean data types are simple yes or no answers to coding questions, conditions, or comparison that act as prerequisites to initiating other outcomes   
   *
   * 1. You may simply think of Boolean data types as switches that will or will not produce preset responses in the code if or if not met properly   
   *
   */
   
   
   let lightsOn = true;
   
  
   
     //4. Array //
  
  /*
   * 0. The Array data type is an ordered group or numbered list of data, that can be saved to one identifying variable.  
   *
   * 1. The Array data type can hold all other categories of Javascript data to include: numbers, strings, booleans, functions, objects, and even other arrays.  
   *
   * 2. The numbered positions in the array are called the 'index' while each stored value is called an 'element'.
   *
   * 3. The array data type or an array literal is created by assigning a value to a set of "[]" square brackets.
   */  
   
   let exampleArray = [];
   
     
     
     //5. Object //
  
  /*
   * 0. The Object data type is an un-ordered or non-numbered collection of related data.  
   *
   * 1. The contained data in the Object data type is stored in sets called "key:value" pairs, and can be comprised of all other javascript data types including other objects.
   *
   * 2. The Object data type or object literal is intaiulized by assigning a declared value too a set of curly braces "{}".
   */
   
   let exampleObject = {};
   
   
   
   
       //6. Function //
  
  
  /*
   * 0. The Function data type is sub-class of the Object data type that is callable and when done so executes a certain block of code of a set of actions.  
   *
   * 1. Functions like Objects and Arrays can be assigned to variables.
   *
   * 2. The function can be used interchangeably with any other value in Javascript as well as stored inside of Objects or Arrays.
   *
   * 3. Functions can create other functions to carry out specific coding tasks, and are invoked by writing the function or variable name followed by "()". 
   */
   
   let myFunction = function(){
       console.log("I am a function, watch me work!")
   };
   
     myFunction();
     
     
     
     
       //7. Undefined //
  
  /*
   * 0. The undefined data type is a special one that has only 1 value and that is undefined.
   *
   * 1. Undefined can represent a declared variable that has not yet been assigned or a function that returns no value. 
   *
   *
   */
   
   let undefinedValue = undefined;

   console.log(undefinedValue); //prints --> undefined 
   
   
       //8. Null //
  
  
/*
   * 0. The null data type is an Object and is much like undefined in that it can hold only one value and that is "null".
   *
   * 1. Null is seen as the absence of any value while undefined is the lack of assigning a value to a variable.
   *
   * 2. You can use the undefined data type to affectively empty the container created at a variable declaration.
   *
   */



   let nullValue = null;
   
   console.log(nullValue); //prints --> null
   
   /* Note // re-assignment using Null//
   let value = 'hey';
   
   console.log(value); //prints --> hey 
   
   value = null;
   
   console.log(value); //prints --> null
   */
   
   
       //9. Nan //
  
  /*
   * 0. The Nan data type stands for "Not a number", and is the representation of the return values for an invalid operation like dividing a number by 0
   *
   * 1. The Nan data type is considered by JS to still be a numeric data type but it is unrepresentable by a real number value. 
   *
   * 2. Results of Nan mean there is a value but it is not a legitimate number value, unlike defined which is an assigned value, and null which is the absence of value. 
   */
   
   let exampleNan = 0 / 0;
   
   console.log(exampleNan); // prints --> Nan 
   
   
       //10. Infinity & -Infinity //
  
  /*
   * 0. Infinity and its opposite -Infinity are numeric values in Javascript that represent number data that have exceeded the upper and or lower limits of numberic data types  
   *
   * 1. The upper and lower limits are 1.7976931348623157E+10308 and -1.7976931348623157E+10308 so any number above or below these points will be 
   *    represented as Infinity and -Infinity respectively. 
   *
   * 2. Any number added to or subtracted from the upper Infinity or -Infinity will be still be equal to those upper and lower limits.
   */
   
   
   let exampleInfinity = 1.7976931348623157E+10308 + 1;
   
   console.log(exampleInfinity); //prints Infinity
   
   let exampleNegInfinity = -1.7976931348623157E+10308 + -1;
   
   console.log(exampleInfinity); //prints -Infinity
   
   
   
   
       //11. Primtive or Simple vs. Complex Data Types //
  
  /*
   * 0. There are 6 (undefined, null, boolean, number, string, and symbol) primitive data types in Javascript are those data types that are immutable or unable to be altered.  
   *    These Primitive data types are also not considered an object by the compiler and because so do not possess methods. 
   *    The size of the container made to hold primitive data is fixed.  
   *
   * 1. Complex data types are those data types in Javascript that are created by the programmer not predetermined by the programming language and inturn are mutable or changeable. 
   *    These complex data types include objects, functions, the typeof operator, and arrays.
   *
   * 2. Primitive data types are stored by value which means simply because of their fixed size container they are stored on the call stack. The stack is a local region of memory for running functions. 
   *    Accessing the variable means direct manipulation of the stored value. 
   *    
   * 3. While complex data types are stored by reference which means due to the fluid or changing size of their container they are stored on the heap. The heap is the memory used to store global variables.   
   *    Accessing the variable is you accessing only a reference to that value and not the value stored on the heap. 
   */

let examplePrimative = 10;

console.log(typeof(examplePrimative)); // prints --> number

let exampleComplex = [1,{},"s"];

console.log(typeof(exampleComplex)); // prints --> object






       //12. Passing by COPY or Reference //
  
  /*
   * 0. When a primitive value is assigned to a variable the container created holds that actual value. 
   *    When you pass by copy, this means that the creation of a new variable passes a copy of that variable into the newly created container. Both containers have a copy of the same value. 
   *
   * 1. Passing by reference will create a new container for the value, but b oth containers hold an address to the actual object which is saved on the heap and not the actual object itself.  
   *
   *
   */
   
   
   

