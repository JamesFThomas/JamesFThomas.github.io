//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) { //function declaration name and parameters for inputs
    const resultArr = []; //created an empty array literal called "resultArr"
    for(let key in object){ //use for/in loop to look through object keys
        resultArr.push(object[key])// use array method .push() to add object key values into resultArr
    }
    return resultArr; //return new array of object key values 
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function keysToString(object) {
var valuesArray = []; //created empty array literal assinged to a variable "valueArray"
for (var key in object) {// use for-in loop to look through object 
valuesArray.push([key]);//use array push method to add object key name into valueAarray
}
return valuesArray.join(' '); //return array elements as one string sperated by space using .join() method with empty string as arguments


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/* keysToString() : Should take an object and return all its keys in a
string each separated with a space */

function valuesToString(object) {
    var valuesArray = []; //created empty array literal and assing it to variable "valuesArray"
for (var key in object) { //use for in loop to look through  object keys
    if(typeof object[key] === 'string') {//evaluate object keys to ascertain if value is a string data type
    valuesArray.push(object[key]); //using .push array method add they object key if it is a string data type
    }
}
    return valuesArray.join(' '); //return the local array elements as a one string data type sperated by a space
}




//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Should take one argument and return 'array' if its an array and 
'object' if its an object"*/
function arrayOrObject(collection) { 
    if (Array.isArray(collection) === true) {// set conditionla statement to check if input collection is an array using array method .isArray()
        return 'array'; //if coolection is an array return the string "array" 
    } else { // negative condition that runs if if statement is not true 
        return 'object';//if the collection input is not an array the function will return the string "object"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
capitalizeWord() : Should take a string of one word, and 
return the word with its first letter capitalized
*/

function capitalizeWord(string) { // siimple fucntion with sinlge line in code block
   return string.charAt(0).toUpperCase() + string.slice(1);
}
//condensed code by chaining string methods togethr on input string variable
//using chat() & toUuperCase change the size of the 1st lettr in the input string
//using splice remove the first letter of the input string and keep remaining charaters 
//using string concatnation "+" Add the new upperCase first letter of input string with lowercase copies of the remaining letters in input string to make a new string with 0 index charaters capitlized.

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 
capitalizeAllWords() : Should take a string of words and 
return a string with all the words capitalized
*/

function capitalizeAllWords(string) {
    var newString = [];
    var newerString = [];
    newString.push(string.split(" "));
for (var i=0; i <= newString.length; i++){
   newerString.push(newString[i].charAt(0).toUpperCase() + newString[i].slice(1));
    }
    return newerString.join(' ');    
}

// function capitalizeAllWords(string) {
//     var myArray = string.split(" ");  
//     string.split(" ");
//     let newArr = []; 
//     for (var i = 0; i <= myArray.length - 1; i++) { 
//      newArr.push(myArray[i].charAt(0).toUpperCase() + myArray[i].slice(1)); 
//     } return newArr.join(' '); 
// }
    

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}