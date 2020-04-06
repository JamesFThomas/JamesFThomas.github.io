 
 
/*  
*       FUNCTIONS
*
*   0.  In javascript, functions are a set of control flow statements that produce a certain desired result or set a certain value.
*       Functions are an essential piece of the programming puzzle needed to create functional code. Get it?
*       In order to use a function it must first be declared then invoked or called in the code with a function call.  
*       These procedures will be explained and demonstrated below.
*
*
*/


    // 1. The 2 Key phases of using functions //
/*
*   0. In order to use a function in javascript, you must first declare the function in a function statement and then invoke the function will a function call.
*      The function definition or statement or declaration begins with the keyword "function". 
*      Following the keyword the desired function name will be written, and the input parameters or values of that function inside parentheses.
*      The final component is housed curly braces and is the related statement/s that define the function, or simply the code to be executed when the function is called or invoked.
*
*   Note --> function expressions will also declare a function but set it to a variable name so it can be easily called or passed to another function
*
*/


//--------function declaration 
function exampleFunction(string){ // the "function" keyword, name of function "examplFunction", input parameters "(string)"
    console.log(string); // code to run if function is called
}

exampleFunction("This function was invoked"); // call to function with agruments to pass to function

//--------function expression

let anotherExampleFunction = function(){//intilize variable and assign it to the value of a function with no parameters.
    console.log("The Function Expression Was Invoked");//this is the code that will run when the expression is invoked
};

anotherExampleFunction(); //calling the function expression to exicute it's code block.


    // 2. What's the difference between function parameters and arguments?    //
/*
*   0. The difference between parameters and arguments is that:
*      Parameters are simple placeholders for the information that will be used when the function runs. They are named placeholders for later information
*      Arguments are the actual information that will be passed to the function to perform and action upon after it is invoked. 
*      Basically parameters are part of the function declaration and arguments are part of the function call.
*      Parameters are placeholders for the data which is the argument.
*
*
*/


function thirdExampleFunction(iAmThePrameter){//function declaration with name and parameters 
    console.log(iAmThePrameter);//code too be run and function ivocation 
}

thirdExampleFunction("I was the argument passed in! The function ran and I was logged");//function call with argument



    // 3. What is the syntax for a NAMED function   //
/*
*   0. The named function syntax is as follows:
*      The function keyword
*      The function name
*      The function parameters, if any in parentheses
*      The function code block or code be executed when invoked, in curly braces
*
*/

function fourthExampleFunction(){
    console.log("I'm the fourth example of functions. You starting to get it?");
}

fourthExampleFunction();


    // 4. How do we assign a function to a variable?     //
/*
*   0. In order to assign a function to a variable, you use the function expression syntax.
*      Even though I showed you this before I'll show you again because I want my green light.
*      Function expression syntax is as follows:
*      Declare a new variable using let, var, or const and then use "=" assignment operator 
*      Next assing the new variable to a function and the desired input parameters if any using the function keyword and placeholders in parentheses 
*      Finally include the code to be run when invoked inside of curly braces
*      The call to a function expression utilizes the variable name instead of the function name if it has one.
*/

let fifthExampleFunction = function(){
    console.log("The fifth function has run");
};

fifthExampleFunction();



    //5. How do you choose specific inputs and outputs with functions? //
/*
*   0. In order to ensure specific inputs, you would use parameters, as I have said before. These parameters will hold a place in the enclosed code until arguments are passed into the function call. 
*      Once you have the desired inputs you can write the accompanying code block to return the desired result based on the values passed in later.
*      This code can produce a number of different results and can utilize all previously mentioned control flow statements to be very specific in the returned result.
*
*/

function sixExampleFunction(parameter){
    if (typeof parameter === 'number'){
        console.log("That was a number");
    } else if (typeof parameter === 'string'){
        console.log("That was a string");
    } else {
        console.log("It ain't no string or number I know that!");//the will print because the argument was not a string or a number data type
    }
}

sixExampleFunction(true);




    // 6. What's up with functions and scope?     //
/*
*   0. Well, when we talk scope we need to know that the function scope is a child of the global class.
*      With that in mind that child element can access elements of its parent's scope, but those variables declared inside the function are not accessible to elements of the parent.  
*      This basically means that a variable inside a function can not be accessed out that function. 
*
*/

 function anotherExample(parameter){
    let parameterPlus = 1;
    let parameterReturn = parameter + parameterPlus;
    console.log(parameterReturn);
}

anotherExample(1);// this will print 2

//console.log(parameterPlus);// this will cause a reference error because parameterPlus is defined inside the function scope and not accessible in the global or parent scope. Boom  



    // 7. What's up with closures?     //
/*
*   0. Closures come about when you are dealing with a function inside of another function or "nested" function. 
*      Closures are instances when the nested function allows access to information or variables after the function has been run that has been declared in an in a parent or higher scope.   
*      The closure protects the information and allows it to live on and be returned even after the function runs. 
*
*
*/

function lastFunctionExample(){ // fucntion declaration 
    let variable1 = "I was declared outside the function"; //variable declared in the fucntion scope 
    function insideTheLastFunction(){//nested fucntion
        console.log(variable1);//code to be run, closure created around previous declared variable 
    }
    
    insideTheLastFunction();//function call of nested fucntion 
}

lastFunctionExample(); //fucntion call to parent function
