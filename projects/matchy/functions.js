/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function search(array,string){  //write a func. dec. that takes 2 parameters array and string
    for (var i=0; i<=array.length-1;i++){//use for loop to look through array and finc name that makes animal name
        if(array[i].name === string){ //if the name of animal is present use that index to return the animal object in the array
            return array[i];
        } 
    }
    return null;// if the animal is not in the array return null.
  }
  
  
 
 //search(animals, "Tony");


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement) {// write a func. dec. 'Replace' that has 3 parameters: array "animals",string "name", and a replacemnt object "replacement"
    for (var i = 0; i <= animals.length - 1; i++) {// use for loop to go look through animals array 
        if (animals[i].name === name) { //find animal name in array that matches input animal name
            animals.splice(1, animals[i], replacement); // if that name is present in array replace that object with gvien object "replacment"
        }//use splice method to remove 1 element, at the animals[i] index, and replace with replacemetn object
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){//write func. dec. "remove" with two parameters a array "animals" and a string "name"
    for (var i = 0; i <= animals.length - 1; i++ ){// use for loop to look through given array 
        if (animals[i].name === name){//if an animal object already has that name in array remove it from the array
          animals.splice(i,1);  //use splice method to take out one item at the i index 
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
        
        //write a func. dec. "add" thhat take in two parameters and aarray "animals" and a object "animal"
        // use for loop to look through animals array for item with three specific conditions
                //animal name must not be found in animals array
                //animal object name && species key have length > 0
                // if all these conditions are met use push method to add unique name object to array

function add(animals, animal) { 
for (var i = 0; i <= animals.length - 1; i++) {
    if (animal.name.length > 0 && animal.species.length > 0) {
            if (animal.name === animals[i].name) {
                break;
            }else {animals.push(animal);}
        } 
    }
}



// function add(animals, animal) {
// for (var i = 0; i <= animals.length - 1; i++) {
//         return true;} 
//         if (animal.name !== animals[i].name && animal.name.length > 0 && animal.species.length > 0){
//             animals.push(animal);
//         } 
// } 

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
