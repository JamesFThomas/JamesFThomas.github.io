/* 
*       LOOPS
*
*   0. Loops in Javascript provide programmers with a way to repeatedly perform an action for a set number of times.
*      Loops use conditional statements in order to set the number of times or limit a certain action will be performed. 
*      All loops increment forward or bacward adding /subtracting from a value or acessing the elmeents of an array or object.
*
*/


    // 1. Explain the types of loops //

/*
*   0. There are multiple types of loops in Javascript but the three most common are the "while", for", and "for-in" loops. 
*      These loops are named for the keyword which indicates the following conditional statement is declaring the parameters of a loop.
*      All loops increment forward or bacward adding or subtracting from a value or acessing the elmeents of an array or object.
*
*
*/

let exampleCounter = 0;
let exampleCounter2 = 20;

let exampleArray = [1,2,3,4,5,6,7,8,9,10];

let exampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
};

//-------The while loop------ is used to repeat a certain actions for a set number of intervals
            
while (exampleCounter < 21){ // conditional statement, code will run until it evaluates to false, this sets the amount of times the loop will run
    console.log(exampleCounter); // prints --> 0 - 20 by increments of 1 then stops 
    exampleCounter++; // positively increments the value of exampleCounter after each iteration of the while loop until condition is met
};

while (exampleCounter2 > -1){ // conditional statement, code will run until it evaluates to false this sets the number of times the loop will run
    console.log(exampleCounter2); // prints --> 20 - 0 by increments of 1 then stops 
    exampleCounter2--; // negatively increments the value of exampleCounter after each iteration of the while loop until condition is met
};

//--------The for loop------- is used to access data in an array

for (let i = 0; i < exampleArray.length; i++) { //iterates forward over the array from 0 index to end element exampleArray.length-1
    console.log(exampleArray[i]); // prints --> 1 - 10 increasing by one each time
}// the incrementing variable is initialized and set to a value, the stopping point is set, and the amount to add to the incrementing value are all set in the conditional statement of the for loop

for (let i = exampleArray.length-1; i > -1 ; i--) { //iterates forward over the array from 0 index to end element exampleArray.length-1
    console.log(exampleArray[i]); // prints --> 10 - 1 decreasing by one each time
}// the incrementing variable is initialized and set to a value, the stopping point is set, and the amount to add to the incrementing value are all set in the conditional statement of the for loop


//---------The for/in loop-------- used to access the key values inside objects

for (let key in exampleObject){ // conditional statement intailizes incrementing variable "key" to loop through values in the "examplObject" object
    console.log(exampleObject[key])// prints --> key values of object = value1 value2 value3 value4 value5.
}







 // 2. Demonstrate loops //

/*
*   0. Setting the number of loop intervals is done in the conditional statement of an loop 
*      Looping forward and backward is done by increasing or decreasing the increamenting variable by a set amount each iteration this is set either in the condtional statement or follwoing code block.
*      looping forward and bacward over an array these parameters are set in the conditional statement of a for loop
*      looping over an object this is accomplished by utilizing a for in loop and the number of time is equivalent to the amount data isnide the object
*
*   1. All examples written out and explained above.
*
*/