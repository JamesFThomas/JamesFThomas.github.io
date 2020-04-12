 
/*
*       CONTROL FLOW
*
*   0. The control flow in Javascript refers to the order in which the code is executed by the compiler when read.
*      This flow of execution is carried out or controlled by various control statements that the coder can use in order to create specific results. 
*      These statements section off or group parts of code together into blocks to be run as designed by the programmer for their desired effect.
*
*
*/



    // 1. If Statements //
/*
*   0. In javascript the "if" statement is probably the most commonly used and usually one of the first control flow statements new developers will encounter.
*      The "if" statement is composed of 3 parts: 
*           1 = the keyword if of course, 
*           2 = is a conditional statement wrapped in parentheses that sets the truthy to be evaluated
*           3 = the code to be executed "if" the truthy value is met is wrapped in curly braces following the conditional statement 
*
*   Note --> the conditional statement can have multiple truthy conditions that need to be met to execute the linked code block or multiple if's can be chained together 
*            to create the desired results of the programmer.
*/
let exampleIf = 8;

if (typeof exampleIf === "number"){ // if key word and conditional statement that must evaluate to true for code block to run
    console.log("The example value was a number data type");//this code will be executed if the conditional statement is met
}//print --> The example value was a number data type



    // 2. Else If Statements //
/*
*   0.  The "Else If" statement actually is just like the if statement in that it is a control flow statement that must evaluate to true in order for the following or like code block to be executed
*       The "Else If" is always chained together following the entire "if" statement and corresponding code block as an alternate truthy value
*       The "Else If" statement will only be evaluated if the "if" proceeding it was evaluated to false, then the compiler moves down to the next line of code the "Else If"
*
*   Note --> You can multiple "if's" with no "Else If", but you can never have "Else If" with first having and "if"
*
*/

let exampleElseIf = 15

if (exampleElseIf < 10){ console.log("The code in the 'If' block ran");} // since If conditional is false the compiler reads evaluates it and then moves down to next line of code
else if (exampleElseIf > 11){console.log("The code in the 'Else-if' block ran");} // since Else-if conditional is true computer runs this code block
// prints -->  The code in the 'Else-if' block ran



    // 3. Else Statement  //
/*
*   0. The Else statement is simply the catch-all conditional that will execute if the "If" or the "Else-if" statements are found to be false
*      Unlike the "Else-if" and "If" the else statement does not have a conditional statement that goes with it. 
*      Additionally the Else statement can be used in a chain either with "If" alone or the last statement in and "If-Else/if" flow chain to create the "if-Else/if-Else"
*      The "Else" is always the last statement in the chain while the "If" is always the first.
*
*/


let exampleElse = false;

if (exampleElse === true){ console.log("The code in the 'If' block ran");} // since If conditional is false the compiler will move down to next code block
else if (typeof exampleElse === "string"){console.log("The code in the 'Else-if' block ran");} // since Else-if conditional is false the compiler will move down again
else {console.log("The code in the 'Else' block ran")} // prints --> The code in the 'Else' block ran






    // 4. Switch Statement  //
/*
*
* 0.    The switch statement in javascript is a block of code that evaluates multiple conditionals or "cases" in order to produce the desired result.
*       It will do the same job as the "if-Else/if-Else" statement chain but uses a slightly different syntax to be set up  
*       The switch statement will evaluate one input expression against multiple cases that must be true in order to run and if now are true the default case will run.
*
*       Revision
*       The syntax for the switch statement is as follows: 
*           The statement begins with the keyword switch which indicates that the following code is to a be switch statement.
*           Followed that will be a set parenthesis that will contain variable or value to be evaluated or compared.
*           Next is the set of curly braces that house the body of the switch statement, or all the different 'Cases' to test input value against.
*           Once inside the switch statement body another keyword is used "case" - this indicates to computer that the following value is to be compared to the input value.
*           Directly after the "case" keyword is the value to be compared against the input case if a string it must be wrapped in quotation marks
*           If that case is true then code directly below the line with case keyword and alternate value will run
*           The code houses under the case word and condition runs only if that condition is true and if true after running the code the computer drops down one line to "break" keyword
*           The "break" keyword tells the computer to stop the comparisons and use that case value to switch out with input value and leave the switch statement 
*           The final component of the switch statement is the default keyword always located at the bottom of the last lines of the statement
*           These lines are the false condition or catch-all like the else statement and it runs if no other cases above were true, the default runs its housed code and statement is done
*           
*       
*       Note --> The switch statement is easier to write out and handle when multiple evaluation cases need to be checked for the desired result.
*                
*/



let exampleSwitch = "bananas"; 

switch (exampleSwitch){ //switch keyword begins statement followed by the interchangeable case to evaluate
    case "apple": // this is the first evaluation case 'apple' proceeded by the case keyword 
        console.log("Apples are good");//if the input variable matches any of the cases in the code body this particular code block will run
        break;//if the code in the case runs the computer will read this keyword 'break' which exits the loop. If not it will continue down the body comparing values 
    case "orange":
        console.log("Oranges are better");
        break;
    case "bananas":
        console.log("Bananas are the best!");
        break;
    default: //this is the catch-all case that is indicated by the default keyword acts exactly like the else statement in the if/else chain
        console.log("Pick a fruit please");//if none of the cases evaluated to true or ran above the default will run and then the computer will exit this code
}


