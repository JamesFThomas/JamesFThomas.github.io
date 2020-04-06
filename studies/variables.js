/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration // 
        //--> declaring a variable is the creation of a labeled container that will hold some type of data for reuse in future programming 
        //--> containers are recognized by the compiler when labels began with 3 key terms:

var myName;

let myName1;

//const myName2 = 2;

/*
 * 1.  At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything 
 * 
 * 2.  The use of the keyword 'let' or 'const' will declare an undefined variable but will cause the compiler to return an error message if not assigned a value.  
 */

console.log(myName); // prints => undefined

console.log(myName1); // prints => error

//console.log(myName2); // prints => error 


// 2. initialization or assignment //

/*
 * 0.  Assingment a variable is the act of placing a value into the labeled container created at declaration. 
 *
 * 1.  Containers values are assigned by using the "=" assingment operator. 
 *
 * 2.  While the keyword "var" and "let" can be assigned a value after the declaration (on a sperate line of code), 
 *     the use of the keyword "const" will return error message if the value is not assigned at the same time as the variable is being declared.
 *     
 */

myName = 'john';
console.log(myName); // prints => john

myName1 = 'johnny';
console.log(myName); // prints => johnny

//myName2 = 'jim';
console.log(myName); // prints => TypeError



// 3. re-assignment //

/* 1. Re-assignment is the act of placing another value into the labeled container that you created with 1 of 3 keywords after 
 *    it has previously been assigned an initial value.  
 *
 * 2. Re-assignment is possible only with a variable container that has been declared using the "var" or "let" keyword.
 *    Attempting re-assignment with the "const" keyword will cause the compiler to return an error message.  
 *
 *
 */
myName = 'bob';
console.log(myName); // prints => bob

myName1 = 'bobby';
console.log(myName); // prints => bobby

//myName2 = 'bobber';
console.log(myName); // prints => TypeError

/* NOTE: We can assign and re-assign anything to a variable declared with "var" or "let"-  but we cannot do this with constants
 *       or those variable declared with the "const" keyword.
*/

var myVariable = 1;
myVariable = 2; //--> prints = 2

let myVariable1 = true;
myVariable1 = false; //--> prints = false

//const myVariable2 = "Wont be re-assigned";
//myVariable2 = "I was re-assigned"; //--> TypeError: Assingment to constant variable 


//4. hoisting //

/*  1. Hoisting is the automotic process in which the variable is elevated to the top of the scope in which it was declared. This means that 
 *     we can utilize the variable in the code we write previous to us declaring it. 
 *  
 *
 * 2. All variables are hoisted or lifted to the top of their scope but only those declared with "var" keyword can be utilized successfully in 
 *    the program while those declared with "let" or "const" will result in a compiler error. 
 */
 
 
 console.log(message); //prints --> undefined
 
 var message = "I'm a message";
 